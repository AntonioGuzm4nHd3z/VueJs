<template>
  <div id="app">
    <div class="sidebar" :class="{ 'open': isMenuOpen }">
      <!-- Menú lateral con opciones de navegación -->
      <ul>
        <li @click="navigateTo('Inicio')">Inicio</li>
        <li @click="navigateTo('Configuracion')">Configuración</li>
        <li @click="navigateTo('AcercaDe')">Acerca de</li>
      </ul>
    </div>
    
    <div class="content">
      <!-- Contenido de las diferentes pantallas -->
      <router-view></router-view>
    </div>
    
    <!-- Botón o ícono para abrir/cerrar el menú lateral -->
    <div class="menu-button" @click="toggleMenu">
      <!-- Puedes usar un ícono aquí, por ejemplo, un icono de hamburguesa -->
      ☰
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navigateTo(route) {
      this.$router.push({ name: route });
      this.isMenuOpen = false; // Cierra el menú después de hacer clic en una opción
    }
  }
};
</script>

<style>
/* Estilos CSS para el menú lateral y animaciones */
.sidebar {
  width: 0;
  overflow: hidden;
  transition: 0.3s;
  background-color: #333;
  color: white;
}

.sidebar.open {
  width: 250px; /* Ancho del menú cuando está abierto */
}

.menu-button {
  cursor: pointer;
  /* Estilos para el botón de abrir/cerrar el menú */
}

/* Puedes agregar estilos adicionales según tus preferencias */
</style>
