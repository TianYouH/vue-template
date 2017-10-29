<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo" :class="isCollapse?'logo-collapse-width':'logo-width'">
        {{isCollapse ? '' : sysName}}
      </el-col>
      <el-col :span="1">
        <div class="tools" @click.prevent="collapse">
          <i class="el-icon-menu"></i>
        </div>
      </el-col>
      <el-col :span="4">
        <Levelbar></Levelbar>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
  				<span class="el-dropdown-link userinfo-inner">{{ sysUserName }}
  					<img :src='sysUserAvatar'>
  				</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="updatePassword">修改密码</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-col>
    <el-col :span="24" class="main" >
      
      <el-menu :class="{'menuStyle': !this.isCollapse}" @open="handleOpen" @close="handleClose" :default-active="$route.path.slice(1)" :router='true' :collapse="isCollapse">
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">

            <el-submenu :index="index+''" v-if="!item.leaf" :key="index">
              <template slot="title">
                <i :class="item.iconCls"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
                {{child.name}}
              </el-menu-item>
            </el-submenu>

            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" :key="index">
              <i :class="item.iconCls"></i>{{item.children[0].name}}
            </el-menu-item>

        </template>
      </el-menu>

      <section class="content-container">

        <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>

      </section>
    </el-col>
  </el-row>
</template>

<script>
import Levelbar from '../components/levelBar/levelBar'
export default {
  components: {
    Levelbar
  },
  data () {
    return {
      isCollapse: false,
      sysAccountName: '测试页面',
      sysUserName: '测试名称',
      sysUserAvatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509253924343&di=5df02c24e7d5665e09f10b5365e669dc&imgtype=0&src=http%3A%2F%2Feasyread.ph.126.net%2FGHAxYajjwS1WweT-mlZBrA%3D%3D%2F7917086252361219238.jpg'
    }
  },
  watch: {
    // $route (to) {
      // console.log('前往');
      // console.log(to.path);
    // }
  },
  computed: {
    sysName () {
      return '测试目录'
    }
  },
  methods: {
    handleOpen () {
      console.log(this.$route)
    },
    handleClose () {
    },
    updatePassword () {
      console.log(this.$router)
    },
    // 退出登录
    logout: function () {
      this.$confirm('确认退出吗?', '提示', {}).then(() => {
        this.$store.dispatch('removeUser')
        this.$router.replace({
          path: '/login'
        })
      }).catch(() => {
      })
    },
    // 折叠导航栏
    collapse () {
      this.isCollapse = !this.isCollapse
    },
    showMenu (i, status) {
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none'
    }
  },
  mounted () {
    // let user = this.$store.state.mutations.user
    // console.log(user)
    // if (user.user) {
    //   this.sysUserName = user.user.fname || ''
    //   this.sysAccountName = user.user.username || ''
    // }
  }
}
</script>

<style ref="stylesheet" scoped lang="scss">
  .el-submenu .el-menu-item {
    height: 30px;
    line-height: 30px;
  }

  .el-menu-item, .el-submenu__title {
    height: 46px;
    line-height: 46px;
  }

  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
      height: 60px;
      line-height: 60px;
      background: #012b81;
      color: #fff;
      .userinfo {
        text-align: right;
        padding-right: 35px;
        float: right;
        .userinfo-inner {
          cursor: pointer;
          color: #fff;
          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin: 10px 0px 10px 10px;
            float: right;
          }
          img[src=""] {
            overflow: hidden;
          }
        }
      }
      .logo {
        height: 60px;
        font-size: 22px;
        padding-left: 20px;
        padding-right: 20px;
        border-color: rgba(238, 241, 146, 0.3);
        border-right-width: 1px;
        border-right-style: solid;
        img {
          width: 40px;
          float: left;
          margin: 10px 10px 10px 18px;
        }
        .txt {
          color: #fff;
        }
      }
      .logo-width {
        width: 200px;
      }
      .logo-collapse-width {
        width: 65px
      }
      .tools {
        padding: 0px 23px;
        width: 14px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
      }
    }

    .menuStyle {
      width: 200px
    }

    .main {
      display: flex;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
      .content-container {
        flex: 1;
        overflow-y: scroll;
        padding: 20px;
        .breadcrumb-container {
          .title {
            width: 200px;
            float: left;
            color: #475669;
          }
        }
        .content-wrapper {
          background-color: #fff;
          box-sizing: border-box;
        }
      }
    
    }
  }
</style>
