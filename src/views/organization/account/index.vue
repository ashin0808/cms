<template>
  <div class="account">
    <a-table :dataSource="dataSource" :columns="columns">
      <template #operation="{ record }">
        <a @click="showEditModel(record)">编辑</a>
      </template>
    </a-table>
    <a-modal v-model:visible="editModelVisible" title="编辑">
      <a-transfer
        :data-source="mockData"
        :target-keys="targetKeys"
        :selected-keys="selectedKeys"
        :render="(item) => item.title"
        :disabled="disabled"
        @change="handleChange"
        @selectChange="handleSelectChange"
      />
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface RecordConfig {
  key: string;
  number: string;
  name: string;
  email: string;
  tel: string;
  role: string;
}
interface MockData {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
}
const mockData: MockData[] = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}
const oriTargetKeys = mockData
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);

export default defineComponent({
  name: "account",
  setup() {
    const editModelVisible = ref<boolean>(false);
    const showEditModel = (record: RecordConfig) => {
      console.log(record);
      editModelVisible.value = true;
    };
    const disabled = ref<boolean>(false);

    const targetKeys = ref<string[]>(oriTargetKeys);

    const selectedKeys = ref<string[]>(["1", "4"]);

    const handleChange = (
      nextTargetKeys: string[],
      direction: string,
      moveKeys: string[]
    ) => {
      targetKeys.value = nextTargetKeys;
      console.log("targetKeys: ", nextTargetKeys);
      console.log("direction: ", direction);
      console.log("moveKeys: ", moveKeys);
    };
    const handleSelectChange = (
      sourceSelectedKeys: string[],
      targetSelectedKeys: string[]
    ) => {
      selectedKeys.value = [...sourceSelectedKeys, ...targetSelectedKeys];
      console.log("sourceSelectedKeys: ", sourceSelectedKeys);
      console.log("targetSelectedKeys: ", targetSelectedKeys);
    };
    return {
      columns: [
        {
          title: "编号",
          dataIndex: "number",
          key: "number",
        },
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "邮箱",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "电话",
          dataIndex: "tel",
          key: "tel",
        },
        {
          title: "角色",
          dataIndex: "role",
          key: "role",
        },
        {
          title: "操作",
          dataIndex: "operation",
          slots: { customRender: "operation" },
        },
      ],
      dataSource: [
        {
          key: "1",
          number: "1",
          name: "张三",
          email: "1223232@163.com",
          tel: "13512345678",
          role: "管理员",
        },
        {
          key: "2",
          number: "2",
          name: "张三",
          email: "1223232@163.com",
          tel: "13512345678",
          role: "管理员",
        },
        {
          key: "3",
          number: "3",
          name: "张三",
          email: "1223232@163.com",
          tel: "13512345678",
          role: "管理员",
        },
        {
          key: "4",
          number: "4",
          name: "张三",
          email: "1223232@163.com",
          tel: "13512345678",
          role: "管理员",
        },
      ],
      editModelVisible,
      showEditModel,
      mockData,
      targetKeys,
      selectedKeys,
      disabled,
      handleChange,
      handleSelectChange,
    };
  },
});
</script>
