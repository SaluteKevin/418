import { createRouter, createWebHashHistory } from 'vue-router'
import Contact from "../views/Contact.vue"
import Main from "../views/Main.vue"

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path:"/Contact",
    name:"Contact",
    component: Contact

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
