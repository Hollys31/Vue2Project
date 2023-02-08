<template>
  <div class="word-wrap">
    <el-row class="title">
      <el-col :span="12"><router-link :to="{ name: 'handsontable' }">Table编辑</router-link></el-col>
      <el-col :span="12"><router-link :to="{ name: 'wordToHtml' }">Word文档</router-link></el-col>
    </el-row>
  </div>
</template>

<script>
/* import mammoth from "mammoth"; */
export default {
  props: [],
  components: {},
  data() {
   return {
       wordText:"",
       wordURL:''
   }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
</style>