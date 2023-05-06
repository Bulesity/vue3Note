import {createRouter,createWebHashHistory} from 'vue-router'
import routes from './route.page'
const router = createRouter({
    routes,
    history:createWebHashHistory()
})
router.beforeEach((form,to,next)=>{
    //console.log(form,to);
    next();
})
export default router