<script setup>
const emit = defineEmits(['onRemove', 'onEdit', 'onViewDetails']);

const props = defineProps({
  membres: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const removeMembre = (index) => {
  emit('onRemove', index);
};

const editMembre = (index) => {
  emit('onEdit', index);
};

const viewMembreDetails = (membre) => {
  emit('onViewDetails', membre);
};
</script>

<template>
  <table class="table table-bordered table-sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Id</th>
        <th>Nom</th>
        <th>Email</th>
        <th>Date d'inscription</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(membre, index) in membres" :key="membre.id">
        <td>{{ index + 1 }}</td>
        <td>{{ membre.id }}</td>
        <td>{{ membre.nom }}</td>
        <td>{{ membre.email }}</td>
        <td>{{ membre.dateInscription }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="removeMembre(index)">Supprimer</button>
          <button class="btn btn-secondary btn-sm" @click="editMembre(index)">Modifier</button>
          <button class="btn btn-info btn-sm" @click="viewMembreDetails(membre)">Détails</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
/* Ajoute tes styles ici */
</style>
