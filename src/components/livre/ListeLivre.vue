<!-- ListeLivre -->
<script setup>
import { computed } from 'vue';


const emit = defineEmits(['onRemove', 'onEdit', 'onViewDetails']);

const props = defineProps({
  livres: {
    type: Array,
    required: true,
    default: () => [],
  },
});

// événement pour supprimer un livre
const removeLivre = (index) => {
  emit('onRemove', index);
};

// événement pour modifier un livre
const editLivre = (index) => {
  emit('onEdit', index);
};
const viewDetails = (index) => {
  emit('onViewDetails', index); // Émettre l'événement 'onViewDetails'
};
</script>

<template>
  <div>
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Année</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(livre, index) in props.livres" :key="livre.id">
          <td>{{ index + 1 }}</td>
          <td>{{ livre.id }}</td>
          <td>{{ livre.titre }}</td>
          <td>{{ livre.auteur }}</td>
          <td>{{ livre.annee }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeLivre(index)">Supprimer <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
            <button class="btn btn-secondary btn-sm" @click="editLivre(index)">Modifier</button>
             <button class="btn btn-info btn-sm" @click="viewDetails(index)">Détail</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>
