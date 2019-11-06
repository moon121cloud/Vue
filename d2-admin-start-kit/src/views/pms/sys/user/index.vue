<template>
  <d2-container>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      size="mini"
    >
      <el-table-column
        prop="userAccount"
        label="登录名"
      >
      </el-table-column>
      <el-table-column
        prop="userPassword"
        label="密码"
      >
      </el-table-column>
      <el-table-column
        prop="userName"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="userCreateDate"
        label="创建日期"
      >
      </el-table-column>
      <el-table-column
        prop="userPartId"
        label="角色ID"
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
        { id: "1", userAccount: "aaa", userPassword: "111", userName: "小刚", userCreateDate: "2019.11.06", userPartId: "风" },
        { id: "1", userAccount: "bbb", userPassword: "222", userName: "小明", userCreateDate: "2019.11.06", userPartId: "火" },
        { id: "1", userAccount: "ccc", userPassword: "333", userName: "小麦", userCreateDate: "2019.11.06", userPartId: "雷" },
        { id: "1", userAccount: "ddd", userPassword: "444", userName: "小雪", userCreateDate: "2019.11.06", userPartId: "电" }
      ],
    };
  },
}
</script>