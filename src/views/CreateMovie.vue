<script setup>
// Importa 'reactive' de Vue para crear un objeto reactivo que representa el formulario de la película.
import { reactive /*, ref*/ } from 'vue';

// Importa el componente de encabezado reutilizable.
import HeaderComponent from '../components/HeaderComponent.vue'

// Importa el store de películas para acceder y modificar el estado global de películas.
import { useMovieStore } from '../stores/movies.js';

// Importa el router para navegar entre vistas después de agregar una película.
import router from '@/router';

// Inicializa el store de películas para poder usar sus funciones y datos.
const movieStore = useMovieStore();

// Crea un objeto reactivo para almacenar los datos del formulario de la nueva película.
const movie = reactive({
  title: '',
  duration: '',
  director: ''
});

// Función que maneja el envío del formulario.
// Valida que todos los campos estén completos, agrega la película al store y navega a la vista de películas.
const handleSubmit = () =>  {
    if(!movie.title || !movie.duration || !movie.director) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Agrega la nueva película al store usando la función 'addMovie'.
    movieStore.addMovie({
        titulo: movie.title,
        duracion: `${movie.duration} min`,
        director: movie.director
    });

    // Limpia los campos del formulario después de agregar la película.
    movie.title = '';
    movie.duration = '';
    movie.director = '';

    // Redirige a la vista principal de películas.
    router.push({ name: "movies" });
}
</script>

<template>
    <!-- Componente de encabezado reutilizable -->
    <HeaderComponent/>
    <h1>Agregar peliculas</h1>
    <!-- Formulario para agregar una nueva película -->
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
