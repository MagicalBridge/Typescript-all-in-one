/**
 * 函数的扩展
 *  1 为函数参数指定默认值
 *  2 函数的 rest 参数
 *  3 箭头函数
 */

// ------------------------------------------------
// 1 为函数参数指定默认值
function fn(a, b) {
    a = a || 10;
    b = b || 20;
    console.log(a + b);
}

fn();
fn(0, 10);


function fn2(a = 10, b = 20) {
    console.log(a + b);
}

fn2();
fn2(0, 10);


// ----------------------------------------------
// rest 参数形式为（“...变量名”），用于获取函数的多余参数，
// 这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

function sum() {
    var args = arguments;
    var res = 0;
    for (var i = 0; i < args.length; i++) {
        res += args[i];
    }
    console.log(res);
}
sum(1, 2, 3, 4, 5, 6);

function sum2(...arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    console.log(res);
}

sum2(1, 2, 3, 4, 5);



function sum3(a, ...arr) {
    var res = a;
    for (var i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    console.log(res);
}

sum3(10, 1, 2, 3, 4, 5); // 25


// -----------------------------------------------
// 使用“箭头”（=>）定义函数。

const arrowfn = a => a;
const arrowfn2 = function(a) {
    return a;
};

console.log(arrowfn(1));
console.log(arrowfn2(2));



// 如果想要写0个参数或者多个参数的时候  参数的部分需要加上小括号
const arrowfn3 = (a, b) => a + b;
console.log(arrowfn3(2, 5));


// 箭头函数内部有多行代码的时候
const arrowfn4 = (a, b) => {
    a = a * 2;
    b = b * 2;
    return a + b;
};
console.log(arrowfn4(1, 2));

// 如果箭头函数的返回值是一个对象的时候  
// 需要使用小括号将他们包裹起来

const arrowfn5 = (a, b) => ({ a, b });
console.log(arrowfn5(1, 2));

// 数组排序
var arr = [5, 2, 3, 4, 1];
arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);


// 使用箭头函数的方法
arr.sort((a, b) => a - b);
console.log(arr);



// 1 箭头函数体内没有自己的this对象，
// 所以在使用的时候，
// 其内部的this就是定义时所在环境的对象，
// 而不是使用时所在环境的对象。

function fnthis() {
    setTimeout(function() {
        console.log(this); // window
    }, 1000);
    setTimeout(() => {
        console.log(this); //obj
    }, 1000);
}

var obj = { a: 1 };
fnthis.call(obj); // 执行的时候 我们将这个函数 执行环境 指向了obj
// 不能给箭头函数使用 call apply bind 去改变其内部的this指向


// 2 箭头函数体内没有arguments对象，如果要用，可以用Rest参数代替。
function fnarguments() {
    setTimeout(() => {
        console.log(arguments);
    }, 1000)
}
fnarguments(1, 2, 3);


// 在使用箭头函数 处理不定参数的时候
const fnnotsure = (...arr) => arr;
console.log(fnnotsure(1, 2, 3, 4));

// 3 不可以当作构造函数，不可以使用new命令，否则会抛出一个错误。
// const Fn = (a, b) => a + b;
// const f = new Fn(1, 2);