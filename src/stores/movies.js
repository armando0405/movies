import { defineStore } from "pinia";
import { ref } from 'vue';

export const useMovieStore = defineStore("movie", () => {
  
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

  const addMovie = (movie) => {movies.value.push(movie);};

  return { movies, addMovie };
});