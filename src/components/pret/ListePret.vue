<script setup>
import { computed } from 'vue';

const emit = defineEmits(['onRemove', 'onEdit', 'onReturn']);

const props = defineProps({
  prets: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const removePret = (index) => {
  emit('onRemove', index);
};

const editPret = (index) => {
  emit('onEdit', index);
};

const returnPret = (index) => {
  emit('onReturn', index);
};
</script>

<template>
  <div>
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Livre ID</th>
          <th>Emprunteur</th>
          <th>Date de Prêt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pret, index) in props.prets" :key="pret.id">
          <td>{{ index + 1 }}</td>
          <td>{{ pret.id }}</td>
          <td>{{ pret.livreId }}</td>
          <td>{{ pret.emprunteur }}</td>
          <td>{{ pret.datePret }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removePret(index)">Supprimer</button>
            <button class="btn btn-secondary btn-sm" @click="editPret(index)">Modifier</button>
            <button class="btn btn-success btn-sm" @click="returnPret(index)">Retour</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
