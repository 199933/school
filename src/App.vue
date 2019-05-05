<template>
  <div>
    <!-- <h1>这是 App 组件</h1> -->
    <!-- <div class="btn-group btn-group-lg bothBtn" v-if="show" > 
        <router-link to="/login" class="btn btn-lg btn-default Diybtn">登录</router-link>
        <router-link to="/register" class="btn btn-lg btn-default Diybtn">注册</router-link>
    </div>
    <transition mode="out-in">
      <router-view></router-view>
    </transition> -->
    <div class="header">
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">主页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="#" target="_blank">订单管理</a>
        </el-menu-item>
        <el-menu-item index="5"  id="buyCar">
          <a href="#" target="_blank">购物车</a>
        </el-menu-item>
      </el-menu>
    </div>


    <!-- <transition mode="out-in"> -->
     <router-view></router-view>    
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
    data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
       this.$router.push('/login/mainLogin');
    }
}
</script>

<style scoped>
.v-enter {
  opacity: 0;
  /* transform: translate(10px); */
}
.v-leave-to {
  opacity: 0;
  /* transform: translate(-10px); */
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
  
}
.header{
  position: fixed;
  z-index: 1000;
  width: 100%
}
#buyCar{
  left: 700px;
}
#buyCar a{
  position: relative;
  display: inline-block;
  width: 65px;
  height: 20px;
  background-color: white;
  line-height: 20px;
  color: black;
  /* left: 100px; */
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
}
</style>