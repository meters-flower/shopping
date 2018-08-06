<template>
  <div class="header clear">
        <div class="menu-btn fl" @click="collapseChage">
            <i class="el-icon-menu"></i>
        </div>
        <div class="logo fl">后台管理系统</div>
        <div class="user-info fr flexbox flex-center">
            <!-- 全屏显示 -->
            <div class="btn-full">
                <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                    <i class="el-icon-rank"></i>
                </el-tooltip>
            </div>
            <!-- 消息中心 -->
            <div class="btn-bell">
                <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                    <router-link to="/tabs">
                        <i class="el-icon-bell"></i>
                    </router-link>
                </el-tooltip>
                <span class="btn-bell-badge" v-if="message"></span>
            </div>
            <img class="user-img" src="../assets/images/user.png">
        </div>  	
  </div>
</template>

<script>
import bus from '../common/bus';
export default {
  data () {
    return {
        collapse: false,
        fullscreen: false,
        name: 'Ww',
        message: 2
    }
  },
  methods: {
  	/* 折叠侧边栏 */
  	collapseChage() {
        this.collapse = !this.collapse;
        bus.$emit('collapse', this.collapse);
  	}
  }
}
</script>
<style lang="scss" scoped>
.header {
	padding-right: 50px;
	height: 70px;
	font-size: 22px;
	color: #fff;
	line-height: 70px;
	background-color: #242f42;
	.menu-btn {
		padding: 0 21px;
    	cursor: pointer;
	}
}
.user-info{
    height: 70px;
    .btn-bell, .btn-full{
        position: relative;
        width: 30px;
        height: 30px;
        line-height: 26px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }      
    .btn-full{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    } 
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-img{
    	display: block;
    	margin-left: 20px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }         
}

</style>

