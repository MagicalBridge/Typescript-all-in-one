/**
 * 对象的扩展
 */

// 对象的简洁表示法

let a = 1;
// 这是之前的obj
const obj = {
    a: a
};
console.log(obj)

// es6规定如果你的key的值和value 是相同的 可以简写
let b = "louis"
const objsimple = { b }
console.log(objsimple);

// 函数的表示法
const objfn = {
    fn: function() {
        console.log(1);
    },
    fn2() {
        console.log(2);
    }
}

objfn.fn();
objfn.fn2();


// Object.is()  判断两个数据是否一样 是不是长得一样
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); //false



// Object.assign() 
// 用于对象的合并，将源对象的所有可枚举属性，复制到目标对象。
let obj1 = { a: 1 };
let obj2 = { a: 2, b: 3 };
let obj3 = { c: 'abc' };
Object.assign(obj1, obj2, obj3);
console.log(obj1);