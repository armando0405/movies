// Importa 'defineStore' de Pinia para crear un store reactivo.
// Pinia es la librería de gestión de estado recomendada para Vue 3.
import { defineStore } from "pinia";

// Importa 'ref' de Vue para crear variables reactivas.
// 'ref' permite que los cambios en los datos se reflejen automáticamente en la interfaz.
import { ref } from 'vue';

// Define el store llamado "movie" usando Pinia.
// Este store gestiona el estado relacionado con las películas.
export const useMovieStore = defineStore("movie", () => {

    // 'movies' es una variable reactiva que almacena el listado de películas.
    // Cada película es un objeto con título, duración y director.
    const movies = ref([
        {
            titulo: "Dune",
            duracion: "120 min",
            director: "Denis Villeneuve"
        },
        {
            titulo: "Interstellar",
            duracion: "169 min",
            director: "Christopher Nolan"
        },
        {
            titulo: "Parasite",
            duracion: "132 min",
            director: "Bong Joon-ho"
        },
        {
            titulo: "The Godfather",
            duracion: "175 min",
            director: "Francis Ford Coppola"
        },
        {
            titulo: "Pulp Fiction",
            duracion: "154 min",
            director: "Quentin Tarantino"
        },
        {
            titulo: "Spirited Away",
            duracion: "125 min",
            director: "Hayao Miyazaki"
        },
        {
            titulo: "The Shawshank Redemption",
            duracion: "142 min",
            director: "Frank Darabont"
        },
    ]);

    // Función para agregar una nueva película al array 'movies'.
    // Recibe un objeto 'movie' y lo añade al listado.
    const addMovie = (movie) => {
        movies.value.push(movie);
    };

    // Función para buscar una película por su título.
    // Recibe el título como parámetro y retorna la película encontrada o 'undefined' si no existe.
    const getMovieByTitle = (movieTitle) => {
        return movies.value.find(movie => movie.titulo === movieTitle);
    };

    // Retorna las propiedades y funciones del store para que puedan ser usadas en los componentes.
    return { movies, addMovie, getMovieByTitle };
});
