<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar> 
    <div class="content-box" :class="{'content-collapse':collapse}">
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>    
  </div>
</template>

<script>
import vHead from './header';
import vSidebar from './sidebar';
import bus from '../common/bus';
export default {
  data () {
    return {
      title: '布局',
      collapse: false
    }
  },
  components:{
    vHead,
    vSidebar
  },
  created(){
    bus.$on('collapse', msg => {
        this.collapse = msg;
    });
  }    
}
</script>
<style scoped>
.content-box {
    position: absolute;
    left: 230px;
    right: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}

.content {
    width: auto;
    padding: 40px;
}

.content-collapse {
    left: 65px;
}
</style>

