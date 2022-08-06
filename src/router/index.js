import { createRouter, createWebHistory } from "vue-router";

import store from "../store";

import HomeComponent from "../components/HomeComponent.vue";

import DashboardLayout from "../components/layouts/DashboardLayout.vue";
import UserLayout from "../components/layouts/UserLayout.vue";

import IndexComponent from "../views/Index.vue";
import IndexUser from "../views/User.vue";
import Message from "../views/Message.vue";

import CreateMessage from "../views/CreateMessage.vue";
import Users from "../views/Users.vue";
import LoginComponent from "../views/Login.vue";
import RegisterComponent from "../views/Register.vue";

const routes = [
  

  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },

  
  {
    path: '/login',
    name: 'Login',
    meta: { isGuest: true },
    component: LoginComponent
  },

  {
    path: '/register',
    name: 'Register',
    meta: { isGuest: true },
    component: RegisterComponent
  },

  {
    name : 'DashboardLayout',
    path: '/admin',
    redirect: "/admin/dashboard",
    meta: { requiresAuth: true },
    component: DashboardLayout,
    children: [
        { name : 'Dashboard', path: '/admin/dashboard', component: IndexComponent },
        { name : 'Messages', path: '/admin/message', component: Message },
        { name : 'messageCreate', path: '/admin/message/create', component: CreateMessage },
        { name : 'messageView', path: '/admin/message/:id', component: CreateMessage },
        { name : 'Users', path: '/admin/users', component: Users },
        
    ]
  },

  {
    name : 'UserLayout',
    path: '/user',
    redirect: "/user",
    meta: { requiresAuth: true },
    component: UserLayout,
    children: [
        { name : 'user', path: '/user', component: IndexUser },
        
    ]
  },


];


const router = createRouter({
    routes,
    history: createWebHistory()
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
      next({ name: "Login" });
    } else if (store.state.user.token && to.meta.isGuest) {
      next({ name: "Dashboard" });
    } else {
      next();
    }
  });

export default router;
