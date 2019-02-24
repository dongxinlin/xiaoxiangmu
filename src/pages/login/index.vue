<template>
  <div class="login-container">
    <h1>登录</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signIn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username:'',
            password:''
        }
    },
    methods:{
        signIn(){
            if(this.username.trim().length!==0 && this.password.trim()!==0){
                this.$axios.post('/users/login',{
                    username:this.username,
                    password:this.password
                })
                .then(res=>{
                    if(res.status===200){
                        localStorage.setItem('token',res.data.token)
                        localStorage.setItem('useInfo',JSON.stringify(res.data))
                        this.$router.push('/home')
                    }
                })
            }else{
                this.$message({
                    showClose: true,
                    message:"用户名和密码不能为空",
                    type: 'error'
                });
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login-container{
    width: 600px;
    margin: 100px auto;
    h1{
        text-align: center;
        line-height: 50px;
        color: aqua;
        font-size: 18px;
    }
}
</style>
