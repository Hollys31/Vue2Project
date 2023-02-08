<template>
  <div id="wordView" v-html="vHtml"></div>
</template>

<script>
import mammoth from "mammoth";
export default {
  props: [],
  components: {},
  data() {
    return {
        vHtml:""
    };
  },
  created() {
       this.readExcelFromRemoteFile("demo.docx");
  },
  mounted() {},
  methods: {
        readExcelFromRemoteFile: function (url) {
      var vm = this;
      var xhr = new XMLHttpRequest();
      xhr.open("get", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function () {
        if (xhr.status == 200) {
          mammoth
            .convertToHtml({ arrayBuffer: new Uint8Array(xhr.response) })
            .then(function (resultObject) {
              vm.$nextTick(() => {
                // document.querySelector("#wordView").innerHTML =
                //   resultObject.value;
                console.log(resultObject);
                vm.vHtml = resultObject.value;
              });
            });
        }
      };
      xhr.send();
    },
  },
};
</script>
<style lang="scss" scoped>
#wordView{
    padding: 0 100px;
}
</style>