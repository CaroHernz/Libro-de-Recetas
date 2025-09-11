<template>
    <header class="profile-header text-center">
        <div class="container">
            <h1 class="display-5 fw-bold">Nuestros Autores</h1>
            <p class="lead">Conoce a los chefs y nutricionistas detrás de nuestras deliciosas recetas</p>
        </div>
    </header>

    <div class="row px-5">
            <!-- Columna izquierda: Información del autor -->
            <div class="col-lg-4">
                <div class="author-card p-4 text-center mb-4">
                    <img src="https://avatars.githubusercontent.com/u/118030389?v=4" alt="Carolina Hernández" class="rounded-circle profile-img mb-3">
                    <h3 class="mb-1">Carolina Hernández</h3>
                    <p class="text-muted mb-2">Nutricionista</p>
                    
                    <div class="d-flex justify-content-center mb-3">
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="social-icon"><i class="fas fa-envelope"></i></a>
                    </div>
                    
                    <p class="mb-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i> Rancagua, Chile</p>
                </div>
                
                <div class="stats-box">
                    <div class="row text-center">
                        <div class="col-4">
                            <div class="stats-number">24</div>
                            <div class="stats-label">Recetas</div>
                        </div>
                        <div class="col-4">
                            <div class="stats-number">10</div>
                            <div class="stats-label">Años Exp.</div>
                        </div>
                        <div class="col-4">
                            <div class="stats-number">4.9</div>
                            <div class="stats-label">Valoración</div>
                        </div>
                    </div>
                </div>
                
                <div class="author-card p-4 mb-4">
                    <h5 class="section-title">Especialidades</h5>
                    <div>
                        <span class="specialty-badge"><i class="fas fa-utensils fa-lg me-1"></i> Cocina Saludable</span>
                        <span class="specialty-badge"><i class="fas fa-seedling me-1 fa-lg"></i> Vegetariana</span>
                        <span class="specialty-badge"><i class="fas fa-bread-slice me-1 fa-lg"></i> Repostería</span>
                        <span class="specialty-badge"><i class="fas fa-fish me-1 fa-lg"></i> Pescados</span>
                    </div>
                </div>
                
                <div class="author-card p-4">
                    <h5 class="section-title">Formación</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <i class="fas fa-graduation-cap text-primary me-2"></i>
                            <span>Licenciatura en Nutrición - Universidad de Chile</span>
                        </li>
                        <li class="mb-2">
                            <i class="fas fa-award text-primary me-2"></i>
                            <span>Diplomado en Gastronomía - Instituto Culinary</span>
                        </li>
                        <li>
                            <i class="fas fa-certificate text-primary me-2"></i>
                            <span>Especialización en Cocina Plant-Based</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Columna derecha: Biografía y recetas -->
            <div class="col-lg-8">
                <div class="author-card p-4 mb-4">
                    <h5 class="section-title">Biografía</h5>
                    <p>¡Hola a todos! Como autora de estas recetas, quería expresar mi más sincero agradecimiento por llevar mis creaciones culinarias a sus hogares.</p>
                    
                    <p>Cada plato ha sido diseñado con amor, equilibrio nutricional y el deseo de hacer sus momentos especiales aún más deliciosos. La cocina es mi pasión y poder compartirla con ustedes es un regalo.</p>
                    
                    <p>Mi enfoque culinario combina técnicas tradicionales con ingredientes modernos, siempre buscando el equilibrio perfecto entre sabor y nutrición. Creo firmemente que comer saludable no tiene que ser aburrido ni restrictivo.</p>
                                        
                    <div class="text-end mt-4">
                        <span class="signature">Carolina Hernández</span>
                        <div><small class="text-muted">Nutricionista especializada en gastronomía</small></div>
                    </div>
                </div>
                
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h5 class="section-title mb-0">Recetas Destacadas</h5>
                    <a href="#" class="text-decoration-none text-primary">Ver todas <i class="fas fa-arrow-right ms-1"></i></a>
                </div>
                
                <div class="row">
                    <!-- Receta 1 -->
                    <div class="col-md-6 mb-4">
                        <div class="recipe-card">
                            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Receta" class="recipe-img">
                            <div class="p-3">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge-custom">Desayuno</span>
                                    <small class="text-muted"><i class="fas fa-clock me-1"></i> 20 min</small>
                                </div>
                                <h6 class="mb-1">Avocado Toast con Huevo Poach</h6>
                                <div class="d-flex justify-content-between mt-3">
                                    <small><i class="fas fa-star text-warning me-1"></i> 4.9 (128)</small>
                                    <small><i class="fas fa-heart text-danger me-1"></i> 245</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Receta 2 -->
                    <div class="col-md-6 mb-4">
                        <div class="recipe-card">
                            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Receta" class="recipe-img">
                            <div class="p-3">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge-custom">Plato Principal</span>
                                    <small class="text-muted"><i class="fas fa-clock me-1"></i> 35 min</small>
                                </div>
                                <h6 class="mb-1">Pasta Integral con Vegetales</h6>
                                <div class="d-flex justify-content-between mt-3">
                                    <small><i class="fas fa-star text-warning me-1"></i> 4.8 (96)</small>
                                    <small><i class="fas fa-heart text-danger me-1"></i> 187</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Receta 3 -->
                    <div class="col-md-6 mb-4">
                        <div class="recipe-card">
                            <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Receta" class="recipe-img">
                            <div class="p-3">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge-custom">Postre</span>
                                    <small class="text-muted"><i class="fas fa-clock me-1"></i> 50 min</small>
                                </div>
                                <h6 class="mb-1">Cheesecake de Frutos Rojos</h6>
                                <div class="d-flex justify-content-between mt-3">
                                    <small><i class="fas fa-star text-warning me-1"></i> 5.0 (204)</small>
                                    <small><i class="fas fa-heart text-danger me-1"></i> 312</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Receta 4 -->
                    <div class="col-md-6 mb-4">
                        <div class="recipe-card">
                            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Receta" class="recipe-img">
                            <div class="p-3">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge-custom">Aperitivo</span>
                                    <small class="text-muted"><i class="fas fa-clock me-1"></i> 25 min</small>
                                </div>
                                <h6 class="mb-1">Bruschetta de Tomate y Albahaca</h6>
                                <div class="d-flex justify-content-between mt-3">
                                    <small><i class="fas fa-star text-warning me-1"></i> 4.7 (87)</small>
                                    <small><i class="fas fa-heart text-danger me-1"></i> 156</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>x
</template>
<style scoped>
.profile-header {
    background: linear-gradient(135deg, #fff6e6 0%, #ffe6e6 100%);
    padding: 2rem 0;
    border-radius: 0 0 20px 20px;
    margin-bottom: 2rem;
    }
.profile-card {
  border-radius: 20px;
  border: none;
}
.profile-img {
  width: 200px;
}
.author-card {
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            margin-bottom: 2rem;
            transition: transform 0.3s ease;
        }
        
        .author-card:hover {
            transform: translateY(-5px);
        }
        
        .profile-img {
            width: 180px;
            height: 180px;
            object-fit: cover;
            border: 5px solid white;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .stats-box {
            background: var(--light-bg);
            border-radius: 15px;
            padding: 1.5rem;
            text-align: center;
            margin-bottom: 1.5rem;
        }
        
        .stats-number {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 0.2rem;
        }
        
        .stats-label {
            font-size: 0.9rem;
            color: var(--text-color);
        }
        
        .recipe-card {
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            height: 100%;
        }
        
        .recipe-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .recipe-img {
            height: 180px;
            object-fit: cover;
            width: 100%;
        }
        
        .badge-custom {
            background: var(--secondary-color);
            color: var(--primary-color);
            font-weight: 600;
            padding: 0.5rem 1rem;
            border-radius: 50px;
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--secondary-color);
            color: var(--primary-color);
            border-radius: 50%;
            margin: 0 0.3rem;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        
        .social-icon:hover {
            background: var(--primary-color);
            color: white;
            transform: translateY(-3px);
        }
        
        .quote-icon {
            color: var(--primary-color);
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .section-title {
            position: relative;
            padding-bottom: 0.5rem;
            margin-bottom: 1.5rem;
            color: var(--primary-color);
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 3px;
            background: var(--accent-color);
            border-radius: 3px;
        }
        
        .btn-primary-custom {
            background: var(--primary-color);
            border: none;
            padding: 0.6rem 1.5rem;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .btn-primary-custom:hover {
            background: var(--accent-color);
            transform: translateY(-2px);
        }
        
        .specialty-badge {
            display: inline-block;
            background: var(--light-bg);
            color: var(--text-color);
            padding: 0.4rem 1rem;
            border-radius: 50px;
            margin: 0.3rem;
            font-size: 0.9rem;
        }
</style>