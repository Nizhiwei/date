module.exports = [{
    path: 'pages/index/index',
    name: 'mp',
    config: {
      navigationBarTitleText: 'mpvue中使用第三方UI组件',
      enablePullDownRefresh: false,
      usingComponents: {
        'i-button': '../../src/components/ui/button/index'
      }
    }
  }];