import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ContactPage from "@/views/ContactPage";
import AboutPage from "@/views/AboutPage";
import AboutPageDetail from "@/views/AboutPageDetail";
import PortFolioPage from "@/views/PortFolioPage";
import nViso from "@/views/projects/nViso";
import LMS from "@/views/projects/LMS";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage
  },
  {
    path: "/about-detail",
    name: "aboutdetail",
    component: AboutPageDetail
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortFolioPage
  },
  {
    path: "/nviso",
    name: "nviso",
    component: nViso
  },
  {
    path: "/lms",
    name: "lms",
    component: LMS
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
