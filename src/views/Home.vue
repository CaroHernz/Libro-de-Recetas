<template>
  <div class="home">
    <div class="hero-section bg-light py-5">
      <div class="container hero text-center">
        <h1 class="display-4">Mi Libro de Recetas</h1>
        <p class="lead">Descubre deliciosas recetas para cada momento del día</p>

        <router-link to="/categorias" class="btn btn-success border-0 shadow-sm btn-lg">
          Explorar Recetas
        </router-link>
      </div>
    </div>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <h2>¿En qué consiste nuestro proyecto?</h2>
          <p>Nuestro libro de recetas digital te permite explorar una variedad de platillos organizados por categorías: desayunos, almuerzos, onces y cenas. Cada receta está diseñada para ser fácil de seguir y preparar.</p>
          <p>La interfaz simula un libro real, con transiciones que imitan el voltear de páginas para una experiencia más immersiva.</p>
        </div>
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Imagen de comida" class="img-fluid rounded">
        </div>
      </div>
      <hr>
      <div class="container my-4 profile-card">
        <div class="row p-4">
          <div class="col-md-4 col-sm-12 justify-content-center align-items-center d-flex mb-3">
            <img src="https://avatars.githubusercontent.com/u/118030389?v=4" alt="" class="rounded-circle profile-img">
          </div>
          <div class="d-flex row col-md-8 col-sm-12 justify-content-center align-items-center">
            <p class="fst-italic"> <i class="fas fa-quote-left me-3"></i>¡Hola a todos! Como autora de estas recetas, quería expresar mi más sincero agradecimiento por llevar mis creaciones culinarias a sus hogares. Cada plato ha sido diseñado con amor, equilibrio nutricional y el deseo de hacer sus momentos especiales aún más deliciosos. </p>
            <br>
            <p class="fst-italic"> La cocina es mi pasión y poder compartirla con ustedes es un regalo. Si tienen preguntas o sugerencias, estaré encantada de leerlas. ¡A disfrutar de estos sabores! 🥑 <i class="fas fa-quote-right ms-3"></i></p>
            <div class="text-end fst-italic"><small class="text-muted">Nutri Carolina Hernández</small></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}
.hero-section {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5)),
    url('../../public/navbar.jpg');
  background-size: cover;
  background-position: center;}
.profile-card {
  background: linear-gradient(135deg, #fff6e6 0%, #ffe6e6 100%);
  border-radius: 20px;
  border: none;
}
.profile-img {
  width: 200px;
}
</style>