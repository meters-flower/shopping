<template>
  <div class="login">
  	<div class="box">
	  	<div class="hd">后台管理系统</div>
	  	<div class="bd">
	  		<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
	            <el-form-item prop="username">
	                <el-input v-model="ruleForm.username" placeholder="username"></el-input>
	            </el-form-item>
	            <el-form-item prop="password">
	                <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm"></el-input>
	            </el-form-item>      
	            <div class="btn">
	                <el-button @click="submitForm">登录</el-button>
	            </div>                  			
	  		</el-form>	
	  	</div>  		
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        ruleForm: {
            username: 'admin',
            password: '123123'
        },
        rules: { //输入验证规则
            username: [{ 
            	required: true, 
            	message: '请输入用户名', 
            	trigger: 'blur' 
            }],
            password: [{ 
            	required: true, 
            	message: '请输入密码', 
            	trigger: 'blur' 
            }]
        }
    }
  },
  methods: {
  	submitForm() {
        this.$refs.ruleForm.validate((valid) => {
            if (valid) {
                localStorage.setItem('ms_username',this.ruleForm.username);
                this.$router.push('/');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
  	}
  }
}
</script>

<style lang="scss" scoped>
	.login {
		position: relative;
		width: 100%;
		height: 100%;
		background: #242f42;
		text-align: center; 

		.box {
	        position: absolute;
	        left:50%;
	        top:50%;
	        width:300px;
	        height:160px;
	        margin:-150px 0 0 -190px;			
		}
		.hd {
			margin-bottom: 10px;
			font-size: 30px;
			color: #fff;
		}	
		.bd {
			padding:40px;	
			border-radius: 5px;
			background: #fff;
			text-align: center;
		}	
		.btn button {
			width: 100%;
			height: 36px;
		}
	}
</style>
