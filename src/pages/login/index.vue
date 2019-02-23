<template>
  <div class="login-container">
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
        <el-form-item
          label="用户名:"
          prop="username"
        >
          <el-input
            type="type"
            v-model="ruleForm2.username"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码:"
          prop="pass"
        >
          <el-input
            type="password"
            v-model="ruleForm2.pass"
            auto-complete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm2')"
          >提交</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var username = (rule, value, callback) => {
      if (!value.trim()) {
        return callback(new Error("用户名不能为空"));
      }
       callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        username: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: username, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this)
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style lang="less" scoped>
.login-container{
  width: 600px;
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%)
}
</style>
