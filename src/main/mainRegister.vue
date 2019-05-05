<template>
    <div>
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label">账号</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control InputW"
                id="firstname"
                placeholder="请输入账号"
                v-focus
              >
            </div>
          </div>
          <div class="form-group">
            <label for="lastname" class="col-sm-2 control-label">密码</label>
            <div class="col-sm-10">
              <input type="password" class="form-control InputW" id="lastname" placeholder="请输入密码">
            </div>
          </div>
          <div class="form-group">
            <label for="lastname" class="col-sm-2 control-label">手机</label>
            <div class="col-sm-10">
              <input type="text" class="form-control InputW" id="lastname" placeholder="请输入手机号">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-primary btn-WZ">注册</button>
            </div>
          </div>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  directives: {
    // 设置字体加粗
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
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

.bothBtn{
    position: absolute;
    top: 19%;
    left: 50%;
    margin-left: -175px;
    margin-top: -50px;

}
.Diybtn{
    width: 175px;
    height: 50px;
}
.router-link-active{
    background-color: rgb(0, 119, 255);
    color: white;
}




.wrapper {
  width: 350px;
  height: 400px;
  border: 1px solid #999;
  border-radius: 5px;
}
.box {
  position: absolute;
  margin-left: -175px;
  margin-top: -200px;
  top: 50%;
  left: 50%;
}
form {
  margin-top: 20px;
}
.InputW {
  width: 230px;
}
.btn-WZ {
  width: 100px;
  height: 40pxs;
  position: absolute;
  top: 80px;
  left: 70px;
}
</style>