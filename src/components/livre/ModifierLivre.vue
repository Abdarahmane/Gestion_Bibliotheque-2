<!-- ModifierLivre.vue -->
<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  livre: {
    type: Object,
    default: () => ({
      id: '',
      titre: '',
      auteur: '',
      annee: 2024,
    }),required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['onSave']);

const id = ref(props.livre.id);
const titre = ref(props.livre.titre);
const auteur = ref(props.livre.auteur);
const annee = ref(props.livre.annee);

watch(() => props.livre, (newLivre) => {
  id.value = newLivre.id;
  titre.value = newLivre.titre;
  auteur.value = newLivre.auteur;
  annee.value = newLivre.annee;
}, { immediate: true });

const onSubmit = () => {
  emit('onSave', props.index, id.value, titre.value, auteur.value, annee.value);
};
</script>

<template>
  <div class="modal fade show" tabindex="-1" style="display: block;" aria-labelledby="editLivreModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editLivreModalLabel">Modifier le Livre</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="id" class="form-label">Id</label>
              <input type="text" class="form-control" id="id" v-model="id" />
            </div>
            <div class="mb-3">
              <label for="titre" class="form-label">Titre</label>
              <input type="text" class="form-control" id="titre" v-model="titre" />
            </div>
            <div class="mb-3">
              <label for="auteur" class="form-label">Auteur</label>
              <input type="text" class="form-control" id="auteur" v-model="auteur" />
            </div>
            <div class="mb-3">
              <label for="annee" class="form-label">Année</label>
              <input type="" class="form-control" id="annee" v-model="annee" />
            </div>
            <button type="submit" class="btn btn-primary">Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
