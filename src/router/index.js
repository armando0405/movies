import { createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import CreateMovie from "../views/CreateMovie.vue";
import MovieDetails from "../views/MovieDetails.vue";



// Se crea una instancia del router usando la función createRouter de 'vue-router'.
// Se utiliza createWebHistory para habilitar el modo de historial HTML5.
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      // Ruta principal que muestra el componente HomeView (página de inicio).
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      // Ruta para crear una nueva película, muestra el componente CreateMovie.
      path: "/create",
      name: "create",
      component: CreateMovie
    },
    {
      // Ruta para ver los detalles de una película específica.
      // El parámetro :movieTitle permite identificar la película por su título.
      component: MovieDetails,
      path: "/movies/:movieTitle",
      name: "movieDetails"
    },
    {
      // Ruta para listar todas las películas, muestra el componente MoviesView.
      path: "/movies",
      name: "movies",
      component: MoviesView
    }
  ]
})

export default router;
