<script setup>
import { ref, defineExpose } from 'vue';
const emit = defineEmits(['onAdd']);

const id = ref(1);
const livreId = ref('');
const emprunteur = ref('');
const datePret = ref(new Date().toISOString().slice(0, 10));

const onSubmit = () => {
  emit('onAdd', id.value, livreId.value, emprunteur.value, datePret.value);

  id.value = 1;
  livreId.value = '';
  emprunteur.value = '';
  datePret.value = new Date().toISOString().slice(0, 10);
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
        <label for="livreId">Livre ID</label>
        <input type="text" class="form-control" id="livreId" v-model="livreId" required/>
      </div>
      <div class="col-sm-3">
        <label for="emprunteur">Emprunteur</label>
        <input type="text" class="form-control" id="emprunteur" v-model="emprunteur" required/>
      </div>
      <div class="col-sm-3">
        <label for="datePret">Date de Prêt</label>
        <input type="date" class="form-control" id="datePret" v-model="datePret" required/>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mt-4">Valider</button>
      </div>
    </form>
  </div>
</template>
