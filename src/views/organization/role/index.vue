<template>
  <div class="role">
    <a-row type="flex" justify="end">
      <a-col>
        <a-button type="primary" @click="add">新建角色</a-button>
      </a-col>
    </a-row>
    <a-table :dataSource="dataSource" :columns="columns">
      <template #auth="{ text }">
        <a-popover>
          <template #content>
            {{ text }}
          </template>
          <span>{{ text }}</span>
        </a-popover>
      </template>
      <template #account="{ text }">
        <a-popover>
          <template #content>
            {{ text }}
          </template>
          <span>{{ text }}</span>
        </a-popover>
      </template>
      <template #operation>
        <a>删除</a>
        <a-divider type="vertical" />
        <a>编辑</a>
      </template>
    </a-table>
    <a-modal
      v-model:visible="addModelVisible"
      title="新建自定义角色"
      width="550px"
      okText="提交"
    >
      <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
        <a-form-item label="角色名称">
          <a-input />
        </a-form-item>
        <a-form-item label="权限组">
          <a-transfer />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const columns = [
  {
    title: "角色",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "权限组",
    dataIndex: "auth",
    key: "auth",
    slots: { customRender: "auth" },
  },
  {
    title: "赋权账号",
    dataIndex: "account",
    key: "account",
    slots: { customRender: "account" },
  },
  {
    title: "操作",
    dataIndex: "operation",
    slots: { customRender: "operation" },
  },
];
const dataSource = [
  {
    key: "1",
    role: "管理员",
    auth: "内容管理-小程序",
    account: "JBS",
  },
];

export default defineComponent({
  name: "role",
  setup() {
    const addModelVisible = ref<boolean>(false);

    const add = () => {
      addModelVisible.value = true;
    };

    return {
      dataSource,
      columns,
      addModelVisible,
      add,
    };
  },
});
</script>
