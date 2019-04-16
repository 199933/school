// 入口文件

import Vue from "vue/dist/vue.js" 
import App from "./App.vue"
import 'bootstrap/dist/css/bootstrap.css'
// 导入vue-router模块
import VueRouter from "vue-router"
// 手动安装VueRouter
Vue.use(VueRouter)
import router from "./router.js"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import  VueResource  from 'vue-resource'
Vue.use(VueResource) 

// import account from "./main/Account.vue"
// import goodslist from "./main/Goodslist.vue"
// import login from "./sub/login.vue"
// import register from "./sub/register.vue"
// // 创建一个路由对象
// let router = new VueRouter({
//     routes:[
//         // acount goodlist
//         {path:'/account',component:account,children:[
//             {path:'login',component:login},
//             {path:'register',component:register},
//         ]},
//         {path:'/goodslist',component:goodslist},
//     ]
// })

let vm = new Vue({
    el:'#app',
    render:c => c(App),
    router,//将路由对象挂载在vm上
    data(){
        return{
            baseUrl: 'https://webblog.yolostudio.cn',
            headers:{headers:{Authorization :''}},
        }
    }
})
