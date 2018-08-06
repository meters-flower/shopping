<template>
    <router-view></router-view>
</template>
<script>
    export default {
        
    }
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,body,#app,.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

body {
    font: 14px/26px 'PingFang SC', "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
    color: #333;
    margin: 0;
}

a {
    text-decoration: none
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clear::after {
  content: '';
  clear: both;
  display: block;
}
.flexbox {
  display: flex;
}
.flex-1 {
  flex: 1;
}
.flex-col {
  flex-direction: column;  
}
.flex-h {
  justify-content: space-between;
  align-items: center;
}
.flex-v {
  flex-direction: column;
  justify-content: space-between;
}
.flex-center {
  justify-content: center;
  align-items: center;
}
.container {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
