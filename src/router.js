// 路由文件

import VueRouter from "vue-router"
// Main
import account from "./main/account.vue"
import goodslist from "./main/Goodslist.vue"
// sub
import login from "./sub/login.vue"
import register from "./sub/register.vue"
import zhuye from "./sub/zhuye.vue"
import buy from "./sub/buy.vue"

// 创建一个路由对象
let router = new VueRouter({
    routes:[
        // acount goodlist
        // {path:'/account',component:account,children:[
        //     {path:'login',component:login},
        //     {path:'register',component:register},
        // ]},
        // {path:'/goodslist',component:goodslist},
        {path:'/',redirect:'/login'},
        {path:'/login',component:login},
        {path:'/register',component:register},
        {path:'/zhuye',component:zhuye},
        {path:'/buy',component:buy,children:[
            {path:'account',component:account},
            // {path:'register',component:register},
        ]},
    ]
})

export default router