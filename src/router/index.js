import VueRouter from "vue-router";
import InfoManage from "../page/InfoManage";
import MainShow from "../page/MainShow";


//  创建路由对象
const v = new VueRouter({
    routes: [
        {
            path: "/info",
            component: InfoManage
        },
        {
            path: "/",
            component: MainShow
        }

    ]
})
export default v;
