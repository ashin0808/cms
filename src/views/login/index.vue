<template>
  <div class="login">
    <a-card>
      <a-form
        :model="loginState"
        :labelCol="{ span: 6 }"
        :wrapperCol="{ span: 18 }"
      >
        <a-form-item label="账号">
          <a-input v-model:value="loginState.user" />
        </a-form-item>
        <a-form-item label="密码">
          <a-input-password v-model:value="loginState.password" />
        </a-form-item>
        <a-form-item :wrapperCol="{ span: 18, offset: 6 }">
          <a-button type="primary" :disabled="disabled" @click="submit"
            >登入</a-button
          >
          <a-button type="link" style="margin-left: 10px" @click="forget"
            >忘记密码</a-button
          >
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, UnwrapRef, computed } from "vue";
import { useRouter } from "vue-router";
import message from "@/components/Message";

interface LoginState {
  user: string;
  password: string;
}

export default defineComponent({
  name: "login",
  setup() {
    const router = useRouter();

    const loginState: UnwrapRef<LoginState> = reactive({
      user: "",
      password: "",
    });
    const disabled = computed(() => {
      if (loginState.user && loginState.password) {
        return false;
      }
      return true;
    });
    const submit = () => {
      console.log(loginState);
      router.push("home");
    };
    const forget = () => {
      message.error("请联系系统管理员", () => {
        console.log("close");
      });
    };
    return {
      loginState,
      disabled,
      submit,
      forget,
    };
  },
});
</script>

<style lang="less" scoped>
.login {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
