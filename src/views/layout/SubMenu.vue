<template>
  <a-sub-menu :title="menuInfo.title">
    <template v-for="(m, index) in menuInfo.children" :key="index">
      <template v-if="!m.children">
        <a-menu-item :key="m.url">
          {{ m.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menuInfo="m" :key="m.url"></sub-menu>
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubMenu",
  props: {
    menuInfo: Object,
  },
});
</script>
