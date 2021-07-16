<template>
  <a-menu class="menu" mode="inline" :inlineCollapsed="false" v-bind="$attrs">
    <template v-for="(li, index) in list" :key="index">
      <template v-if="!li.children">
        <a-menu-item :key="li.url">
          {{ li.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menuInfo="li" :key="li.url"></sub-menu>
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubMenu from "./SubMenu.vue";

export default defineComponent({
  name: "Menu",
  components: {
    "sub-menu": SubMenu,
  },
  props: {
    list: Array,
  },
});
</script>

<style lang="less" scoped>
.menu {
  height: 100%;
  background-color: #f6f7fc;
  border-right: none;
  padding-top: 8px;
}
</style>
