# 如何使用这个源码
1.使用npm install 或者  cnpm install  安装项目依赖
2.在文件的根目录  执行命令 webpack 成功启动
3.成功启动之后 再打开一个命令窗口 输入命令 webpack-dev-server


#文件的项目目录
 所有的代码均放在src目录下面的 main.js 文件下面;
 支持热更新的功能;

#遇到的问题
 在项目移植的过程中将node_modules
 一起拷贝过去 执行webpack 命令出现
 了一些问题 提示找不到这个webpack这个模块

 1.解决的办法：
   rimraf 删除本地的依赖包
   使用cnpm install 重新安装 问题解决;
