// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": resolve("src"),
        api: resolve("src/api"),
        assets: resolve("src/assets"),
        components: resolve("src/components"),
        dict: resolve("src/dict"),
        filters: resolve("src/filters"),
        icons: resolve("src/icons"),
        mixins: resolve("src/mixins"),
        router: resolve("src/router"),
        store: resolve("src/store"),
        style: resolve("src/style"),
        utils: resolve("src/utils"),
        views: resolve("src/views"),
        img: resolve("src/assets/img"),
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#5364FF",
            "warning-color": "#FC5C46",
            "layout-header-height": "48px",
            "layout-header-background": "#5364FF",
            "page-header-padding": 0,
            "page-header-padding-breadcrumb": 0,
            "page-header-padding-vertical": 0,
            "layout-header-padding": 0,
            "table-header-bg": "#F7F8FD",
            "breadcrumb-separator-margin": "0 6px",
            "iconfont-css-prefix": "anticon",
            "border-color-base": "#ccd3dc",
            "menu-item-color": "#666",
            "tag-default-bg": "#F7F8FD",
            "tag-default-color": "#5364FF",
            "modal-mask-bg": "rgba(0, 0, 0, 0.1);",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/icons")) //处理svg目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
  },
};
