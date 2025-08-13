<script setup>
import { ref } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue'
const movies = ref([
    { 
        id: 1, 
        titulo: "Dune", 
        duracion: "120 min", 
        director: "Denis Villeneuve" 
    },
    { 
        id: 2, 
        titulo: "Interstellar", 
        duracion: "169 min", 
        director: "Christopher Nolan" 
    },
    { 
        id: 3, 
        titulo: "Parasite", 
        duracion: "132 min", 
        director: "Bong Joon-ho" 
    },
    { 
        id: 4, 
        titulo: "The Godfather", 
        duracion: "175 min", 
        director: "Francis Ford Coppola" 
    },
    { 
        id: 5, 
        titulo: "Pulp Fiction", 
        duracion: "154 min", 
        director: "Quentin Tarantino" 
    },
    { 
        id: 6, 
        titulo: "Spirited Away", 
        duracion: "125 min", 
        director: "Hayao Miyazaki" 
    },
    { 
        id: 7, 
        titulo: "The Shawshank Redemption", 
        duracion: "142 min", 
        director: "Frank Darabont" 
    },
]);

</script>

<template>
    <HeaderComponent />
    <h1>Movies</h1>
    <ul>
        <li v-for="movie in movies" :key="movie.id">
            <h2>{{ movie.titulo }}</h2>
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