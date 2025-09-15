<h2 align=center > Módulo 6</h2>
<h1 align=center > Libro de Recetas </h1>

<h4 align=center>M6AE5ABP5 | Actividad Práctica 5: Manejo de rutas en Vue </h4>

#### Aprendizaje esperado:
Implementar la navegación de una interfaz web utilizando Vue Router para dar solución a un requerimiento.

### Actividad
Estás trabajando en el desarrollo de una plataforma web de recetas. El objetivo es permitir a los usuarios navegar entre diferentes secciones de forma fluida, sin recargar la página, y acceder a recetas específicas a través de URLs dinámicas.

La interfaz debe contar con una navegación principal que incluya:
- Una página de Inicio
- Una sección de Categorías
- Una vista para recetas individuales según su ID
- Una ruta adicional para mostrar el perfil de un autor, también dinámicamente

### 🛠️ Requerimientos:
- Configura Vue Router en una aplicación creada con Vue CLI.
- Define al menos 5 rutas:
    - / → Componente Inicio.vue
    - /categorias → Componente Categorias.vue
    - /receta/:id → Componente DetalleReceta.vue (ruta dinámica con parámetro)
    - /autor/:nombre → Componente PerfilAutor.vue (ruta dinámica que recibe nombre como prop)
    - /inicio → Redirecciona a / (redirección con alias)
- Implementa navegación con <router-link> en un componente Navbar.vue.
- Crea rutas anidadas en /categorias, donde cada subcategoría (Ej: /categorias/postres, /categorias/bebidas) tenga su propio componente con recetas filtradas.
- Usa props en la ruta dinámica de receta para mostrar los datos de la receta según el id pasado por la URL.
- Agrega una animación simple (usando <transition>) para cambiar suavemente entre rutas.

## 🚀 Características Técnicas

### Tecnologías Utilizadas
- **Vue 3** - Framework principal con Composition API
- **Bootstrap 5** - Framework CSS para estilos responsivos

### Estructura del Proyecto

````
src/
├── components/
│   ├── DetalleReceta.vue   # Componente para las recetas
│   ├── Navbar.vue
│   ├── Footer.vue
│   └── RecipeCard.vue      # Componente para las cards
├── data/
│   ├── autores.js
│   └── recetas.js
├── router/
│   └── index.js
├── views/
│   ├── categorias/
│   │   ├── Almuerzo.vue    # Recetas de almuerzos
│   │   ├── Desayuno.vue    # Recetas de desayunos
│   │   ├── Once.vue        # Recetas de onces
│   │   └── Cena.vue        # Recetas de cenas
│   ├── Home.vue
│   ├── Categorias.vue
│   └── PerfilAutor.vue
├── App.vue
├── main.js
└── style.css

````

### 🛠️ Instalación y Uso
- Prerrequisitos
  * Node.js (versión 16 o superior)
  * npm o yarn

- Instalación
```
# Clonar el repositorio
git clone https://github.com/CaroHernz/Libro-de-Recetas

# Navegar al directorio
cd Libro-de-Recetas

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

----

#### Creado por:
<p align="center"> 
  <a href="https://github.com/CaroHernz">Carolina Hernández</a>
</p>
<div align="center"> ¡Si te gusta este proyecto, no olvides darle una ⭐! </div>
