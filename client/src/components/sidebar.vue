<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="sidebar-el-menu" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" :collapse="collapse" unique-opened router>
      <template v-for="item in items">
          <template v-if="item.subs">
              <el-submenu :index="item.index" :key="item.index">
                  <template slot="title">
                      <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                  </template>
                  <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                      {{ subItem.title }}
                  </el-menu-item>
              </el-submenu>
          </template>
          <template v-else>
              <el-menu-item :index="item.index" :key="item.index">
                  <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
              </el-menu-item>
          </template>
      </template>
    </el-menu>      
  </div>
</template>

<script>
import bus from '../common/bus';
export default {
  name: 'layout',
  data () {
    return {
      title: '布局',
      collapse: false,
      items: [
          {
              icon: 'el-icon-setting',
              index: 'index',
              title: '系统首页'
          },
          {
              icon: 'el-icon-goods',
              index: '3',
              title: '商品管理',
              subs: [
                  {
                      index: 'store',
                      title: '店铺列表'
                  },
                  {
                      index: 'goods',
                      title: '商品列表'
                  },
                  {
                      index: 'comment',
                      title: '评论管理'
                  }
              ]
          },
          {
              icon: 'el-icon-news',
              index: '4',
              title: '交易管理',
              subs: [
                  {
                      index: 'order',
                      title: '订单管理'
                  },
                  {
                      index: 'refund',
                      title: '退款管理'
                  }
              ]
          }          
      ]
    }
  },
  computed:{
      onRoutes(){
          return this.$route.path.replace('/', '');
      }
  },  
  created(){
      bus.$on('collapse', msg => {
          this.collapse = msg;
      });
  }  
}
</script>

<style scoped>
  .sidebar{
      display: block;
      position: absolute;
      left: 0;
      top: 70px;
      bottom:0;
      overflow-y: scroll;
  }
  .sidebar::-webkit-scrollbar{
      width: 0; /* 隐藏滚动条 */
  }  
  .sidebar > ul {
      height:100%;
  }  
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 230px;
  }

</style>
