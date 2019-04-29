/**
 * 数组的扩展
 * Array.from()  将类数组转换为数组
 * Array.of()  创建一个数组
 * find()  用来对数组进行筛选  如果没有找到相应的  返回undefined
 * findIndex() 用来对数组进行筛选  没有找到返回-1；
 * fill()  // 对数组进行填充的
 */

/*
    Array.from()  将类数组转换为数组
*/
var lis = document.querySelectorAll('li');
console.log(Array.isArray(lis)); //false
var lis2 = Array.from(lis);
console.log(lis2); // [li, li, li, li]
console.log(Array.isArray(lis2)); // true



/*
    Array.of()  创建一个数组  
*/
// const arr = Array.of(1);
// console.log(arr);


/*
    find()  用来对数组进行筛选  如果没有找到相应的  返回undefined
*/
const arr = [1, 2, 3, 4];
let res = arr.find(a => {
    return a < 2;
});
console.log(res); // 1  返回的是第一个符合元素

/*
    findIndex() 用来对数组进行筛选  没有找到返回-1；
*/
const arr1 = [1, 2, 3, 4];
let res2 = arr1.findIndex(a => {
    return a < 2;
});
console.log(res2); // 0 返回的是第一个符合元素的索引


/*
    fill()  // 对数组进行填充的
*/
const arr2 = [1, 2, 3, 4];
arr2.fill('abc', 1, 3); // //从1开始到3结束 不包括第三个
console.log(arr2);