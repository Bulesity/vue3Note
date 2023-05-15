import Home from '@/pages/home/index.vue'
import About from '@/pages/about/index.vue'
import Message from '@/pages/message/index.vue'
import Form from '@/pages/form/index.vue'
import Echart from '@/pages/echart/index.vue'
import Login from '@/pages/login/index.vue'
import Register from '@/pages/register/index.vue'
import Test01 from '@/pages/test01/index.vue'
export default [
    {
        path:'/',    
        redirect: (to:any) => {
            // 方法接收目标路由作为参数
            // return 重定向的字符串路径/路径对象
            if(!localStorage.getItem('userInfo')){
                return { path: '/login'}
            }
            return { path: '/home'}
        },
      
    },
    {
        path:'/login',    
        component:Login,
    },
    {
        path:'/register',    
        component:Register,
    },
    {
        path:'/home',    
        //redirect:'/home'
        component:Home,
        children:[
            {
                path:'echart/:id?/:name?',
                component:Echart,    
                meta:{isAuth:false}   
            },
            {
                path:'about',
                component:About
            },
            {
                path:'form',
                component:Form
            }, 
            {
                path:'test01',
                component:Test01
            }, 
            {
                path:'message',
                component:Message,
                props(router:any){
                   return router.query;
                }
            },
        ]
    },  
]