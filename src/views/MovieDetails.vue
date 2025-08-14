<script setup>
import { ref, watch, computed } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue'
import { useMovieStore } from '../stores/movies.js';
import { useRoute } from 'vue-router';

const movieStore = useMovieStore();
const route = useRoute();

// Usa ref para hacer reactiva la variable movieTitle
const movieTitle = ref(route.params.movieTitle);

// Usa computed para que movie se actualice automáticamente cuando movieTitle cambie
const movie = computed(() => movieStore.getMovieByTitle(movieTitle.value));

// El watch actualiza la variable reactiva movieTitle
watch(
  () => route.params.movieTitle,
  (newMovieTitle) => {
    movieTitle.value = newMovieTitle;
  }
);
</script>

<template>
  <HeaderComponent />
  <div class="movie-details-container">
    <div v-if="movie">
      <h1 class="movie-title">{{ movie.titulo }}</h1>
      <div class="movie-info">
        <p><strong>Duración:</strong> {{ movie.duracion }}</p>
        <p><strong>Director:</strong> {{ movie.director }}</p>
        <h2>
          <router-link :to="{ name: 'movieDetails', params: { movieTitle: 'Interstellar' } }">
            Interstellar
          </router-link>
        </h2>
      </div>
    </div>
    <div v-else>
      <h1 class="movie-title">Película no encontrada</h1>
    </div>
    <router-link class="back-link" :to="{ name: 'movies' }">← Volver</router-link>
  </div>
</template>

<style scoped>
.movie-details-container {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08), 0 1.5px 4px rgba(66,185,131,0.08);
  max-width: 400px;
  margin: 48px auto;
  padding: 36px 28px;
  text-align: center;
}

.movie-title {
  color: #42b983;
  font-size: 2rem;
  margin-bottom: 18px;
  font-weight: 600;
}

.movie-info p {
  color: #35495e;
  font-size: 1.13rem;
  margin: 10px 0;
}

.back-link {
  display: inline-block;
  margin-top: 28px;
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.18s;
}
.back-link:hover {
  color: #34916f;
  text-decoration: underline;
}
</style>
