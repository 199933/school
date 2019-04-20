<template>
  <div>
    <div class="img-Show">
      <!-- 大图片 -->
      <img :src="img.url" class="img-thumbnail img-Show-main" id="imgMain">

      <!-- 三张小图片 -->
      <img :src="img.url1" class="img-thumbnail img-Show-Left" @click="change" :class="{'biankuang' : flag}">
      <img :src="img.url2" class="img-thumbnail img-Show-M" @click="change1" :class="{'biankuang' : flag1}">
      <img :src="img.url3" class="img-thumbnail img-Show-Right" @click="change2" :class="{'biankuang' : flag2}">
    </div>

    <div class="pay-Show">
      <div class="top"><h1>每100减50【当当网 正版包邮 童书】猫武士二部曲-新预言（套装1-6全）猫武士 日落和平少儿童奇幻成长小说 动物励志</h1></div><br>
      <div class="jiage"><img :src="img.urlPay"></div>

      <div class="kuaidi"> 
        <span>运费</span>
        <span>北京 至 成都<i></i>高新西区<i></i>快递：0.00</span>
      </div>

    </div>
  </div>
</template>

<script>
import bookMain from "../img/猫武士1.jpg";
import bookLeft from "../img/猫武士s1.jpg";
import bookM from "../img/猫武士s2.jpg";
import bookRight from "../img/猫武士s3.jpg";
import bookMain1 from "../img/猫武士2.jpg";
import bookMain2 from "../img/猫武士3.jpg";

import payBackground from "../img/payBackground.jpg";
export default {
  data() {
    return {
      img: {
        url: bookMain,
        url1: bookLeft,
        url2: bookM,
        url3: bookRight,
        url4: bookMain1,

        urlPay: payBackground
      },
      flag : true,
      flag1 : false,
      flag2 : false,
    };
  },
  methods: {
    change(){
      var dir = document.getElementById("imgMain");
      var dirsrc = dir.getAttribute("src");
      dir.src = "../img/猫武士1.jpg";
      this.flag = true;
      this.flag1 = false;
      this.flag2 = false;
    },
    change1(){
      var dir = document.getElementById("imgMain");
      var dirsrc = dir.getAttribute("src");
      dir.src = "../img/猫武士2.jpg";
      this.flag = false;
      this.flag1 = true;
      this.flag2 = false;
    },
    change2(){
      var dir = document.getElementById("imgMain");
      var dirsrc = dir.getAttribute("src");
      dir.src = "../img/猫武士3.jpg";
      this.flag = false;
      this.flag1 = false;
      this.flag2 = true;
    }
  }
};
</script>

<style scoped>
.img-Show {
  position: relative;
}
.img-Show-main {
  position: absolute;
  left: 100px;
  top: 80px;
  transition: all 0.5s ease;
}
.img-Show-Left {
  position: absolute;
  left: 60px;
  top: 560px;
  cursor: pointer;
}
.img-Show-M {
  position: absolute;
  left: 280px;
  top: 560px;
  cursor: pointer;
}
.img-Show-Right {
  position: absolute;
  left: 500px;
  top: 560px;
  cursor: pointer;
}
.biankuang{
  border: 2px solid black;
}



/* 购买区域 */
.pay-Show{
  position: relative;
  width: 520px;
  height: 450px;
  border: 1px solid black;
  left : 650px;
  top: 80px;
  /* overflow: hidden; */
}
.top{
  position : absolute;
  top : -12px;
}
.pay-Show .top h1{
  padding-bottom: .2em;
  line-height: 1;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}
.jiage{
  position: absolute;
  top: 50px;
}
.kuaidi{
  position: relative;
  top: 150px;
  border-bottom: 1px dashed #999;
  height: 40px;
}




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
</style>
