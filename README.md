
# isework-admin
react+antd+admin 后台管理系统

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## 项目管理后台界面
8
![首页](https://github.com/cywcd/isework-admin/blob/master/preview/index.png)
9
​
10
![组件](https://github.com/cywcd/isework-admin/blob/master/preview/components.png)


### 代码目录
```js
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---yarn下载依赖文件目录
+-- public/
|   --- index.html							---首页入口html文件
+-- src/                                    ---核心代码目录
|   +-- axios                               ---http请求存放目录
|   |    --- index.js
|   +-- components                          ---各式各样的组件存放目录
|   |    +-- animation                      ---动画组件
|   |    |    --- ...
|   |    +-- charts                         ---图表组件
|   |    |    --- ...
|   |    +-- dashboard                      ---首页组件
|   |    |    --- ...
|   |    +-- forms                          ---表单组件
|   |    |    --- ...
|   |    +-- pages                          ---页面组件
|   |    |    --- ...
|   |    +-- tables                         ---表格组件
|   |    |    --- ...
|   |    +-- UI                             ---ui组件
|   |    |    --- ...
|   |    --- BreadcrumbCommon.jsx           ---面包屑组件
|   |    --- HeaderCommon.jsx               ---顶部导航组件
|   |    --- Page.jsx                       ---页面容器
|   |    --- SiderCommon.jsx                ---左边菜单组件
|   +-- style                               ---项目的样式存放目录，主要采用less编写
|   +-- utils                               ---工具文件存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- .env                                    ---启动项目自定义端口配置文件
--- package.json
```

## 安装运行

### 安装依赖

`yarn`

### 启动项目

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3008](http://localhost:3008) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### 测试

`npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 构建

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 生成配置文件
create-react-app 创建项目,运行eject生成配置文件
*此操作不可逆

`npm run eject`

运行eject命令报错处理方案：
主要问题是脚手架添加.gitgnore文件，但是却没有本地仓库

```js
create-react-app project
cd project
git init
git add .
git commit -m "saving before ejecting"
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

