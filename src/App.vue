<template>
   <div class="bg-image" style="background-image: url('https://img.freepik.com/photos-gratuite/vue-face-livres-echelles-empiles-espace-copie-pour-journee-education_23-2149241015.jpg?t=st=1724224943~exp=1724228543~hmac=009c678baf5561042d11eb17ea51d9d9a7da86f6757ab1f3cfa3adddbd65c122&w=360')">
  <div id="app">

    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CRUD Manager</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/Accueil" class="nav-link" aria-current="page">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/livre" class="nav-link">Gestion Livre</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/membre" class="nav-link">Gestion Membre</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pret" class="nav-link">Gestion Prêt</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Recherche</button>
          </form>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
