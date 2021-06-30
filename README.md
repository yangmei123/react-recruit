# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 招聘系统

## 功能

* 页面头尾导航页面跳转；
* 职位列表展示；
* 职位搜索；
* 职位详情介绍；
* 弹窗应聘信息；

### 技术点

* React构建页面；
* React-lazy优化懒加载；
* react-router-dom 页面相关路由跳转；
* webpack打包构建，项目开发编译代码优化；
    * 图片资源优化；
    * 项目分包构建；
    * alias路径配置；
    * 代码压缩和优化；
* postcss支持scss语法，autoprefixer等；
* axios请求拦截；
* rap相关mock数据接入；
* 根据不同的生产环境获取相关配置；
* 引入tailwind 优化css编写、摇树、减少css体积[为什么要使用自我理解笔记](https://note.youdao.com/s/ISxeikaI)；

## 遇到部分问题

Q: clean-webpack-plugin 3.0以上报错，TypeError: CleanWebpackPlugin is not a constructor；
Error: clean-webpack-plugin only accepts an options object. 

A:新版的引用方式已改成 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
使用：new CleanWebpackPlugin() 无需带文件夹名称，clean-webpack-plugin 預設的刪除目錄為 output.path 指定的目錄；

Q: react-route-dom 4.0以后

A: 
* 嵌套的路由需要单独放置在嵌套的根component中去处理路由，否则会一直有warning:You should not use <Route component> and <Route children> in the same route
* 不允许在`Router`外部使用`Link`；需要使用BrowserRouter或HashRouter对Link进行包裹；

Q：react-lazy 报错Uncaught Error: A React component suspended while rendering, but no fallback UI was specified.

A: React.lazy 需要配合 Suspense 组件一起使用，在 <Suspense fallback={<div>抱歉，请耐心等待 Loading...</div>}></Suspense> 组件中渲染 React.lazy 异步加载的组件必填fallback。

Q：tailwindcss Error: PostCSS plugin tailwindcss requires PostCSS 8.

A：安装[postCSS 7 兼容性版本](https://docs.tailwindchina.com/docs/installation#post-css-7).



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
