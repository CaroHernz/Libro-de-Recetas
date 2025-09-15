<template>
  <div class="container">
    <nav class="d-flex flex-wrap justify-content-center align-items-center  border-bottom py-3">
      <div class="col-12 justify-content-center d-flex text-body-secondary">
        <div class="nav-item me-5">
            <router-link class="nav-link" to="/" v-tooltip="'Inicio'">
              <i class="fas fa-home fa-2x"></i>
            </router-link>
          </div>
          <div class="nav-item me-5 dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
              <i class="fas fa-book-open fa-2x"></i>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/categorias/desayuno"><i class="fas fa-utensils me-2"></i>Desayuno</router-link></li>
              <li><router-link class="dropdown-item" to="/categorias/almuerzo"><i class="fas fa-utensils me-2"></i>Almuerzo</router-link></li>
              <li><router-link class="dropdown-item" to="/categorias/once"><i class="fas fa-utensils me-2"></i>Once</router-link></li>
              <li><router-link class="dropdown-item" to="/categorias/cena"><i class="fas fa-utensils me-2"></i>Cena</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/categorias"><i class="fas fa-list-alt me-2"></i>Todas las Categorías</router-link></li>
            </ul>
          </div>
          <div class="nav-item">
            <router-link class="nav-link" to="/autor/" v-tooltip="'Autores'">
              <i class="fas fa-user fa-2x"></i>
            </router-link>
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  mounted(){
    this.$nextTick(()=> {
      if(typeof window.bootstrap !== 'undefined') {
        const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
        dropdownElementList.map(function (dropdownToggleEl) {
          return new window.bootstrap.Dropdown(dropdownToggleEl)
        })
       }
    })
  }
}
</script>
<style scoped>
.nav-link {
  transition: all 0.3s ease;
}
.nav-link:hover{
  color: #ffc107 !important;
  transform: translateY(-2px);
}
.dropdown-menu {
  border: none;
  margin-top: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
}
.dropdown-item {
  color: #565656 ;
  transition: all 0.2s ease;
}
.dropdown-item:hover {
  background-color: #ffc107;
  color: white;
  transform: scale(1.02);
}
.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: #ffc107 !important; 
  font-weight: 600;
  position: relative;
}
.dropdown-item.router-link-active,
.dropdown-item.router-link-exact-active {
  background-color: #ffc107 !important;
  color: white !important;
  font-weight: 600;
}
@media (max-width: 576px) {
  .nav-link i {
    font-size: 1.5rem;
  }
}
</style>