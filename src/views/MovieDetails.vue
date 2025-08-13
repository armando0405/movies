<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import { useMovieStore } from '../stores/movies.js';
import { useRoute } from 'vue-router';

const movieStore = useMovieStore();
const route = useRoute();

const movie = movieStore.getMovieByTitle(route.params.title);
</script>
<template>
  <HeaderComponent />
  <h1 v-if="!movie">Película no encontrada</h1>
  <div v-else class="movie-details">
    <h1>{{ movie.titulo }}</h1>
    <p>Duración: {{ movie.duracion }}</p>
    <p>Director: {{ movie.director }}</p>
  </div>
</template>




<style scoped>
.movie-details {
}
</style>
