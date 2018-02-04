/**
 * 修饰器是一个函数 用来修改 类的行为
 * 三个点 1. 是个函数 2.是拓展作用 3.只在类中有效
 */
// {
//     let readonly = function(target, name, descriptor) {
//         descriptor.writable = false;
//         return descriptor
//     };
//     class Test {
//         @readonly
//         time() {
//             return '2017-07-15';
//         }
//     }
//     let test = new Test()
//     console.log(test.time());
// }