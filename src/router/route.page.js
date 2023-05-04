import Home from '../pages/home'
import About from '../pages/about'
import Message from '../pages/message'
export default [
    {
        path:'/',    
        redirect:'/home'
    },
    {
        path:'/home/:id?/:name?',
        component:Home,    
        meta:{isAuth:false}   
    },
    {
        path:'/about',
        component:About
    },   
    {
        path:'/message',
        component:Message,
        props({query}){
           return query;
        }
    }
]