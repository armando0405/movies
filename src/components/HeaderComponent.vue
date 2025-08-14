<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="header">
        <nav>
            <ul class="nav-list">
                <li>
                    <RouterLink class="nav-link" :to="{ name: 'home' }">Home</RouterLink>
                    <!-- tambien se puede hacer de la fomra simple si no quieres que sea dinamico de esta fomra to="/" -->
                </li>
                <li>
                    <RouterLink class="nav-link" :to="{ name: 'create' }">nueva pelicula</RouterLink>
                </li>
                <li>
                    <RouterLink class="nav-link" :to="{ name: 'movies' }">peliculas</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
.header {
  background: #13172a;
  color: #fff;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.03em;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #e7e7e7;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.22rem 0.4rem;
  border-radius: 4px;
  background: none;
  transition: color 0.13s, background 0.18s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #fff;
  background: #23253a;
}

@media (max-width: 600px) {
  .nav-list {
    flex-direction: column;
    gap: 0.7rem;
    padding-bottom: 0.7rem;
  }
  .header h1 {
    font-size: 1.05rem;
    padding-top: 0.2rem;
  }
}
</style>