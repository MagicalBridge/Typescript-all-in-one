/**
 * Proxy 和 Reflect 的概念：
 * Proxy 代理 类比现实生活中 供应商代理商 还有就是 消费者
 * 连接了用户和真实对象的中间一个层
 */


{
    /**
     * 供应商的原始的对象 有三个属性我们在业务开发中
     *  把它当成原始的对象存储我们的真实数据
     */
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };

    /**
     * 创建一个代理商 第一个参数要代理的东西
       有一个原始的供应商对象,通过proxy新生成一个对象
       这个对象是映射obj的,最终用户操作的是 monitor
       无论用户读取还是修改monitor 最终通过Proxy 传递给 obj
       
     */
    let monitor = new Proxy(obj, {
        /**
         * 拦截对象属性的读取 也可以称之为 代理所有的对象的读取的操作
         * 这里称之为拦截 如果我想操作对象的time属性 并不是直接操作obj的
         * 而是通过 Proxy 代理对time的操作这里的target指的是obj这个对象
         */
        get(target, key) {
            // console.log(target) 这里的target 就是obj 不论你读取我的什么属性
            // 我将里面的 2017 修改成2018
            return target[key].replace('2017', '2018')
        },
        /**
         *  拦截对象设置属性
         *  只允许修改name 属性其余的属性不允许修改
         */
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value; // 允许修改;
            } else {
                return target[key]; // 不允许修改;
            }
        },
        /**
         * 拦截key in object操作
         */
        has(target, key) {
            if (key === 'name') { // 只暴露name属性 其他的不暴露;
                return target[key]
            } else {
                return false;
            }
        },
        // 拦截delete
        deleteProperty(target, key) {
            // 如果属性是以"_"开头的 可以删除 如果不是 则不允许删除
            if (key.indexOf('_') > -1) {
                delete target[key]; // 删除对象
                return true;
            } else {
                return target[key]
            }
        },
        /**
         * 拦截Object.keys,
         * Object.getOwnPropertySymbols,
         * Object.getOwnPropertyNames
         */
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time')
        }
    });


    /**
     * get
     */
    // console.log('get', monitor.time); // get 2018-03-11

    /**
     * set
     */
    // monitor.time = '2018';
    // monitor.name = 'Louis';
    // console.log('set', monitor.time); // set 2018-03-11  并没有变成 2018
    // console.log('set', monitor.name); // set Louis 从net 变成了 louis



    /**
     * has 
     */
    // console.log('has', 'name' in monitor); // true
    // console.log('has', 'time' in monitor); // false 这里我们已经不能通过for in 遍历判断time属性是否在monitor了

    /**
     * 拦截删除操作
     */

    // delete monitor.time;
    // console.log('delete', monitor); // Proxy {time: "2017-03-11", name: "net", _r: 123}
    // console.log('delete', monitor.time); //time还在 delete 2018-03-11
    // delete monitor._r
    // console.log('delete', monitor); // Proxy {time: "2017-03-11", name: "net"}


    /**
     * 遍历拦截
     */
    // console.log('ownKeys', Object.keys(monitor)); // ownKeys (2) ["name", "_r"] time 遍历不到

}


{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    };
    // console.log('Reflect get', Reflect.get(obj, 'time'))
    // Reflect.set(obj, 'name', 'kerry');
    // console.log(obj);
    // console.log('Reflect has', Reflect.has(obj, 'name')) // true
}


{
    /**
     * 数据校验：
     * 使用Proxy 和Reflect 进行解耦:
     */
    function validator(target, validator) {
        // 返回一个proxy的对象
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    // console.log(target)
                    // console.log(this);
                    let va = this._validator[key]; // va 是个函数
                    console.log(va);
                    if (!!va(value)) { // 返回一个布尔值
                        return Reflect.set(target, key, value, proxy)
                    } else {
                        throw Error(`不能设置${key}到${value}`)
                    }
                } else {
                    throw Error(`${key}不存在`)
                }
            }
        })
    }

    const personValidators = {
        name(val) {
            return typeof val === 'string'
        },
        age(val) {
            return typeof val === 'number' && val > 18;
        }
    }
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            return validator(this, personValidators);
        }
    }
    const person = new Person('lilei', 30);
    console.info(person); //  proxy {name: "lilei", age: 30}

    // person.name = 48 //不允许修改
}