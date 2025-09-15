<template>
  <div class="categorias" v-if="esRuta">
    <header class="profile-header text-center">
        <div class="container">
            <h1 class="display-5 fw-bold">Descubre un Mundo de Sabores</h1>
            <p class="lead">Explora nuestras categorías y encuentra la inspiración perfecta para cada momento del día.</p>
        </div>
    </header>
    <div class="container py-3">
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4" v-for="categoria in categorias" :key="categoria.nombre">
          <div class="card h-100 shadow-sm categoria-card">
            <div class="card-img-container">
              <img :src="categoria.imagen" class="card-img" :alt="categoria.nombre">
            </div>
            <div class="card-overlay"></div>
            <div class="card-body text-center">
              <h5 class="card-title">{{ categoria.nombre }}</h5>
              <p class="card-text">{{ categoria.descripcion }}</p>
              <router-link :to="categoria.ruta" class="btn btn-outline-light">Ver Recetas</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            <router-view v-else></router-view>
</template>

<script>
export default {
  name: 'Categorias',
  data() {
    return {
      categorias: [
        {
          nombre: 'Desayunos',
          descripcion: 'Empieza tu día con energía con nuestras recetas de desayuno.',
          imagen: 'https://www.hola.com/horizon/landscape/2db046b34a7c-adobestock1092554078port.jpg',
          ruta: '/categorias/desayuno'
        },
        {
          nombre: 'Almuerzos',
          descripcion: 'Platos principales nutritivos y sabrosos para tu mediodía.',
          imagen: 'https://xurrosymas.mx/wp-content/uploads/2024/08/comida-saludable-1024x675.jpg',
          ruta: '/categorias/almuerzo'
        },
        {
          nombre: 'Onces',
          descripcion: 'Deliciosas meriendas para recargar energías por la tarde.',
          imagen: 'https://lacuinatradicion.es/wp-content/uploads/2016/01/desayuno5.jpg',
          ruta: '/categorias/once'
        },
        {
          nombre: 'Cenas',
          descripcion: 'Platos ligeros y reconfortantes para terminar el día.',
          imagen: 'https://thecookinglab.es/wp-content/uploads/2023/08/cena-saludable.jpg',
          ruta: '/categorias/cena'
        }
      ]
    } 
  },
  computed: {
    esRuta() {
      return this.$route.path === '/categorias';
    },
    tituloActual() {
      const ruta = this.$route.path;
      if (ruta.includes('desayuno')) return 'Recetas de Desayuno';
      if (ruta.includes('almuerzo')) return 'Recetas de Almuerzo';
      if (ruta.includes('once')) return 'Recetas de Once';
      if (ruta.includes('cena')) return 'Recetas de Cena';
      return 'Categorías';
    }
  }
}
</script>
<style scoped>
.profile-header {
    background: linear-gradient(135deg, #fff6e6 0%, #ffe6e6 100%);
    padding: 2rem 0;
    margin-bottom: 2rem;
    }
.categoria-card {
  position: relative;
  overflow: hidden;
  border:none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 350px;
}
.categoria-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
}
.card-img-container {
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
  z-index: 2;
}
.card-body {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 1.5rem;
  color: white;
}

.card-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
}

.card-text {
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
  font-size: 0.9rem;
}

.btn {
  align-self: center;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .card-body {
    padding: 1rem;
  }
  
  .card-text {
    font-size: 0.85rem;
  }
}
</style>