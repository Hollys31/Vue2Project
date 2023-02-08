<template>
  <div class="">
    <el-form ref="form" :inline="true" :model="form" label-width="80px">
      <el-form-item label="筛选时间">
        <el-date-picker
          v-model="form.dates"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker
      ></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div>筛选时间:{{ showDate }}</div>
  </div>
</template>

<script>
import { datePickerRangeTimeFormate} from "@/utils/format";
export default {
  props: [],
  components: {},
  data() {
    return {
      showDate:"",
      form: {
        dates: "",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
       this.showDate= datePickerRangeTimeFormate(this.form.dates[0],this.form.dates[1])
        
    },
  },
};
</script>
<style lang="scss" scoped>
</style>