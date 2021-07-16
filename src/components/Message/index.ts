import { message } from "ant-design-vue";
import { VNodeTypes } from "vue";

type ConfigContent = string | VNodeTypes;
type ConfigDuration = number | (() => void);
type ConfigOnClose = () => void;

export default {
  success(
    content: ConfigContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose
  ): void {
    message.success(content, duration, onClose);
  },
  error(
    content: ConfigContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose
  ): void {
    message.error(content, duration, onClose);
  },
  info(content: ConfigContent): void {
    message.info(content);
  },
  warning(content: ConfigContent): void {
    message.warning(content);
  },
  loading(content: ConfigContent): void {
    message.loading(content);
  },
};
