// 1. 下面这个函数打印的是 0， 1， 2, 3, 4

for (var i = 0; i < 5; i++) {
    console.log(i);
}



/*
    2. 定时器是一个异步执行的过程
    在for循环完毕之后执行的此时已经是
    循环完毕之后的 i  = 5;
 */
// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000 * i);
// }


/*
    3. 打印出来的i 到底是什么值 主要取决于传进去的是什么
    使用闭包的方式 防止for循环的过程中 变量被销毁
    下面的这两断代码是一样的
 */

// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     })(i);
// }

// for (var i = 1; i < 5; i++) {
//     (function(a) { // 形参
//         setTimeout(function() {
//             console.log(a); //操纵变量a，和i无关
//         }, a * 1000);
//     })(i) // 入参
// }



/*
    4.这种情况下虽然使用了闭包但是
    并没有设置形参 因此定时器里面使用的
    i 是for循环的i 并没有被保留下来

 */
// for (var i = 0; i < 5; i++) {
//     (function() {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     })(i);
// }


/*
    5.这种形式的写法和上面的第3种写法
    一样只不过这里使用的是在定时器的
    第一个函数 中使用的闭包保存这个变量
    第3中写法 使用的是在外层加了一个闭包

 */
// for (var i = 0; i < 5; i++) {
//     setTimeout((function(i) {
//         console.log(i);
//     })(i), i * 1000);
// }



/*
    这个无需多言 延时三秒执行
 */
// setTimeout(function() {
//     console.log(1)
// }, 3000);


/*
    给一个函数包装上了 Promise 相当于
    函数的执行过程代理给了Promise对象
    promise对象是一个异步执行机制的包装对象
    即使在promise 对象里面函数依然是顺序执行的

    首先打印 2
    遇到for循环 在i循环到 9999 时候执行resolve()
    这个resolve 执行的机制是是使得then方法执行
    这个过程是一个异步的 在异步执行的过程中
    函数继续执行 打印3 打印5  等到 for循环完毕
    执行then 函数 打印4
 */
// new Promise(function executor(resolve) {
//     console.log(2);
//     for (var i = 0; i < 10000; i++) {
//         i == 9999 && resolve();
//     }
//     console.log(3);
// }).then(function() {
//     console.log(4);
// });
// console.log(5);