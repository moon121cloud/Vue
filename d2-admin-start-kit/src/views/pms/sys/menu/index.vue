<template>
  <d2-container>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      size="mini"
    >
      <el-table-column
        prop="menuTitle"
        label="菜单标题"
      >
      </el-table-column>
      <el-table-column
        prop="menuAddress"
        label="菜单地址"
      >
      </el-table-column>
      <el-table-column
        prop="menuSort"
        label="菜单排序"
      >
      </el-table-column>
    </el-table>
    </d2-container>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
      showModify: false,
      tableData: [
        { id: "1", menuTitle: "菜单1", menuAddress: "/sys/page", menuSort: "1"},
        { id: "2", menuTitle: "菜单2", menuAddress: "/sys/page", menuSort: "2"},
        { id: "3", menuTitle: "菜单3", menuAddress: "/sys/page", menuSort: "3"},
        { id: "4", menuTitle: "菜单4", menuAddress: "/sys/page", menuSort: "4"}
      ],
    };
  },
}
</script>