<template>
  <div class="container">
    <el-row class="title">
      <el-col :span="12"><router-link :to="{ name: 'wordToHtml' }">Word文档转HTML</router-link></el-col>
      <el-col :span="12"><router-link :to="{ name: 'perviewWord' }">Word文档预览</router-link></el-col>
    </el-row>
    <router-view></router-view>
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
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  text-align: left;
  width: 1000px;
  margin: 0 auto;
  padding: 0 100px;
  a {
    color: #409eff;
    text-decoration: none;
  }
  .title{
      text-align: center;
  }
}
</style>