<!-- AjouteLivre -->
<script setup>
import { ref, defineExpose } from 'vue';
const emit = defineEmits(['onAdd']);

const id = ref(1);
const titre = ref('');
const auteur = ref('');
const annee = ref(2024);

const onSubmit = () => {
  emit('onAdd', id.value, titre.value, auteur.value, annee.value);

  id.value = 1;
  titre.value = '';
  auteur.value = '';
  annee.value = 2024;
};
</script>

<template>
  <div class="container">
    <form class="row gx-3 gy-1 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-3">
        <label for="id">Id</label>
        <input type="number" class="form-control" id="id" v-model="id" required/>
      </div>
      <div class="col-sm-3">
        <label for="titre">Titre</label>
        <input type="text" class="form-control" id="titre" v-model="titre" required/>
      </div>
      <div class="col-sm-3">
        <label for="auteur">Auteur</label>
        <input type="text" class="form-control" id="auteur" v-model="auteur" required/>
      </div>
      <div class="col-sm-3">
        <label for="annee">Année</label>
        <input type="date" class="form-control" id="annee" v-model.number="annee" required/>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mt-4">Valider</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
