import VueRouter from 'vue-router';
import IndexPage from "../views/IndexPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
export const routes = [
  {
    path: '/',
    component: () => import('../views/IndexPage'),
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: '/04-spa/05-AuthPages',
  routes: [
    {
      path: '/',
      name: '',
      component: IndexPage,
    },
    {
      path: '/login',
      name: '',
      component: LoginPage,
    },
    {
      path: '/register',
      name: '',
      component: RegisterPage,
    }
  ],
});
