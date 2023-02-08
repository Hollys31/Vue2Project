<template>
  <div class="time">
    <el-form ref="form" :inline="true" :model="form" label-width="80px">
      <el-form-item label="开始时间">
        <el-date-picker
          v-model="form.start"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择开始日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-date-picker
          v-model="form.end"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div>
      结束时间({{ form.end }})大于等于开始时间({{ form.start }})：{{
        timeCompare
      }}
    </div>
  </div>
</template>

<script>
import { compareDate, formateDate } from "@/utils/format";
export default {
  props: [],
  components: {},
  data() {
    return {
      timeCompare: "",
      form: {
        start: "",
        end: "",
      },
    };
  },
  created() {},
  mounted() {},
  filters: {
    formatesDate: function (date) {
      let dateStr = "";
      if (date) {
        dateStr = formateDate(new Date(date));
      }

      return dateStr;
    },
  },
  methods: {
    onSubmit() {
      let isOK = compareDate(this.form.start, this.form.end);
      this.timeCompare = isOK ? "YES" : "No";
    },
  },
};
</script>
<style lang="scss" scoped>
</style>