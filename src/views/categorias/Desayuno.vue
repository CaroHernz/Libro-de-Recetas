<template>
  <div class="desayuno">
    <div class="container py-4">
      <h2 class="text-center display-4 text-warning mb-4">Recetas de Desayuno</h2>
      
      <div class="recetas-menu mb-4" v-if="$route.params.id && recetas.length">
        <div class="d-flex flex-nowrap overflow-auto justify-content-center">
          <button 
            v-for="receta in recetas" 
            :key="receta.id" 
            @click="irAReceta(receta.id)"
            :class="['btn', 'btn-sm','rounded-pill','border-0', 'me-2', receta.id === recetaActualId ? 'btn-warning' : 'btn-outline-warning']"
          > 
            {{ receta.nombre }}
          </button>
        </div>
      </div>
      <transition :name="transitionName" mode="out-in">
        <DetalleReceta v-if="$route.params.id" 
          :recetas="recetas" 
          :key="$route.params.id"/>
      </transition>

      <transition name="fade" mode="out-in">
        <div v-if="!$route.params.id" class="recetas-lista">
        <div class="row">
          <div 
            v-for="receta in recetas" 
            :key="receta.id" 
            class="col-md-6 col-lg-4 mb-4"
          >
            <RecipeCard :receta="receta" />
          </div>
        </div>
      </div>
      </transition>

      <!-- Navegación -->
      <div v-if="$route.params.id && recetas.length" class="receta-navegacion">
        <div class="d-flex justify-content-between align-items-center mb-4 col">
          <button 
          @click="navReceta('anterior')" 
          :disabled="indiceActual <= 0"
          class="btn btn-sm btn-secondary me-2"
        >
          &larr; Anterior
        </button>
        <small class="mx-2 text-secondary">{{ indiceActual+1 }} / {{ recetas.length }}</small>
        <button 
          @click="navReceta('siguiente')" 
          :disabled="indiceActual >= recetas.length - 1"
          class="btn btn-sm btn-secondary"
        >
          Siguiente &rarr;
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetalleReceta from '../../components/DetalleReceta.vue'
import RecipeCard from '../../components/RecetaCard.vue'
import { recetas } from '../../data/recetas'

export default {
  name: 'Desayuno',
  components: {
    DetalleReceta,
    RecipeCard
  },
  data() {
    return {
      recetas: [],
      transitionName: 'page-flip-next'
    }
  },
  computed: {
    recetaActualId(){
      return this.$route.params.id ? parseInt(this.$route.params.id) : null;
    },
    indiceActual() {
      if(!this.recetas.length || !this.$route.params.id) return -1;
      return this.recetas.findIndex(r => r.id === parseInt(this.$route.params.id))
    }
  },
  watch: {
    '$route.params.id'(newId,oldId) {
      if(newId && oldId) {
        const newIndex = this.recetas.findIndex(r=>r.id === parseInt(newId))
        const oldIndex = this.recetas.findIndex(r=> r.id === parseInt(oldId))

        this.transitionName = newIndex > oldIndex ? 'page-flip-next' : 'page-flip-prev'
      }
    }
 },
  mounted() {
    this.cargarRecetas()
  },
  methods: {
    cargarRecetas() {
      const categoriaData = recetas.find(c => c.hasOwnProperty('desayuno'))
      this.recetas = categoriaData ? categoriaData.desayuno : []
      this.recetas.forEach(receta => {
        if(!receta.categoria) {
          receta.categoria='desayuno'
        }
      })
    },
    irAReceta(id) {
      this.$router.push(`/categorias/desayuno/receta/${id}`)
    },
    navReceta(direccion) {
      if(this.indiceActual === -1) return;
      let nuevoIndice;
      if(direccion === 'siguiente') {
        nuevoIndice = this.indiceActual+1;
      } else {
        nuevoIndice = this.indiceActual-1;
      }
      if(nuevoIndice >= 0 && nuevoIndice < this.recetas.length) {
        const nuevaReceta = this.recetas[nuevoIndice];
        this.$router.push(`/categorias/desayuno/receta/${nuevaReceta.id}`)
      }
    }
  }
}
</script>
<style scoped>
.page-flip-next-enter-active,
.page-flip-next-leave-active,
.page-flip-prev-enter-active,
.page-flip-prev-leave-active {
  transition: all 0.6s ease-in;
  position: relative;
  width: 100%;

}
.page-flip-next-enter-from {
  opacity: 0;
  transform: translateX(100%) rotateY(-90deg) scale(0.8);
}
.page-flip-next-leave-to {
  opacity: 0;
  transform: translateX(-100%) rotateY(90deg) scale(0.8);
}

.page-flip-prev-enter-from {
  opacity: 0;
  transform: translateX(-100%) rotateY(90deg) scale(0.8);
}

.page-flip-prev-leave-to {
  opacity: 0;
  transform: translateX(100%) rotateY(-90deg) scale(0.8);
}
.page-flip-next-enter-to,
.page-flip-next-leave-from,
.page-flip-prev-enter-to,
.page-flip-prev-leave-from {
  opacity: 1;
  transform: translateX(0) rotateY(0deg) scale(1);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.recetas-menu {
  background: linear-gradient(to right, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.05));
  padding: 1rem;
  border-radius: 10px;
}
</style>