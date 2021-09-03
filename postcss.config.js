module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      /* 设计稿是375*667 */
      unitToConvert: "px", // 默认值`px`，需要转换的单位
      viewportWidth: 375, // 视窗的宽度,对应设计稿宽度
      viewportHeight: 667, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
      viewportUnit: "vw", // 指定需要转换成视窗单位
      selectorBlaskList: ["#app .nav", ".tabbar-item"], // 指定不需要转换为视窗单位的类
      minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
      MediaQuery: false,
      exclude: [/tabbar.vue/]
    }


  }
}
