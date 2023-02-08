<template>
  <div class="app-wraper">
    <div class="aside-container">
      <el-scrollbar class="scrollbar">
        <div class="menu-wraper">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>File转内容</span>
              </template>
              <el-menu-item index="1-1"
                ><router-link :to="{ name: 'handsontable' }"
                  >Table编辑</router-link
                ></el-menu-item
              >
              <el-menu-item index="1-2"
                ><router-link :to="{ name: 'wordToHtml' }"
                  >Word转HTML</router-link
                ></el-menu-item
              >
              <el-menu-item index="1-3"
                ><router-link :to="{ name: 'perviewWord' }"
                  >Word预览</router-link
                ></el-menu-item
              >
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>时间</span>
              </template>
              <el-menu-item index="2-1"
                ><router-link :to="{ name: 'handsontable' }"
                  >时间格式转换</router-link
                ></el-menu-item
              >

              <el-menu-item index="2-2"
                ><router-link :to="{ name: 'handsontable' }"
                  >时间大小判断</router-link
                ></el-menu-item
              >
            </el-submenu>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-scrollbar>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>
<style lang="scss" scoped>
.aside-container {
  width: 260px;
  height: 100%;
  background-color: rgb(84, 92, 100);
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 99;
  .menu-wraper {
    height: 100%;
  }
  a {
    color: #333;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    display: block;
  }
}
.scrollbar {
  height: 100%;
}
/deep/ .is-horizontal {
  display: none;
}
/deep/ .el-scrollbar__thumb {
  opacity: 0;
}
.main-container{
  width: calc(100% -260px);
  margin-left: 300px;
  box-sizing: border-box;
  padding: 20px 25px;
}
</style>