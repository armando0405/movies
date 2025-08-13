<script setup>
import { reactive /*, ref*/ } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue'
import { useMovieStore } from '../stores/Store.js';
import router from '@/router';

const movieStore = useMovieStore();

const movie = reactive({
  title: '',
  duration: '',
  director: ''
});

 const handleSubmit = () =>  {
    if(!movie.title || !movie.duration || !movie.director) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    movieStore.addMovie({
        titulo: movie.title,
        duracion: `${movie.duration} min`,
        director: movie.director
    });

    // Limpiar formulario
    movie.title = '';
    movie.duration = '';
    movie.director = '';

    router.push({ name: "movies" });
 }
</script>

<template>
    <HeaderComponent/>
    <h1>Agregar peliculas</h1>
    <form @submit.prevent="handleSubmit" class="form">
        <label for="title">Titulo</label>
        <input v-model="movie.title" type="text" id="title">

        <label for="duration">Duración</label>
        <input v-model="movie.duration" type="number" id="duration">

        <label for="director">Director</label>
        <input v-model="movie.director" type="text" id="director">

        <button>Enviar</button>
    </form>

</template>

<style>
.form {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08), 0 1.5px 4px rgba(66,185,131,0.08);
  padding: 32px 28px;
  width: 330px;
  margin: 32px auto 0 auto; /* Centrado horizontal y distancia arriba */
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form label {
  font-size: 1rem;
  color: #35495e;
  margin-bottom: 3px;
}

.form input {
  border: 1px solid #e3e3e3;
  border-radius: 7px;
  padding: 9px 12px;
  font-size: 1rem;
  color: #232323;
  outline: none;
  background: #f9f9fa;
  transition: border-color 0.18s;
}
.form input:focus {
  border-color: #42b983;
  background: #fff;
}

.form button {
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 9px 0;
  font-size: 1.07rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.18s;
}
.form button:hover {
  background: #34916f;
}

/* Centra el título y el form */
h1 {
  text-align: center;
  margin-top: 26px;
  color: #35495e;
}
</style>
