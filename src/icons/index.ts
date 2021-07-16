import { App } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue"; // svg component

const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext: ReturnType<typeof require.context>) =>
  requireContext.keys().map(requireContext);
requireAll(req);

export default (app: App): void => {
  // 全局注册svg-icon组件
  app.component("svg-icon", SvgIcon);
};
