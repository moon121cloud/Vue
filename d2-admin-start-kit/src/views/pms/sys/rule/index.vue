<template>
  <d2-container>
    <el-table :data="tableData" style="width: 100%" stripe size="mini">
      <el-table-column prop="ruleName" label="角色名称"></el-table-column>
      <el-table-column prop="ruleDesc" label="角色描述"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-button type="primary" plain size="mini" @click="onAddRule">新增</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="success" plain @click="onUpdateRule(scope.row)">修改</el-button>
          <el-button size="mini" type="success" plain @click="showModifyMenuDialog(scope.row)">分配菜单</el-button>
          <el-button size="mini" type="danger" @click="onDelRule(scope.row)">删除</el-button>
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
      showModifyMenu: false,
      tableData: [
        { id: "1", ruleName: "收银员", ruleDesc: "收钱的" },
        { id: "2", ruleName: "财务", ruleDesc: "数钱的" },
        { id: "3", ruleName: "物业经理", ruleDesc: "啥都不干" },
        { id: "4", ruleName: "财务经理", ruleDesc: "啥都不干" }
      ],
      menuData: [
        { key: "1", label: "角色管理" },
        { key: "2", label: "菜单管理" },
        { key: "3", label: "用户管理" }
      ],
      selectedMenuList: [],
      currentModifyMenuRow: {},
      validateRules: {
        ruleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onAddRule() {
      this.showModify = true;
    },
    onUpdateRule(row) {
      console.log(row);
      this.formData = row;
      this.showModify = true;
    },
    onDelRule(row) {
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
    onDelConfirm() {
      this.showDelConfirm = false;
      console.log(this.currentDelRow);
      this.$message({
        message: "删除成功",
        type: "success"
      });
    },
    onModify() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.formData.id) {
            console.log("这是修改方法,调用修改方法");
          } else {
            console.log("这是新增方法");
          }
          this.showModify = false;
        } else {
          console.log("验证失败");
        }
      });
    },
    showModifyMenuDialog(row) {
      this.showModifyMenu = true;
      this.currentModifyMenuRow = row;
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