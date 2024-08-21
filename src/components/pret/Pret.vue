<script setup>
import { ref } from 'vue';
import ListePret from './ListePret.vue';
import AjoutePret from './AjoutePret.vue';
import ModifierPret from './ModifierPret.vue';

const prets = ref([
  { id: '001', livreId: '001', emprunteur: 'Jane Doe', datePret: '2024-01-01' },
]);

const selectedPret = ref(null);
const selectedIndex = ref(null);

const addPret = (id, livreId, emprunteur, datePret) => {
  prets.value.push({ id, livreId, emprunteur, datePret });
};

const updatePret = (index, id, livreId, emprunteur, datePret) => {
  prets.value[index] = { id, livreId, emprunteur, datePret };
  selectedPret.value = null;
};

const removePret = (index) => {
  prets.value.splice(index, 1);
};

const editPret = (index) => {
  selectedPret.value = { ...prets.value[index] };
  selectedIndex.value = index;
};

const returnPret = (index) => {
  alert(`Le livre avec l'ID ${prets.value[index].livreId} a été retourné.`);

};
</script>

<template>
  <div class="container">
    <h1 class="text-center border-bottom mb-4">Gestion de Prêts</h1>
    <AjoutePret @onAdd="addPret" class="mb-4" />
    <ListePret :prets="prets" @onRemove="removePret" @onEdit="editPret" @onReturn="returnPret" class="mt-4" />
    <ModifierPret v-if="selectedPret" :pret="selectedPret" :index="selectedIndex" @onSave="updatePret" />
  </div>
</template>
