import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import MovieList from '../components/MovieList.vue';
import LogIn from '../components/UserLogin.vue'
import Signup from '../components/UserSignup.vue';

const routes = [
  { path: '/login', component: LogIn },
  { path: '/signup', component: Signup },
  { path: '/home', name: 'HomePage', component: HomePage },
  { path: '/movies', name: 'MovieList', component: MovieList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
