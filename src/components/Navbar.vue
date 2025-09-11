<template>
  <nav class="navbar navbar-expand custom-navbar">
    <div class="container-fluid justify-content-center align-items-center">
      <div class="navbar-nav">
          <div class="nav-item">
            <router-link class="nav-link" to="/" v-tooltip="'Inicio'">
              <i class="fas fa-home fa-lg me-3"></i>
            </router-link>
          </div>
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
              <i class="fas fa-book-open fa-lg me-3"></i>
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
            <router-link class="nav-link" to="/autor/:nombre" v-tooltip="'Autores'">
              <i class="fas fa-user fa-lg"></i>
            </router-link>
          </div>
      </div>
    </div> 
  </nav>
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
.custom-navbar {
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  background-color: #ff6b6b;
  padding: 0.5rem 1rem;
}
.nav-link {
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}
.navbar-nav {
    gap: 1rem;
}
.nav-link:hover {
  color: white !important;
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
  background-color: #ff9797;
  color: white;
  transform: scale(1.02);
}
.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: #ffffff !important; 
  font-weight: 600;
  position: relative;
}
.dropdown-item.router-link-active,
.dropdown-item.router-link-exact-active {
  background-color: #ff9797 !important;
  color: white !important;
  font-weight: 600;
}
@media (max-width: 576px) {
  .navbar-brand {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
  .nav-link i {
    font-size: 1.1rem;
  }
}
</style>