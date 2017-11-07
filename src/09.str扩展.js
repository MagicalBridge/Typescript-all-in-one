/**
 * 字符串的扩展
 */

// 模板字符串

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
 * 1 repeat
 * 2 includes() 
 * startsWith() 
 * endsWith()
 */

let str1 = 'a';
let str2 = str1.repeat(3);
console.log(str2);

let str = 'louis';
console.log(str.includes('ou')); // true
console.log(str.includes('abc')); // false


console.log(str.startsWith('l')); // true
console.log(str.startsWith('o')); // false

console.log(str.endsWith('ov')); // true
console.log(str.endsWith('m')); // true