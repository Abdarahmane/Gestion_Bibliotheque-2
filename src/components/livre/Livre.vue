<script setup>
import { ref } from 'vue';
import ListeLivre from './ListeLivre.vue';
import AjouteLivre from './AjouteLivre.vue';
import ModifierLivre from './ModifierLivre.vue';
import DetailLivre from './DetailLivre.vue';

const livres = ref([
  { id: '001', titre: 'Vue.js Guide', auteur: 'John Doe', annee: 2024 },
]);

const selectedLivre = ref(null);
const selectedIndex = ref(null);

const addLivre = (id, titre, auteur, annee) => {
  livres.value.push({ id, titre, auteur, annee });
};

const updateLivre = (index, id, titre, auteur, annee) => {
  livres.value[index] = { id, titre, auteur, annee };
  selectedLivre.value = null; 
};

const removeLivre = (index) => {
  livres.value.splice(index, 1);
};

const editLivre = (index) => {
  selectedLivre.value = { ...livres.value[index] };
  selectedIndex.value = index;
};

const viewLivreDetails = (index) => {
  selectedLivre.value = livres.value[index];

  alert(
    `ID: ${selectedLivre.value.id}\n` +
    `Titre: ${selectedLivre.value.titre}\n` +
    `Auteur: ${selectedLivre.value.auteur}\n` +
    `Année: ${selectedLivre.value.annee}`
  );
  
};

</script>

<template>
  <div class="container">
    <h1 class="text-center border-bottom mb-4">Gestion de Livre</h1>
    <AjouteLivre @onAdd="addLivre" class="mb-4" />
    <ListeLivre :livres="livres" @onRemove="removeLivre" @onEdit="editLivre" @onViewDetails="viewLivreDetails" class="mt-4" />
    <ModifierLivre v-if="selectedLivre && selectedIndex !== null" 
                   :livre="selectedLivre" 
                   :index="selectedIndex" 
                   @onSave="updateLivre" />
    <DetailLivre v-if="selectedLivre" :livre="selectedLivre" />                           
  </div>
</template>
