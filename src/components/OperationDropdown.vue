<template>

  <div>

    <el-dropdown @command="handleCommand" trigger="click">

          <el-button type="primary">

            操作<i class="el-icon-arrow-down el-icon--right"></i>

          </el-button>

          <el-dropdown-menu slot="dropdown">

            <el-dropdown-item :command="beforeHandleCommand(hotInstance,row, 'edit')">编辑</el-dropdown-item>

            <el-dropdown-item :command="beforeHandleCommand(hotInstance,row, 'delete')">删除</el-dropdown-item>

          </el-dropdown-menu>

        </el-dropdown>

  </div>

</template>

<script>

export default {

  name:"OperationDropdown",

  data() {

    return {

      hotInstance: null,

      TD: null,

      row: null,

      col: null,

      prop: null,

      value: null,

      cellProperties: null

    }

  },

  methods:{

    beforeHandleCommand(hotInstance,row, command) {

      return {

        hotInstance: hotInstance,

        row,

        command: command,

      };

    },

    handleCommand(cmd) {

      switch (cmd.command) {

        case 'edit':

          console.log(cmd.hotInstance.getDataAtRow(cmd.row),"edit","sry")

          break

        case 'delete':

          // 代码块

          break

        default:

        // 默认代码块

      }

    }

  }

}

</script>
