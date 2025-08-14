<script setup>
// Importa el componente de encabezado reutilizable.
import { onMounted, onUnmounted } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue'
// Importa el store de películas para acceder al listado de películas.
import { useMovieStore } from '../stores/movies.js';
// Inicializa el store de películas para poder acceder a los datos reactivos.
const movieStore = useMovieStore();

/*
estas funciones de unmounted u unonmountes son utilizadas
 para ejecutar código en momentos específicos del ciclo de vida del
 componente.
 onMounted cuando apenas se genera el se utiliza de une
 y onUnmounted se utiliza cuando el componente es destruido.
*/
onMounted(()=>{
  console.log("creacion de un onmounted");
})

onUnmounted(()=>{
  console.log("destruccion de un onmounted");
})
</script>

<template>
    <!-- Componente de encabezado reutilizable -->
    <HeaderComponent />
    <h1>Movies</h1>
    <!-- Lista todas las películas almacenadas en el store -->
    <ul>
        <li v-for="movie in movieStore.movies" :key="movie.titulo">
            <h2>
                <router-link :to="{ name: 'movieDetails', params: { movieTitle: movie.titulo } }">
                  {{ movie.titulo }}
                </router-link>
            </h2>
            <p>Duración: {{ movie.duracion }}</p>
            <p>Director: {{ movie.director }}</p>
        </li>
    </ul>

    <h2>Agregar Nueva Película</h2>
</template>

<style scoped>
/* estilos para ver la lista de peliculas tipo card */
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

li {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08), 0 1.5px 4px rgba(66,185,131,0.08);
  padding: 24px 18px;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.2s;
}

li:hover {
  box-shadow: 0 6px 24px rgba(66,185,131,0.18), 0 2px 8px rgba(0,0,0,0.09);
}

li h2 {
  margin: 0 0 8px 0;
  font-size: 1.35rem;
  color: #42b983;
}

li p {
  margin: 0 0 6px 0;
  color: #333;
  font-size: 1rem;
}

h1 {
  margin-bottom: 18px;
  color: #35495e;
}

</style>
