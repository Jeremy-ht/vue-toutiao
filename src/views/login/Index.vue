<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="this.$router.back()"
    />
    <div class="loginBtn">
      <van-button
        type="info"
        block
        @click="onSendSms"
      >登录
      </van-button>
    </div>
  </div>
</template>

<script>
import { login } from '../../api/user.js'

export default {
  name: 'LoginIndex',
  methods: {
    async onSendSms () {
      const dataValue = {
        mobile: '13611111111',
        code: '246810'
      }
      const { data } = await login(dataValue)
      this.$store.commit('setUser', data.data)
    }
  }
}
</script>

<style scoped>
.loginBtn {
  margin-top: 20px;
  padding: 10px;
}
</style>
