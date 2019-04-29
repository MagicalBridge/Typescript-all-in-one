/**
 * 变量的解构赋值
 */

// -------------------------------------------------------------------
/**
 * 基本概念：
 *    本质上就是一种匹配模式，只要等号两边的模式相同，那么左边的变量就可以
 *    被赋予对应的值。
 * 解构赋值主要分为：
 *    1 数组的解构赋值
 *    2 对象的结构赋值
 *    3 基本类型的解构赋值
 */


// let a = 1;
// let b = 2;
// let c = 3;

// let [a, b, c] = [1, 2, 3];

// console.log(a, b, c);

// -------------------------------------------------------------------
// 1 数组的解构赋值

// let [a, [
//     [b], c
// ]] = [1, [
//     [2], 3
// ]];

// console.log(a, b, c); // 1, 2, 3

// let [, , c] = [1, 2, 3];
// console.log(c); // 3


// 解构不成功 默认undefined
// let [x] = [];

// console.log(x); // let x; undefined

// let [y = 1] = [];
// console.log(y); // 1



// -------------------------------------------------------------------
// 2 对象的解构赋值
// 对象的解构赋值和 对象的解构赋值还是有一定的区别的
// 数组的内部的数据是有相应的位置概念的 变量的取值是和
// 位置有关系的 对象的属性是没有次序的 必须是同名的
// 属性才能取到正确的值；
// let { a, b } = { b: 'bbb', a: 'aaa' };

// console.log(a, b);


// 内部的机制是 先找到相应的变量 然后赋值  其实和前面的变量名  没有什么关系
// let { a: b } = { a: 1 };
// let { a: a, b: b } = { a: 1, b: 2 }
// let b = 2;
// console.log(b);
// console.log(a);


// -------------------------------------------------------------------
//3 基本类型的解构赋值

// let [a, b, c, d] = '1234'; // 这里被转化成了类数组的
// //
// console.log(a, b, c, d);

// let { length: len } = 'Louis';

// console.log(len);

let { toString: ts } = 1;
let { toString: bs } = true;

console.log(bs)
console.log(ts)
console.log(bs === Boolean.prototype.toString);
console.log(ts === Number.prototype.toString);

// console.log(Number.prototype.a);
// console.log(a)
// null 和 undefined 不能进行解构赋值
// let [a] = null;
// let [a = 1] = [null]; 
// let [a = 1] = [undefined];
// console.log(a)