<script setup>
import { ref } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue'

const movie = ref({
  title: '',
  duration: '',
  director: ''
});

 const handleSubmit = () =>  {

 }
</script>

<template>
    <HeaderComponent/>
    <h1>Agregar peliculas</h1>
    <form @submit.prevent="handleSubmit" class="form">
        <label for="title">Title</label>
        <input v-model="movie.title" type="text" id="title">

        <label for="duration">Duration</label>
        <input v-model="movie.duration" type="number" id="duration">

        <label for="director">Director</label>
        <input v-model="movie.director" type="text" id="director">

        <button>Enviar</button>
    </form>

</template>

<style></style>