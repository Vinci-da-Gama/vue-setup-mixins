import Home from "../views/Home.vue";
import { routerRelated } from "../constants/routerRelated";

export const routes = [
  {
    ...routerRelated.compositionApi,
    component: Home,
  },
  {
    ...routerRelated.sortPjs,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SortProjects.vue"),
  },
  {
    ...routerRelated.products,
    component: () => import("../views/AllProducts.vue"),
  },
  {
    ...routerRelated.pdAdd,
    component: () => import("../views/AddProduct.vue"),
  },
  {
    ...routerRelated.pddetails,
    component: () => import("../views/ProductDetails.vue"),
    props: true,
  },
  {
    ...routerRelated.setupwithVuex,
    component: () => import("../views/SetupWithVuex.vue"),
  },
  {
    ...routerRelated.useMixins,
    component: () => import("../views/UseMixins.vue"),
  },
  {
    ...routerRelated.mixinsInSetup,
    component: () => import("../views/MixinsInSetup.vue"),
  },
  {
    path: "/:notFound(.*)",
    component: () => import("../views/NoFound.vue"),
  },
];
