<template>
  <div class="recipe-card card h-100 shadow-sm">
    <img :src="receta.imagen" class="card-img-top" :alt="receta.nombre">
    <div class="card-body pb-0">
      <h5 class="card-title">{{ receta.nombre }}</h5>
      <p class="card-text">{{ recetaDescripcion }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">Por {{ receta.autor }}</small>
      </div>
    </div>
    <div class="card-footer bg-transparent border-0 pt-2">
      <div class="text-end mb-2">
        <button @click="irAReceta" class="btn btn-outline-secondary btn-sm"> Ver Receta</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    receta: {
      type: Object,
      required: true
    }
  },
  computed: {
    recetaDescripcion(){
      if(this.receta.descripcion.length >100) {
        return this.receta.descripcion.substring(0,100) + '...';
      }
      return this.receta.descripcion
    } 
  },
  methods: {
    irAReceta() {
      this.$router.push(`/categorias/${this.receta.categoria}/receta/${this.receta.id}`)
  }
}
}
</script>

<style scoped>
.recipe-card {
  transition: transform 0.3s, box-shadow 0.3s;
}
.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 2px 3px 5px rgba(0,0,0,0.15) !important;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>