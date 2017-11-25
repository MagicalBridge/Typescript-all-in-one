// 基本概念
/*
let 命令：用来声明一个变量和var非常类似
const命令： 用来声明一个常量  常量就是不可以变化的量
 */

/**
 * 用let声明变量的注意事项
  1.使用let声明的变量所声明的变量只在命令的所在的代码块内部有效
 */

// {
//     let a = 1;
//     var b = 2;
//     console.log(a);
// }
// console.log(a); // 报错a is not defined
// console.log(b);

/*
2.使用let 命令声明的变量在预解析的时候不会被提升;
  在es5中我们在声明之前使用这个变量是不会报错的会
  显示undefined 原因是 在js预解析的过程中 它会从上到下解析一遍
  代码 但是注意此时是不会直接赋值的 而是真正的读到这一段代码的
  时候才会真正的赋值; 这其实是一种非常不合理的行为
*/

// console.log(a); // undefined
// var a = 1;

// console.log(b);
// let b = 2;


/**
 * 3.暂存性死区
 */

// let f = 10;

// function fn() {
//     f = 7; // 暂存性死区
//     let f = 2;
// }
// fn();


/**
 * 4.let 不允许在同一个作用域内声明已经存在变量
 */

// var a = 1;
// let a = 2;

// let b = 1;
// let b = 2;


/**
 * 5.let 在 for 循环中的应用
 */

var btns = document.querySelectorAll('button');
// for (var i = 0; i < btns.length; i++) {
//     btns[i].onclick = function() {
//         console.log(i)
//     }
// }



// 自定义索引的方式
// for (var i = 0; i < btns.length; i++) {
//     btns[i].index = i;
//     btns[i].onclick = function() {
//         console.log(this.index)
//     }
// }

// 闭包的方式
// for (var i = 0; i < btns.length; i++) {
//     (function(i) {
//         btns[i].onclick = function() {
//             console.log(i)
//         }
//     })(i)
// }

//  使用let就可以直接使用这样的方式
// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick = function() {
//         console.log(i)
//     }
// }


/**
 * 使用let 声明的变量在循环语句之内是父作用域 在循环
   体内部是一个子作用域
 */

// for (let i = 0; i < 3; i++) {
//     let i = 10;
//     console.log(i)
// }
// console.log(i)


// const 命令同样有let的特点
// 1.所有声明的常量只在其所在的代码块内有效
// 2.所有声明的常量不会被提升
// 3.不能声明已经声明过的常量


// 需要注意的地方
// 1.声明的时候必须赋值
// const c;


// 2.声明的常量存储的是基本的数据类型 是不可以改变的
// 如果存储的是引用类型的值 改变引用类型的值是没有关系的

// const a = 1; // Assignment to constant variable.
// a = {}

// const obj = { a: 10 }
// obj.a = 20;
// console.log(obj)