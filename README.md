
# isework-admin
react+antd+admin 后台管理系统

项目由脚手架create-react-app初始化，趟过了许多坑，下面会分享出来


## 管理后台界面

![首页](https://github.com/cywcd/isework-admin/blob/master/preview/index.png)
​
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
|   |    +-- dashboard                      ---首页组件
|   |    |    --- ...
|   |    +-- common                         ---通用组件
|   |    |    --- ...
|   |    +-- UI                             ---ui组件
|   |    |    --- ...
|   |    +-- tables                         ---表格组件
|   |    |    --- ...
|   |    +-- forms                          ---表单组件
|   |    |    --- ...
|   |    +-- charts                         ---图表组件
|   |    |    --- ...
|   |    +-- animation                      ---动画组件
|   |    |    --- ...
|   |    +-- auth                          ---权限管理
|   |    |    --- ...
|   |    --- BreadcrumbCommon.jsx           ---面包屑组件
|   |    --- HeaderCommon.jsx               ---顶部导航组件
|   |    --- home.js                        ---页面容器
|   |    --- SiderCommon.jsx                ---左边菜单组件
|   +-- style                               ---项目的样式存放目录，主要采用less编写
|   +-- utils                               ---工具文件存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目主入口js文件，包括路由配置等
--- .env                                    ---启动项目自定义端口配置文件
--- package.json
```

## 安装运行

###下载或克隆项目源码
`git clone https://github.com/cywcd/isework-admin.git`

### 安装依赖
`yarn or npm i`

推荐使用yarn，安装yarn
`npm i yarn -g` //全局安装
`cd isework-admin` //当前项目目录
`yarn` //yarn安装依赖包

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

**注: 此操作不可逆

如运行npm run eject报错：Build fails after eject: Cannot find module '@babel/plugin-transform-react-jsx' 

解决方法
1.删除 node_modules 文件夹
2.运行 yarn
3.重新 npm start

### 踩坑

使用 create-react-app 创建了 React 项目，并使用 Eject 方式暴露出了 webpack 的配置，并成功按需引入了 antd。

1. 解决 create-react-app 创建项目后 less 不生效的问题
直接引入less样式不生效，原因是create-react-app 没有内置 less-loader

解决方法
安装 less 和 less-loader ，并修改 webpack 配置

1> 安装
`yarn add less`
`yarn add less-loader`

2> 修改 webpack 配置
修改 webpack.config.js 配置文件, 增加less文件配置:

```js

...
  {
    test: /\.less$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: require.resolve('less-loader') // compiles Less to CSS
      }
    ],
  },
...

```
重启项目后，less样式生效

2. antd 按需引入 less 源文件，以及遇到的 bezierEasing.less 文件报错问题

解决方法
修改package.json，将style的值改为true

```js

...
  "babel": {
    "presets": [
      "react-app"
     ]
     ],
    "plugins": [
      ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
    ]
  }
...


```

重启之后，编译错误，提示 bezierEasing.less 文件的 .bezierEasingMixin() 方法报错：

原因是因为 less v3 之后废弃了 Enable Inline JavaScript Option ：lesscss.org/usage/#less…

主要有2种解决方式

>将 less 版本降到 3.0 以下
>less loader 增加配置，开启 JavaScript ：

````js

// webpack.config.js
...
  {
-    loader: require.resolve('less-loader') // compiles Less to CSS
+    loader: require.resolve('less-loader'), // compiles Less to CSS
+    options: {
+        javascriptEnabled: true
+    }
    
  }

```

重新 npm start，项目可以正常启动。


