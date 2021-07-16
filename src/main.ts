import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 初始化css
import "normalize.css/normalize.css";
// 全局css
import "@/styles/index.less";
import initSvgIcon from "@/icons/index"; // icon

import {
  Button,
  Form,
  Input,
  Card,
  Layout,
  Menu,
  Table,
  Modal,
  Row,
  Col,
  Transfer,
  ConfigProvider,
  Divider,
  Popover,
  Breadcrumb,
} from "ant-design-vue";

createApp(App)
  .use(Button)
  .use(Form)
  .use(Input)
  .use(Card)
  .use(Layout)
  .use(Menu)
  .use(Table)
  .use(Modal)
  .use(Row)
  .use(Col)
  .use(Transfer)
  .use(ConfigProvider)
  .use(Divider)
  .use(Popover)
  .use(Breadcrumb)
  .use(initSvgIcon)
  .use(store)
  .use(router)
  .mount("#app");
