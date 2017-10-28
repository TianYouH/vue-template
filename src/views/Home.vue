<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
        {{collapsed ? '' : sysName}}
      </el-col>
      <el-col :span="1">
        <div class="tools" @click.prevent="collapse">
          <i class="fa fa-align-justify"></i>
        </div>
      </el-col>
      <el-col :span="4">
        <Levelbar></Levelbar>
      </el-col>
      <tabs-view></tabs-view>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner">{{ sysUserName }}
						<img :src='sysUserAvatar' :class=" sysUserAvatar ?  '':'fa fa-user-circle fa-3x' ">
					</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="editPS.loginVisible=!editPS.loginVisible">修改密码</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <!--导航菜单-->
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose"
                 @select="handleselect" unique-opened router v-show="!collapsed">
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf" :key="index">
              <template slot="title">
                <i :class="item.iconCls"></i>{{item.name}}
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
        <!--导航菜单-折叠后-->
        <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
          <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item" :key="index">
            <template v-if="!item.leaf">
              <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)"
                   @mouseout="showMenu(index,false)">
                <i :class="item.iconCls"></i>
              </div>
              <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)"
                  @mouseout="showMenu(index,false)">
                <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item"
                    style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''"
                    @click="$router.push(child.path)">{{child.name}}
                </li>
              </ul>
            </template>
            <template v-else>
          <li class="el-submenu">
            <div class="el-submenu__title el-menu-item"
                 style="padding-left: 20px;height: 46px;line-height: 46px;padding: 0 20px;"
                 :class="$route.path==item.children[0].path?'is-active':''"
                 @click="$router.push(item.children[0].path)">
              <i :class="item.iconCls"></i>
            </div>
          </li>
</template>
</li>
</ul>
</aside>
<section class="content-container">

  <el-col :span="24" class="content-wrapper">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </el-col>

</section>
</el-col>
<hLogin :props="editPS" :userName="sysAccountName"></hLogin>
</el-row>
</template>

<script>
import Levelbar from '../components/levelBar/levelBar'
import TabsView from '../components/tabsView/tabsView'
export default {
  components: {
    Levelbar,
    TabsView
  },
  data () {
    return {
      collapsed: false,
      sysAccountName: '测试页面',
      sysUserName: '',
      sysUserAvatar: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      editPS: {
        loginVisible: false
      }
    }
  },
  watch: {
    $route (to) {
      // console.log('前往');
      // console.log(to.path);
    }
  },
  computed: {
    sysName () {
      return '测试目录'
    }
  },
  methods: {
    handleopen () {
    },
    handleclose () {
    },
    // 退出登录
    logout: function () {
      this.$confirm('确认退出吗?', '提示', {}).then(() => {
        this.$store.dispatch('removeUser')
        if (!this.$store.getters.saveChecked) {
          this.$store.dispatch('removeAcc')
        }
        this.$router.push({
          path: '/login'
        })
      }).catch(() => {
      })
    },
    // 折叠导航栏
    collapse: function () {
      this.collapsed = !this.collapsed
    },
    showMenu (i, status) {
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none'
    }
  },
  mounted () {
    let user = this.$store.state.mutations.user
    if (user) {
      this.sysUserName = user.user.fname || ''
      this.sysAccountName = user.user.username || ''
    }
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
        width: 230px;
      }
      .logo-collapse-width {
        width: 60px
      }
      .tools {
        padding: 0px 23px;
        width: 14px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
      }
    }
    .main {
      display: flex;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
      aside {
        flex: 0 0 230px;
        width: 230px;
        .el-menu {
          height: 100%;
        }
        .collapsed {
          width: 60px;
          .item {
            position: relative;
          }
          .submenu {
            position: absolute;
            top: 0px;
            left: 60px;
            z-index: 99999;
            height: auto;
            display: none;
          }
        }
      }
      .menu-collapsed {
        flex: 0 0 60px;
        width: 60px;
      }
      .menu-expanded {
        flex: 0 0 230px;
        width: 230px;
      }
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
