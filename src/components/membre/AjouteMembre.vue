<script setup>
import { ref } from 'vue';
const emit = defineEmits(['onAdd']);

const id = ref('');
const nom = ref('');
const email = ref('');
const dateInscription = ref('');

const onSubmit = () => {
  emit('onAdd', id.value, nom.value, email.value, dateInscription.value);

  id.value = '';
  nom.value = '';
  email.value = '';
  dateInscription.value = '';
};
</script>

<template>
  <div class="container">
    <form class="row gx-3 gy-1 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-3">
        <label for="id">Id</label>
        <input type="text" class="form-control" id="id" v-model="id" required/>
      </div>
      <div class="col-sm-3">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom" v-model="nom" required/>
      </div>
      <div class="col-sm-3">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required/>
      </div>
      <div class="col-sm-3">
        <label for="dateInscription">Date d'inscription</label>
        <input type="date" class="form-control" id="dateInscription" v-model="dateInscription" required/>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mt-4">Valider</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>
