<template>
  <d2-container>
    <el-table :data="tableData" style="width: 100%" stripe size="mini">
      <el-table-column prop="userAccount" label="登录名"></el-table-column>
      <el-table-column prop="userPassword" label="密码"></el-table-column>
      <el-table-column prop="userName" label="姓名"></el-table-column>
      <el-table-column prop="userCreateDate" label="创建日期"></el-table-column>
      <el-table-column prop="userPartId" label="角色ID"></el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-button type="primary" plain size="mini" @click="onAddUser">新增</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" plain @click="onUpdateUser(scope.row)">修改</el-button>
          <el-button size="mini" type="success" plain @click="showModifyMenuDialog(scope.row)">分配菜单</el-button>
          <el-button size="mini" type="danger" @click="onDelUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template slot="footer">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </template>
    <el-dialog title="提示" :visible.sync="showModify" width="30%" center>
      <el-form ref="form" :model="formData" label-width="80px" :rules="validateRules">
        <el-form-item label="角色名称" prop="ruleName">
          <el-input
            v-model="formData.ruleName"
            placeholder="请输入角色名称"
            maxlength="50"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input
            v-model="formData.ruleDesc"
            type="textarea"
            :rows="2"
            placeholder="请输入角色描述"
            maxlength="100"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onModify">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="showModifyMenu" width="570px">
      <el-transfer v-model="selectedMenuList" :data="menuData"></el-transfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showModifyMenu = false">取 消</el-button>
        <el-button type="primary" @click="onModifyMenu">确 定</el-button>
      </span>
    </el-dialog>
  </d2-container>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
      showModify: false,
      tableData: [
        {
          id: "1",
          userAccount: "aaa",
          userPassword: "111",
          userName: "小刚",
          userCreateDate: "2019.11.06",
          userPartId: "风"
        },
        {
          id: "2",
          userAccount: "bbb",
          userPassword: "222",
          userName: "小明",
          userCreateDate: "2019.11.06",
          userPartId: "火"
        },
        {
          id: "3",
          userAccount: "ccc",
          userPassword: "333",
          userName: "小麦",
          userCreateDate: "2019.11.06",
          userPartId: "雷"
        },
        {
          id: "4",
          userAccount: "ddd",
          userPassword: "444",
          userName: "小雪",
          userCreateDate: "2019.11.06",
          userPartId: "电"
        }
      ]
    };
  },
  methods: {
    onAddUser() {
      this.showModify = true;
    },
    onUpdateUser(row) {
      console.log(row);
      this.formData = row;
      this.showModify = true;
    },

    showModifyMenuDialog(row) {
      this.showModifyMenu = true;
      this.currentModifyMenuRow = row;
    },
    onDelUser(row) {
      this.$confirm("确认删除该条记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(row);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    onModifyMenu() {
      //在用户修改了菜单之后执行
      this.showModifyMenu = false;
      console.log(this.selectedMenuList);
      console.log(this.currentModifyMenuRow);
    }
  }
};
</script>