import Vue from "vue";
import Router from "vue-router";
import Vuelidate from "vuelidate";
import Home from "./views/Home.vue";
import Form from "./views/Form.vue"


Vue.use(Router);
// global
 Vue.use(Vuelidate);

export default new Router({
  mode:"history",
  linkExactActiveClass:"vue-shcool-active-class",
  //scroll behaviour in page
  scrollBehavior(to,from,savedPosition){
     if(savedPosition){
      return savedPosition;
     }else{
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if(to.hash === "#experience"){
          position.offset = { y:140};
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
     }
  },
  //end scroll
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props:true
    },
    {
      path:"/form",
      name:"form",
      component: Form,
      props:true
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    // {
    //   path: "/brazil",
    //   name:"brazil",
    //   component:() =>
    //       import(/* webpackChunkName: "brazil" */ "./views/brazil.vue")
    // },
    // {
    //   path:"/hawaii",
    //   name:"hawaii",
    //   component:() =>
    //       import(/* webpackChunkName: "hawaii" */ "./views/Hawaii.vue")
    // },
    // {
    //   path:"/jamaica",
    //   name:"jamaica",
    //   component:() =>
    //     import(/* webpackChunkName: "jamica" */ "./views/Jamaica")
    // },
    // {
    //   path:"/panama",
    //   name:"panama",
    //   component:() =>
    //      import(/* webpackChunkName: "panama" */ "./views/Panama")
    // },
    {
      path:"/destination/:slug",
      name:"DestinationDetails",
      props:true,
      component:() =>
         import(/* webpackChunkName: "DestinationDetails" */ "./views/DestinationDetails"),
      children:[
      {
        path:":experienceSlug",
        name:"experienceDetails",
        props:true,
        component:() =>
          import(/* webpackChunkName: "ExperienceDetails" */ "./views/ExperienceDetails"),

      }]
    }
  ]
});
