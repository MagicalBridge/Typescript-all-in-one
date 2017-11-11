/**
 * Symbol
 */

/**
 * 1 什么是 Symbol ?
 *  Symbol，表示独一无二的值。它是 JS 中的第七种数据类型。
 */

// 基本的数据类型： Null Undefined Number Boolean String Symbol
// 引用数据类型：Object

// let s1 = Symbol();
// let s2 = Symbol();
// console.log(typeof s1); // 'symbol'
// console.log(s1 === s2); //false;

/*
Symbol 函数前不能使用 new 否则会报错， 
原因在于 Symbol 是一个原始类型的值，不是对象。
*/

// let s3 = new Symbol();




/*
  如果不传入参数 实际上我们是区分不出来
  哪个是是哪个symbol的数据类型的
  看如下的代码
*/
// console.log(s1);
// console.log(s2);


/*
  Symbol 函数接收一个字符串作为参数，
  表示对Symbol的描述，主要是为了在控制台显示，
  或者转为字符串的时候，比较容易区分
 */

// let s3 = Symbol('Louis');
// let s4 = Symbol('kerry');
// console.log(s3, s4);

// 这个里面的参数 仅仅只是个描述而已并不具备其他的功能
// console.log(Symbol('blue') === Symbol('blue')); //false

/**
 * Symbol 数据类型的转换;
 * 在js中转换的时候无非就是转换成;
 * number bollean str 其中的一种;
 * 
 */

/*
   转换成字符串使用 String||toString 强制类型转换
*/
// console.log(String(Symbol('Louis')));    // Symbol(Louis)
// console.log(Symbol('kerry').toString()); // Symbol(kerry)

/*
 转换成 bollean 值  Symbol 是一个true值
 这里注意一下 在做if判断的时候 是一个真的值
*/
// console.log(!!Symbol()); // true

/*
symbol 数据类型 不能转换为"数字"
*/
// console.log(Number(Symbol()));  //报错


/*
Symbol 不能做任何的运算
*/
// console.log(Symbol('momo') + 'pangzi');  // 不能做字符串的拼接;
// console.log(Symbol('momo') * 100);  // 不能喝数字进行运算




/**
 * 3 作为对象的属性名
 */

// let yyy = Symbol('yyy');  // 创建一个Symbol
// const obj = {};           // 创建一个空对象
// obj[yyy] = 'hello';       // 给对象赋值  key 是Symbol 值是"hello"
// console.log(obj);  
// console.log(obj[yyy]);



// let ss = Symbol('ss');
// const data = {
//   [ss]: 'louis'
// };
// console.log(data);
// console.log(data[ss]);


/*
  注意以下的写法不同之处
  使用以下的写法是无法通过data[key]拿到相应的值
*/
// const data = {
//     [Symbol()]: 123
// };
// console.log(data);
// console.log(data['Symbol()']); // undefined



/*
  不能被for...in循环遍历虽然不能被遍历，
  但是也不是私有的属性，可以通过Object.getOwnPropertySymbols方法
  获得一个对象的所有的Symbol属性;
*/

// const data2 = {
//     [Symbol()]: 123,
//     a: 1,
//     b: 2
// };
// for (let i in data2) {
//     console.log(i); // 打印出来的只有 a 和 b  [Symbol()]: 123并没有
// }
// console.log(Object.getOwnPropertySymbols(data)); // [Symbol()]
// console.log(data[Object.getOwnPropertySymbols(data)[0]]); // 123






































































// 4 Symbol.for() 和 Symbol.keyFor