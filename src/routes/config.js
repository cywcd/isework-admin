export default {
  menus: [{
    key: '/app/Dashboard',
    title: '首页',
    icon: 'home',
    component: 'Dashboard'
  },
  {
    key: '/app/common',
    title: '通用',
    icon: 'appstore',
    subs: [{
        key: '/app/common/buttons',
        title: '按钮',
        component: 'Buttons'
      },
      {
        key: '/app/common/icons',
        title: '图标',
        component: 'Icons'
      }
      
    ],
  },
  {
    key: '/app/components',
    title: '组件',
    icon: 'gateway',
    subs: [{
        key: '/app/components/wysiwyg',
        title: '富文本',
        component: 'Wysiwyg'
      },
      {
        key: '/app/components/QRCode',
        title: '二维码',
        component: 'QRCode'
      },
      {
        key: '/app/components/amap',
        title: '地图',
        component: 'Amap'
      },
      {
        key: '/app/components/drag',
        title: '拖拽',
        component: 'Drag'
      },
      {
        key: '/app/components/color',
        title: '取色器',
        component: 'Color'
      },
      {
        key: '/app/components/splitPane',
        title: '分割面板',
        component: 'SplitPane'
      },
      {
        key: '/app/components/imageCrop',
        title: '图片裁切',
        component: 'ImageCrop'
      },
      {
        key: '/app/components/clipboard',
        title: '复制到剪贴板',
        component: 'Clipboard'
      },
      {
        key: '/app/components/highlightWords',
        title: '关键字高亮',
        component: 'HighlightWords'
      }    
    ],
  },
  {
    key: '/app/table',
    title: '表格',
    icon: 'table',
    subs: [
      { 
        key: '/app/table/basicTable', 
        title: '基础表格', 
        component: 'BasicTable'
      },
      { 
        key: '/app/table/advancedTable', 
        title: '高级表格', 
        component: 'AdvancedTable'
      },
      { 
        key: '/app/table/DynamicControlTable', 
        title: '动态表格', 
        component: 'DynamicControlTable'
      }
    ],
  },
  {
    key: '/app/form',
    title: '表单', 
    icon: 'form',
    subs: [
        { 
          key: '/app/form/basicForm', 
          title: '基础表单', 
          component: 'BasicForm'
        },
        { 
          key: '/app/form/variousForm',
          title: '综合表单', 
          component: 'VariousForm'
        },
        { 
          key: '/app/form/complexForm',
          title: '复杂表单', 
          component: 'ComplexForm'
        },
    ],
  },
  {
    key: '/app/charts',
    title: '图表', 
    icon: 'bar-chart',
    subs: [
        { 
          key: '/app/charts/echarts', 
          title: 'echarts', 
          component: 'Echarts'
        },
        { 
          key: '/app/charts/recharts',
          title: 'recharts', 
          component: 'Recharts'
        }
    ],
  },
  {
    key: '/app/animation',
    title: '动画', 
    icon: 'rocket',
    subs: [
        { 
          key: '/app/animation/basicAnimations', 
          title: '基础动画', 
          component: 'BasicAnimations'
        },
        { 
          key: '/app/animation/advanceAnimations',
          title: '高级动画', 
          component: 'ExampleAnimations'
        }
    ],
  },{
    key: '/app/auth', 
    title: '权限管理', 
    icon: 'safety',
    subs: [
        { 
          key: '/app/auth/basic', 
          title: '基础演示', 
          component: 'AuthBasic' 
        },
        { 
          key: '/app/auth/routerEnter', 
          title: '路由拦截', 
          component: 'RouterEnter', 
          auth: 'auth/testPage' 
        },
    ],
  },
  ],
  others: [{
    key: '/subs4',
    title: '页面',
    icon: 'switcher',
    subs: [{
        key: '/login',
        title: '登录'
      },
      {
        key: '/404',
        title: '404'
      },
    ],
  }]
}