import { createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import CreateMovie from "../views/CreateMovie.vue";
import MovieDetails from "../views/MovieDetails.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/create",
            name: "create",
            component: CreateMovie
        },
        {
            path: "/movies/:movieTitle",
            name: "movieDetails",
            component: MovieDetails
        },
        {
            path: "/movies",
            name: "movies",
            component: MoviesView
        }
    ]
})

export default router;
