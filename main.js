// main.js

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

// Importa tus componentes para las pantallas
import Inicio from './components/Inicio.vue';
import Configuracion from './components/Configuracion.vue';
import AcercaDe from './components/AcercaDe.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/configuracion', name: 'Configuracion', component: Configuracion },
  { path: '/acerca-de', name: 'AcercaDe', component: AcercaDe }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
