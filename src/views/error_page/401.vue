<style lang="scss">
    @import './401.scss';
</style>

<template>
    <div class="error401">
        <div class="error401-body-con">
            <div class="error401-body-con-title">
                401
            </div>
            <p class="error401-body-con-message">您没有权限</p>
            <div class="error401-btn-con">
                <el-button @click="goHome" size="large" style="width: 200px;" type="text">返回首页</el-button>
                <el-button @click="backPage" size="large" style="width: 200px;margin-left: 40px;" type="primary">返回上一页</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Error401',
  methods: {
    backPage () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push({
        name: 'home_index'
      })
    }
  }
}
</script>
