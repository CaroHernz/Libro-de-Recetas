<template>
    <div>
        <header class="profile-header text-center">
            <div class="container">
                <h1 class="display-5 fw-bold">Nuestros Autores</h1>
                <p class="lead">Conoce a los chefs y nutricionistas detrás de nuestras deliciosas recetas</p>
            </div>
        </header>
        <div class="container py-3" v-if="!$route.params.name">
            <div class="row">
                <div v-for="autor in autores" :key="autor.id" class="col-md-6 col-lg-4 mb-4">
                    <div class="author-card pt-4 text-center h-100 shadow">
                        <router-link :to="'/autor/' + slugify(autor.nombre)" class="text-decoration-none">
                            <img :src="autor.imagen" :alt="autor.nombre" class="rounded-circle profile-img mb-3">
                            <h3 class="mb-1 text-danger">{{ autor.nombre }}</h3>
                            <p class="text-muted mb-2">{{ autor.profesion }}</p>
                            <span class="btn btn-outline-secondary border">Ver perfil</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="container py-3" v-if="autor">
                <div class="row">
                    <!-- Columna izquierda: Información del autor -->
                    <div class="col-lg-4">
                        <div class="author-card shadow p-4 text-center mb-4">
                            <img :src="autor.imagen" :alt="autor.nombre" class="rounded-circle profile-img mb-3">
                            <h3 class="mb-1">{{ autor.nombre }}</h3>
                            <p class="text-muted mb-2">{{ autor.profesion }}</p>

                            <div class="d-flex justify-content-center mb-3">
                                <a v-for="(red, index) in autor.redesSociales" :key="index" :href="red.url"
                                    class="social-icon">
                                    <i :class="red.icono"></i>
                                </a>
                            </div>

                            <p class="mb-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i> {{ autor.ubicacion
                                }}</p>
                        </div>

                        <div class="stats-box">
                            <div class="row text-center">
                                <div class="col-4">
                                    <div class="stats-number">{{ autor.recetas }}</div>
                                    <div class="stats-label">Recetas</div>
                                </div>
                                <div class="col-4">
                                    <div class="stats-number">{{ autor.experiencia }}</div>
                                    <div class="stats-label">Años Exp.</div>
                                </div>
                                <div class="col-4">
                                    <div class="stats-number">{{ autor.valoracion }}</div>
                                    <div class="stats-label">Valoración</div>
                                </div>
                            </div>
                        </div>

                        <div class="author-card p-4 mb-4 shadow">
                            <h5 class="section-title">Especialidades</h5>
                            <div>
                                <span v-for="(especialidad, index) in autor.especialidades" :key="index"
                                    class="specialty-badge">
                                    <i :class="especialidad.icono + ' fa-lg me-2'"></i> {{ especialidad.nombre }}
                                </span>
                            </div>
                        </div>

                        <div class="author-card p-4 shadow">
                            <h5 class="section-title">Formación</h5>
                            <ul class="list-unstyled">
                                <li v-for="(formacion, index) in autor.formacion" :key="index" class="mb-2">
                                    <i :class="formacion.icono + ' text-success me-2'"></i>
                                    <span> {{ formacion.titulo }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Columna derecha: Biografía y recetas -->
                    <div class="col-lg-8">
                        <div class="author-card shadow p-4 mb-4">
                            <h5 class="section-title">Biografía</h5>
                            <p v-for="(parrafo, index) in autor.biografia" :key="index">{{ parrafo }}</p>
                            <div class="text-end mt-4">
                                <span class="signature">{{ autor.nombre }}</span>
                                <div><small class="text-muted">{{ autor.profesionEspecializada }}</small></div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="section-title mb-0">Recetas Destacadas</h5>
                            <router-link :to="`/recetas/autor/${slugify(autor.nombre)}`"
                                class="text-decoration-none text-success">Ver todas <i
                                    class="fas fa-arrow-right ms-1"></i></router-link>
                        </div>

                        <div class="row">
                            <!-- Recetas destacadas -->
                            <div v-for="receta in autor.recetasDestacadas" :key="receta.id" class="col-md-6 mb-4">
                                <div class="recipe-card">
                                    <img :src="receta.imagen" :alt="receta.titulo" class="recipe-img">
                                    <div class="p-3">
                                        <div class="d-flex justify-content-between align-items-center mb-2">
                                            <span class="badge-custom">{{ receta.categoria }}</span>
                                            <small class="text-muted"><i class="fas fa-clock me-1"></i> {{ receta.tiempo
                                                }}</small>
                                        </div>
                                        <h6 class="mb-1">{{ receta.titulo }}</h6>
                                        <div class="d-flex justify-content-between mt-3">
                                            <small><i class="fas fa-star text-warning me-1"></i> {{ receta.valoracion }}
                                                ({{ receta.resenas }})</small>
                                            <small><i class="fas fa-heart text-danger me-1"></i> {{ receta.likes
                                                }}</small>
                                        </div>
                                        <div class="text-center mt-3">
                                            <router-link
                                                :to="`/categorias/${receta.categoria.toLowerCase()}/receta/${receta.id}`"
                                                class="btn btn-sm btn-secondary">Ver receta</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { autores } from '../data/autores'
export default {
    name: 'PerfilAutor',
    data() {
        return {
            autor: null,
            autorSeleccionado: null,
            autores: autores
        }
    },
    mounted() {
        if (this.$route.params.name) {
            this.cargarAutorNombre(this.$route.params.name);
            const autorEncontrado = this.autores.find(a => this.slugify(a.nombre) === this.$route.params.name);
            if (autorEncontrado) {
                this.autorSeleccionado = autorEncontrado
            }
        }
    },
    methods: {
        cargarAutorNombre(nombreSlug) {
            const autorEncontrado = this.autores.find(a => this.slugify(a.nombre) === nombreSlug);
            if (autorEncontrado) {
                this.autor = autorEncontrado;
            } else {
                this.$router.push('/autor')
            }
        },
        cambiarAutor() {
            if (this.autorSeleccionado) {
                this.$router.push({
                    path: '/autor/' + this.slugify(this.autorSeleccionado.nombre)
                });
            }
        },
        slugify(text) {
            return text
                .toString()
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
                .replace(/\s+/g, '-')           // Reemplazar espacios con -
                .replace(/[^\w\-]+/g, '')       // Eliminar caracteres no alfanuméricos
                .replace(/\-\-+/g, '-')         // Reemplazar múltiples - con uno solo
                .replace(/^-+/, '')             // Eliminar - del inicio
                .replace(/-+$/, '');            // Eliminar - del final
        }
    },
    watch: {
        '$route.params.name'(newName) {
            if (newName) {
                this.cargarAutorNombre(newName)
            } else {
                this.autor = null
            }
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