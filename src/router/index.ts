import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("../views/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("./../views/home/index.vue"),
      },
      {
        path: "/account",
        name: "account",
        component: () => import("./../views/organization/account/index.vue"),
      },
      {
        path: "/role",
        name: "role",
        component: () => import("./../views/organization/role/index.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
