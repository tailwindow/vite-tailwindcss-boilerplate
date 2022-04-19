
import AppLayout from "./layouts/AppLayout.vue";
import Home from "./pages/Home.vue";

export default [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "about",
        name: "about",
        component: () => import("./pages/About.vue"),
      },
    ],
  },
];