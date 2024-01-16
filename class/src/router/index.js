import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/inicio",
  },
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/inicio",
        name: "inicio",
        component: () => import("../components/Inicio.vue"),
      },
      {
        path: "/main",
        name: "main",
        component: () => import("../components/Main.vue"),
      },
      {
        path: "/reservas",
        name: "reservas",
        component: () => import("../components/Reserva.vue"),
      },
      {
        path: "/disponibles",
        name: "disponibles",
        component: () => import("../components/VuelosDisponibles.vue"),
      },
      {
        path: "/cancelados",
        name: "cancelados",
        component: () => import("../components/VuelosCancelados.vue"),
      },
      {
        path: "/reservados",
        name: "reservados",
        component: () => import("../components/AsientosReservados.vue"),
      },
      {
        path: "/lineas",
        name: "lineas",
        component: () => import("../components/LineasDeVuelo.vue"),
      },
      {
        path: "/proximos",
        name: "proximos",
        component: () => import("../components/ProximosVuelos.vue"),
      },
    ],
  },
];
const router = new VueRouter({ routes });
export default router;
