<style lang="scss">
    @import './404.scss';
</style>

<template>
    <div class="error404">
        <div class="error404-body-con">
            <div class="error404-body-con-title">4
                <span>
                    <i class="el-icon-location-outline"></i>
                </span>4
            </div>
            <p class="error404-body-con-message">未找到页面</p>
            <div class="error404-btn-con">
                <el-button @click="goHome" size="large" style="width: 200px;" type="text">返回首页</el-button>
                <el-button @click="backPage" size="large" style="width: 200px;margin-left: 40px;" type="primary">返回上一页</el-button>
            </div>  
        </div>
    </div>
</template>

<script>
export default {
  name: 'Error404',
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
