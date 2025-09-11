<template>
  <div class="detalle-receta">
    <div v-if="recetaActual" class="receta-libro">
      <transition :name="transitionName" mode="out-in">
        <div class="transition-wrapper" :key="recetaActual.id">
      <div class="row">
        <!-- Imagen -->
        <div class="col-md-6 mb-4 mb-md-0">
          <div class="receta-imagen-container">
            <img :src="recetaActual.imagen" :alt="recetaActual.nombre" class="receta-imagen">
          </div>
        </div>
        <!-- Contenido -->
        <div class="col-md-6">
          <div class="receta-contenido">
            <small class="text-muted">Por {{ recetaActual.autor }}</small>
            <h2 class="receta-titulo">{{ recetaActual.nombre }}</h2>
            <p class="receta-descripcion">{{ recetaActual.descripcion }}</p>
            
            <div class="receta-ingredientes">
              <h4>Ingredientes</h4>
              <ul>
                <li v-for="(ingrediente, index) in recetaActual.ingredientes" :key="index">{{ ingrediente }}</li>
              </ul>
            </div>
            
            <div class="receta-preparacion">
              <h4>Preparación</h4>
              <p style="white-space: pre-line;">{{ recetaActual.instrucciones }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </transition>
    </div>
    
    <div v-else class="text-center">
      <p>Receta no encontrada</p>
      <router-link to="/categorias" class="btn btn-danger">Volver a Categorías</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetalleReceta',
  props: {
    recetas: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      transitionName: 'page-flip-next',
    }
  },
  computed: {
    recetaActual() {
      if(!this.recetas.length) return null;
      return this.recetas.find(r => r.id === parseInt(this.$route.params.id)) || null
    }
  },
  watch: {
    '$route.params.id': {
      handler(newId,oldId) {
        if(!newId || !oldId) return;
        const newIndex = this.recetas.findIndex(r => r.id === parseInt(newId));
        const oldIndex = this.recetas.findIndex(r=>r.id === parseInt(oldId));
      if(newIndex > oldIndex) {
        this.transitionName = 'page-flip-next';
      }else {
        this.transitionName = 'page-flip-prev'
      }
      }
    } 
  }
}
</script>

<style scoped>
.receta-imagen-container {
  height: 500px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 5px rgba(0,0,0,0.2);
}
@media (max-width: 768px) {
  .receta-imagen-container {
    height: 300px;
  }
}
.receta-navegacion {
  display: flex;
  justify-content: center;
  align-items: center;
}
.receta-imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}
.receta-contenido {
  padding: 20px;
}

.receta-titulo {
  color: #333;
  margin-bottom: 15px;
}

.receta-descripcion {
  color: #666;
  margin-bottom: 20px;
}

.receta-ingredientes,
.receta-preparacion {
  margin-bottom: 20px;
}
.receta-ingredientes ul {
  padding-left: 20px;
}
.receta-ingredientes li {
  margin-bottom: 5px;
}
.transition-wrapper {
  position: relative;
}
</style>