import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categorias from '../views/Categorias.vue'
import RecetasDesayuno from '../views/categorias/Desayuno.vue'
import RecetasAlmuerzo from '../views/categorias/Almuerzo.vue'
import RecetasOnce from '../views/categorias/Once.vue'
import RecetasCena from '../views/categorias/Cena.vue'
import PerfilAutor from '../views/PerfilAutor.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    redirect: '/' 
  },
  {
    path: '/categorias',
    component: Categorias,
    children: [
      {
        path:'',
        name:'TodasLasCategorias',
      },
      {
        path: 'desayuno', 
        name: 'Desayuno',
        component: RecetasDesayuno
      },
      {
        path: 'desayuno/receta/:id',
        name: 'RecetaDesayuno',
        component: RecetasDesayuno,
        props: true
      },
      {
        path: 'almuerzo',
        name: 'Almuerzo',
        component: RecetasAlmuerzo
      },
      {
        path: 'almuerzo/receta/:id',
        name: 'RecetaAlmuerzo',
        component: RecetasAlmuerzo,
        props: true
      },
      {
        path: 'once',
        name: 'Once',
        component: RecetasOnce
      },
      {
        path: 'once/receta/:id',
        name: 'RecetaOnce',
        component: RecetasOnce,
        props: true
      },
      {
        path: 'cena',
        name: 'Cena',
        component: RecetasCena
      },
      {
        path: 'cena/receta/:id',
        name: 'RecetaCena',
        component: RecetasCena,
        props: true
      },
    ]
  },     
  {
    path: '/autor/:nombre',
    name: 'PerfilAutor',
    component: PerfilAutor,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router