// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
// import Accueil from '../Accueil.vue';
import Livre from '../components/livre/Livre.vue';
import Membre from '../components/membre/Membre.vue';
import Pret from '../components/pret/Pret.vue';


const routes = [
//  ~{ path:'/Accueil',component:Accueil},
  { path: '/livre', component: Livre },
  { path: '/membre', component: Membre },
  { path: '/pret', component: Pret },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

