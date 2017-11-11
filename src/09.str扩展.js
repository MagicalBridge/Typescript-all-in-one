/**
 * 字符串的扩展
 */

// 模板字符串
// 传统的字符串拼接 使用的是+号拼接
let flag = true;
let html = `<ul>
              <li>
                <span>${'首页'}</span>
                <span></span>
                <span></span>
                <span class="${flag ? 'show' : 'hide'}"></span>
                <span></span>
              </li>
            </ul>`;

console.log(html);



/**
 * 1 repeat          对字符串进行重复的操作
 * 2 includes()      查找字符串是否包含某一个字符串
 * 3.startsWith()    查找开头是否包含某一个字符串
 * 4.endsWith()      查找结尾是否包含某一个字符串
 */


//  1 repeat         对字符串进行重复的操作
let str1 = 'a';
let str2 = str1.repeat(3);
console.log(str2);

//  2 includes()      查找字符串是否包含某一个字符串
let str = 'louis';
console.log(str.includes('ou')); // true
console.log(str.includes('abc')); // false


// 3.startsWith()      查找开头是否包含某一个字符串
console.log(str.startsWith('l')); // true
console.log(str.startsWith('o')); // false


// 4.endsWith()      查找结尾是否包含某一个字符串
console.log(str.endsWith('is')); // true
console.log(str.endsWith('m')); // false