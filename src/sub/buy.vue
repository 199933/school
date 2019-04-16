<template>
  <div>
    <div class="img-Show">
      <transition>
        <img :src="img.url" class="img-thumbnail img-Show-main" id="imgMain">
      </transition>
      <transition>
      
     
      <img :src="img.url1" class="img-thumbnail img-Show-Left" @click="change1">
       </transition>
      <img :src="img.url2" class="img-thumbnail img-Show-M">
      <img :src="img.url3" class="img-thumbnail img-Show-Right">
    </div>
  </div>
</template>

<script>
import bookMain from "../img/猫武士1.jpg";
import bookLeft from "../img/猫武士s1.jpg";
import bookM from "../img/猫武士s2.jpg";
import bookRight from "../img/猫武士s3.jpg";
import bookMain1 from "../img/猫武士2.jpg";

export default {
  data() {
    return {
      img: {
        url: bookMain,
        url1: bookLeft,
        url2: bookM,
        url3: bookRight,
        url4: bookMain1
      }
    };
  },
  methods: {
    change1() {
      var dir = document.getElementById("imgMain");
      var dirsrc = dir.getAttribute("src");
      dir.src = "../img/猫武士2.jpg";
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
