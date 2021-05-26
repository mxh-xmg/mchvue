<template>
  <div class="el-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="账号密码登录" name="first">
            <el-form status-icon :rules="rules" :model="user" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="name">
                    <el-input type="text" placeholder="请输入用户名" v-model="user.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item  prop="pass">
                    <el-input type="password" placeholder="请输入密码" v-model="user.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item  prop="yzm" required>
                    <el-input></el-input> 
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" >提交</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机号登陆" name="second">
            <el-form  status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="密码" prop="pass">
                    <el-input type="text" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">提交</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rules:{
            name:[
                {required:true ,massage:'请输入用户名',trigger:'blur'},
                {min:6,max:12,massage:'长度在6到12个字符',trigger:'blur'}
            ],
            pass:[
                 {required:true ,massage:'请输入密码',trigger:'blur'},
                 {min:6,max:12,massage:'长度在6到12个字符',trigger:'blur'}
            ],
            yzm:[]
        },
        activeName: 'first',
        user:{
            name:'admin',
            pass:'2222'
        }
      }
    },
    methods: {
      submit(){

      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    beforeCreate:()=>{
        console.log('创建之前')
    },
    mounted:()=>{
        console.log('')
    }
  };
</script>
<style lang="less">
.el-tabs{
    width: 700px;
    height: 700px;
    margin: 200px auto;
}
</style>