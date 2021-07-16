<template>
  <a-layout class="layout">
    <a-layout-header class="layout_header">
      <div class="layout_header_logo" />
    </a-layout-header>
    <a-layout class="layout_main">
      <a-layout-sider class="layout_main_sider">
        <Menu :list="menuList" @select="goPage"></Menu>
      </a-layout-sider>
      <a-layout class="layout_main_content">
        <a-breadcrumb class="layout_main_content_breadcrumb">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>内容管理</a-breadcrumb-item>
          <a-breadcrumb-item>账号管理</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content class="layout_main_content_view">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import Menu from "./Menu.vue";

interface PageConfig {
  key: string;
}

export default defineComponent({
  name: "layout",
  components: {
    Menu: Menu,
  },
  setup() {
    const router = useRouter();
    const menuList = reactive([
      {
        key: "1",
        title: "内容管理",
        children: [
          {
            key: "1-1",
            title: "官网PC",
            children: [
              {
                key: "1-1-1",
                title: "首页",
                url: "/pc-home",
              },
              {
                key: "1-1-2",
                title: "产品介绍",
                url: "/pc-product",
              },
              {
                key: "1-1-3",
                title: "瞬间急冻",
                url: "/pc-freeze",
              },
              {
                key: "1-1-4",
                title: "菜谱分享",
                url: "/pc-cookbook",
              },
              {
                key: "1-1-5",
                title: "Swift方式",
                url: "/pc-swift",
              },
              {
                key: "1-1-6",
                title: "我们的方式",
                url: "/pc-ourway",
              },
              {
                key: "1-1-7",
                title: "我们的团队",
                url: "/pc-ourteam",
              },
            ],
          },
          {
            key: "1-2",
            title: "官网MOB",
            children: [
              {
                key: "1-2-1",
                title: "首页",
                url: "/pc-home",
              },
              {
                key: "1-2-2",
                title: "产品介绍",
                url: "/mob-product",
              },
              {
                key: "1-2-3",
                title: "瞬间急冻",
                url: "/mob-freeze",
              },
              {
                key: "1-2-4",
                title: "菜谱分享",
                url: "/mob-cookbook",
              },
              {
                key: "1-2-5",
                title: "Swift方式",
                url: "/mob-swift",
              },
              {
                key: "1-2-6",
                title: "我们的方式",
                url: "/mob-ourway",
              },
              {
                key: "1-2-7",
                title: "我们的团队",
                url: "/mob-ourteam",
              },
            ],
          },
          {
            key: "1-3",
            title: "小程序",
            children: [
              {
                key: "1-3-1",
                title: "动态页面",
                url: "/mini-dynamicpage",
              },
              {
                key: "1-3-2",
                title: "静态配置位",
                url: "/mini-staticallocation",
              },
              {
                key: "1-3-3",
                title: "导航",
                url: "/mini-navigation",
              },
            ],
          },
          {
            key: "1-4",
            title: "内容",
            children: [
              {
                key: "1-4-1",
                title: "菜谱",
                url: "/content-cookbook",
              },
              {
                key: "1-4-2",
                title: "职位",
                url: "/content-job",
              },
            ],
          },
        ],
      },
      {
        key: "2",
        title: "组织管理",
        children: [
          {
            key: "2-1",
            title: "账号管理",
            url: "/account",
          },
          {
            key: "2-2",
            title: "角色管理",
            url: "/role",
          },
        ],
      },
    ]);
    const goPage = ({ key }: PageConfig) => {
      console.log(key);
      router.push(key);
    };
    return {
      menuList,
      goPage,
    };
  },
});
</script>

<style lang="less" scoped>
.layout {
  &_header {
    display: flex;
  }
  &_main {
    &_content {
      background-color: #ffffff;
      &_breadcrumb {
        height: 42px;
        padding: 16px 0 0 24px;
      }
      &_view {
        padding: 32px 24px;
      }
    }
  }
}
</style>
