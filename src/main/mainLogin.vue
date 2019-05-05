<template>
    <div>
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label">账号</label>
            <div class="col-sm-10">
              <input v-model="content.num" type="text" class="form-control InputW" id="firstname" placeholder="请输入账号" v-focus>
            </div>
          </div>
          <div class="form-group">
            <label for="lastname" class="col-sm-2 control-label">密码</label>
            <div class="col-sm-10">
              <input v-model="content.password" type="password" class="form-control InputW" id="lastname" placeholder="请输入密码">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox">请记住我
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-primary btn-WZ" @click="myEmit">登录</button>
            </div>
          </div>
        </form>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      content:{
         num : '',
         password:''
      }
    };
  },

  methods:{
      myEmit(){
        let _self = this;
          this.$http.post(`${this.$root.baseUrl}/api/article/delete`, this.content,this.$root.headers).then(function (res) {
                        res.data.title = '';
                        res.data.content = '';
                        console.log(res);
                        
                    })
         this.$router.push("/zhuye");
      }
        
  },
  directives: {
    // 设置字体加粗
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped>
/* 瀑普通的style标签只支持普通的样式，设置lang可设置样式语言 */

    
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
