<template>
  <div id="hot-preview">
    <HotTable :root="root" ref="testHot" :settings="hotSettings"></HotTable>
  </div>
</template>

<script>
  import { HotTable } from '@handsontable-pro/vue';
  import './../../../node_modules/handsontable-pro/dist/handsontable.full.css'
  import Handsontable from 'handsontable-pro'

  export default {
    data: function() {
      return {
        root: 'test-hot',
        hotSettings: {
          // data: [['sample', 'data']],
          data: [        //數據能夠是二維數組，也能夠是數組對象
          
            [false,'20080101', 10, 11, 12, 13,true],
            
            [false,'20090101', 20, 11, 14, 13,true],
            
            [false,'20010101', 30, 15, 12, 13,true],
            
            [false,'20010101', 32, 213, 21, 312,true],
            
            [false,'20010201', 32, 213, 21, 312,true],
            
            [false,'20010301', 32, 213, 21, 312,true],
            
            [false,'20010401', 32, 213, 21, 312,true],
            
            [false,'20010501', 32, 213, 21, 312,true],
            
            [false,'20010601', 32, 213, 21, 312,true]
          
          ],
          // colHeaders: true,
          startRows: 11,//行列範圍
        
          startCols: 6,
          
          minRows: 5,  //最小行列
          
          minCols: 5,
          
          maxRows: 20,  //最大行列
          
          maxCols: 20,
          rowHeaders: true,//行表頭，可使布爾值（行序號），可使字符串（左側行表頭相同顯示內容，能夠解析html），也能夠是數組（左側行表頭單獨顯示內容）。
        
          colHeaders:   [ '選擇','題目', 'A選項', 'B選項', 'C選項', 'D選項','答案',],//自定義列表頭or 布爾值
          minSpareCols: 2, //列留白
        
          minSpareRows: 2,//行留白
          // currentRowClassName: 'currentRow', //爲選中行添加類名，能夠更改樣式
          // currentColClassName: 'currentCol',//爲選中列添加類名
          autoWrapRow: true, //自動換行
          contextMenu:{
            items:{
                "row_above": {
                  name:'上方插入一行'
                },
                "row_below": {
                  name:'下方插入一行'
                },
                "col_left": {
                  name:'左方插入列'
                },
                "col_right": {
                  name:'右方插入列'
                },
                "hsep1": "---------", //提供分隔線
                "remove_row": {
                  name: '刪除行',
                },
                "remove_col": {
                  name: '刪除列',
                },
                "make_read_only": {
                  name: '只讀',
                },
                "borders":{
                  name:'表格線'
                },
                "copy":{
                  name:'複製'
                },
                "cut":{
                  name:'剪切'
                },
                "commentsAddEdit": {
                  name: '添加備註',
                },
                "commentsRemove": {
                  name: '取消備註',
                },
                "freeze_column": {
                  name: '固定列',
                },
                "unfreeze_column": {
                  name: '取消列固定',
                },
                "hsep2": "---------",
            }
          },
          manualColumnFreeze: true, //手動固定列  ?
          manualColumnMove: true, //手動移動列
          manualRowMove: true,   //手動移動行
          manualColumnResize: true,//手工更改列距
          manualRowResize: true,//手動更改行距
          comments: true, //添加註釋  ?
          cell: [  //???
            {row: 1, col: 1, comment: {value: 'this is test'}},
          ],
          customBorders:[],//添加邊框
          columnSorting: true,//排序
          stretchH: 'all',//根據寬度橫向擴展，last:只擴展最後一列，none：默認不擴展
          fillHandle: true, //選中拖拽複製 possible values: true, false, "horizontal", "vertical"
          fixedColumnsLeft: 2,//固定左邊列數
          fixedRowsTop: 2,//固定上邊列數
          mergeCells: [   //合併
             // {row: 1, col: 1, rowspan: 3, colspan: 3},  //指定合併，從（1,1）開始行3列3合併成一格
             // {row: 3, col: 4, rowspan: 2, colspan: 2}
          ],
          columns: [     //添加每一列的數據類型和一些配置
            {type: 'checkbox'},  //多選框
            {
              type: 'date',   //時間格式
              dateFormat: 'YYYY-MM-DD',
              correctFormat: true,
              defaultDate: '19000101'
            },
            {
              type: 'dropdown', //下拉選擇
              source: ['BMW', 'Chrysler', 'Nissan', 'Suzuki', 'Toyota', 'Volvo'],
              strict: false   //是否嚴格匹配
            },
            {type: 'numeric'},  //數值
            {type: 'numeric',
              readOnly: true  //設置只讀
            },
            { type: 'numeric',
              format: '$ 0,0.00'},  //指定的數據格式
            {},
           
          ],
        }
      };
    },
    methods:{
      testFunc:function(){
        //this.$refs.hotTable.table就是當前的表格的對象
        console.log(this.$refs.hotTable.table)
      }
    },
    components: {
      HotTable
    }
  }
</script>