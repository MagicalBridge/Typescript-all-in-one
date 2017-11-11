/**
 * class 的继承等相关知识
 *  extends  子类继承父类
 *  static   添加类的静态方法
 *  super    子类继承父类的时候方便调用父类原型上面的方法
 */

// 获取到这个画布
const canvas = document.querySelector('#canvas');
// 获取到这个画布的绘图环境
const ctx = canvas.getContext('2d');

// 初始化两个常量 来指定画布的分辨率
const w = canvas.width = 600;
const h = canvas.height = 400;

// class 关键字 声明这个小球的类
class Ball {
    // 指定一下构造函数 初始化三个参数 绘制坐标和这个半径
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        // 添加一个  color 属性 一个随机的 rgb值
        // 这里面需要一个随机数函数 但是这个方法和小球本身
        // 并没有什么关系 所以单独抽象出来一个静态方法
        // ~~ 两个波浪号去掉小数的部分
        this.color = `rgb(${~~Ball.rpFn([55, 255])}, ${~~Ball.rpFn([55, 255])}, ${~~Ball.rpFn([55, 255])})`;
        // return this 在实例化的时候方便掉其他的方法
        return this;
    }

    // 绘制小球的render方法  接收一个参数 ctx 绘图的上下文环境
    render(ctx) {
        ctx.save(); // 保存的以下绘图环境
        ctx.translate(this.x, this.y); // 变换到小球的绘制坐标
        ctx.fillStyle = this.color; // 指定小球的颜色
        ctx.beginPath(); // 起始一个路径
        ctx.arc(0, 0, this.r, 0, 2 * Math.PI); // 绘制小球的路径
        ctx.fill(); // 给小球填充颜色
        ctx.restore(); // 恢复绘图环境
        return this;
    }

    // 随机数函数 接收一个数组
    static rpFn(arr) { // Ball.rpFn([1, 10])
        // 使用扩展运算符将传入数取出最大值和最小值
        let max = Math.max(...arr),
            min = Math.min(...arr);
        // 随机数的万能公式
        return Math.random() * (max - min) + min;
    }
}

// 这个小球 具有父类的所有的属性 包括颜色 等等;
// 并且我们需要让他自由落体;
// 这里使用 extends 关键字
// 如果花括号内部什么都不写 相当于 复制了一个父类
class SuperBall extends Ball {
    // 指定自己的构造函数
    // super 在子类的构造函数中当成函数使用相当于调用了
    // 父类的构造函数
    // 在es6规定在没有 调用super之前 子类是没有自己的this的
    constructor(x, y, r) {
        super(x, y, r);
        // 添加纵向速度 子类继承父类的时候 
        // 不仅仅会继承属性 还会自动继承静态方法

        // 向下的速度
        this.vy = SuperBall.rpFn([2, 4]);
        // 重力加速度
        this.g = SuperBall.rpFn([0.2, 0.4]);
        // 创建一个速度参照值
        this.a = 0;
        return this;
    }

    // 为了让小球动起来 写一个move方法
    move(ctx) {
        // super()在这里调用 报错 因为这里并不是构造函数
        // 加速下落
        this.y += this.vy;
        this.vy += this.g;

        let current = this.vy * -0.75;

        // 如果小球的纵向坐标 比画布的高度还要大 说明触及底部
        if (this.y + this.r >= ctx.canvas.height) {
            // 让小球的高度等于画布的高度减去自身的半径
            this.y = ctx.canvas.height - this.r;

            // 如果当前的y方向的速度分量-此时的参照值小于0.01 结束运动
            if (Math.abs(current - this.a) < 0.01) {
                return false;
            }

            // 小球需要反弹;更新this.a 值
            this.a = this.vy *= -0.75;
        }

        // 清除整个画布的大小
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        //这里不是当前一个函数调用  而是当成一个对象 
        super.render(ctx);

        return true;
    }
};

// const ball1 = new SuperBall(100, 100, 30).render(ctx);

// 声明变量
let ball, timer;

// 点击画布事件
canvas.onclick = function(e) {
    // 拿到点击画布的鼠标坐标
    let x = e.offsetX,
        y = e.offsetY;
    // 指定一个随机的半径
    let r = ~~Ball.rpFn([25, 55]);

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // 通过superball实例化一个小球对象 调用render方法
    ball = new SuperBall(x, y, r).render(ctx);

    ballMove();
}

function ballMove() {
    // window.requestAnimationFrame
    // 方法告诉浏览器您希望执行动画并请求浏览器调用指定的函数
    // 在下一次重绘之前更新动画。
    // 该方法使用一个回调函数作为参数，
    // 这个回调函数会在浏览器重绘之前调用。

    // 重绘是一个元素外观的改变所触发的浏览器行为，
    // 例如改变visibility、outline、背景色等属性。
    // 浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。
    // 重绘不会带来重新布局，并不一定伴随重排
    timer = window.requestAnimationFrame(ballMove);

    // 如果ball.move方法 返回false  清除动画帧
    if (!ball.move(ctx)) {

        // 取消一个先前通过调用
        // window.requestAnimationFrame()方法
        // 添加到计划中的动画帧请求.
        window.cancelAnimationFrame(timer);
    }
}