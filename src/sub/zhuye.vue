<template>
  <div class="bgc">
    <div class="left-muem">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false" class="left-btn">展开</el-radio-button>
        <el-radio-button :label="true" class="left-btn">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">类别</span>
          </template>
          <el-menu-item-group>
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="1-1">教育</el-menu-item>
            <el-menu-item index="1-2">爱国</el-menu-item>
            <el-menu-item index="1-3">热血</el-menu-item>
          </el-menu-item-group>
          <!-- <el-menu-item-group title="推荐"> -->
          <el-menu-item index="1-4">励志</el-menu-item>
          <!-- </el-menu-item-group> -->
          <el-submenu index="1-5">
            <span slot="title">更多</span>
            <el-menu-item index="1-5-1">科学</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="main-Show">


      <div class="Picmain-left">
        <transition v-on:before-enter="brforeEnter" v-on:enter="enter"  v-on:after-enter="afterEnter">
          <div class="ball" v-show="flag" ref="ball"></div>
        </transition>
        <img :src="img.url" class="book1 img-circle">
      </div>
      <div class="book-content">
        <input type="button" class="btn-buy btn btn-danger" value="立即购买" @click="buy">
        <br>
        <input type="button" class="btn-buycar btn btn-warning" value="加入购物车" @click="flag = !flag">
      </div>


      

      <div class="Picmain-left1">
        <img :src="img.url" class="book2 img-circle">
      </div>
      <div class="book-content1">
        <input type="button" class="btn-buy btn btn-danger" value="立即购买">
        <br>
        <input type="button" class="btn-buycar btn btn-warning" value="加入购物车" @click="flag = !flag">
      </div>

      <div class="Picmain-left1">
        <img :src="img.url" class="book2 img-circle">
      </div>
      <div class="book-content1">
        <input type="button" class="btn-buy btn btn-danger" value="立即购买">
        <br>
        <input type="button" class="btn-buycar btn btn-warning" value="加入购物车" @click="flag = !flag">
      </div>
    </div>
  </div>
</template>



<script>
import book1 from "../img/book1.jpg";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: true,
      img: {
        url: book1
      },
      flag: false,

    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    buy(){
      this.$router.push("/buy");
    },
    brforeEnter(el) {
      // el.style.transform = "translate(340px,200px)";
      el.style.transform = "translate(0px,0px)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgelPosition = document.getElementById("buyCar").getBoundingClientRect();
      const xDist = badgelPosition.left - ballPosition.left;
      const yDist = badgelPosition.top - ballPosition.top;
        var X = parseInt(xDist) ;
        var Y = parseInt(yDist) ;
      el.style.transform = `translate( ${X}px,${Y}px)`;
      el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.flag = false;

    }
  }
};
</script>

<style>
.bgc {
  width: 100%;
  height: 100%;
  background-color: #d3d7d4;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.left-btn {
  position: relative;
  left: 30px;
}
.left-muem {
  position: fixed;
  top: 65px;
  width: 200px;
  min-height: 400px;
  z-index: 1000;
  opacity: 0.8;
}
/* main-Show{
    position: fixed;
  } */
.book1 {
  position: relative;
  left: 300px;
  top: 150px;
  cursor: pointer;
  transition: all 0.6s;
}
.book1:hover {
  transform: scale(1.5);
}
.book-content {
  display: inline-block;
  position: relative;
  left: 500px;
  width: 800px;
  height: 200px;
  border: 1px solid #74787c;
  border-radius: 12px;
  background-color: #d9d6c3;
}
.btn-buy {
  position: absolute;
  left: 600px;
  top: 40px;
}
.btn-buycar {
  position: absolute;
  left: 595px;
  top: 100px;
}

.book2 {
  position: relative;
  left: 300px;
  top: 150px;
  cursor: pointer;
  transition: all 0.6s;
}
.book2:hover {
  transform: scale(1.5);
}
.book-content1 {
  display: inline-block;
  position: relative;
  top: 0px;
  left: 500px;
  width: 800px;
  height: 200px;
  border: 1px solid #74787c;
  border-radius: 12px;
  background-color: #d9d6c3;
}
.ball {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  z-index: 1000;
  top:30px;
  left: 1100px;
}

</style>
<style  scoped>
</style>
