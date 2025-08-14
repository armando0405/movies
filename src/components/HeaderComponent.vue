<script setup>
// Este componente muestra el encabezado principal de la aplicación.
// Puede incluir navegación, logo, o título según se requiera.
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';
const userStore = useUserStore();

onMounted(() => {
  userStore.getUser();
});
</script>

<template>
  <!-- Encabezado principal de la aplicación -->
  <header class="header">
    <h1>Gestor de Películas</h1>
    <!-- Aquí se pueden agregar enlaces de navegación si se desea -->
    <div class="login-bar">
      <template v-if="userStore.user">
        <p>Bienvenido, {{ userStore.user.name }}</p>
      </template>
      <template v-else>
        <button @click="userStore.getUser">Iniciar sesión</button>
      </template>
    </div>
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

<style scoped>
.header {
    background: #13172a; /* azul navy oscuro */
    padding: 1.2rem 0; /* aumentado el padding vertical */
    border-radius: 0 0 6px 6px;
    box-shadow: none;
}

.login-bar {
  width: 100%;
  position: absolute;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 10;
}

.login-bar p {
  margin: 0;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 400;
  padding-right: 12px;
}

.login-bar button {
  background: #1e3a8a; /* azul marino */
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.login-bar button:hover {
  background: #1e40af; /* azul marino más claro en hover */
}

.login-bar button:active {
  background: #1d4ed8;
  transform: translateY(1px);
}

.username:hover {
  color: #fff;
  background: #2a2d42;
  border-color: rgba(255, 255, 255, 0.2);
}


.header h1 {
  margin: 0 0 0.2rem 0;
  font-size: 1.3rem;
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
