<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";

export default defineComponent({
  setup() {
    const locale = zhCN;
    return {
      locale,
    };
  },
});
</script>
