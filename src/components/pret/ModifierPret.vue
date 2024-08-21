<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  pret: {
    type: Object,
    default: () => ({
      id: '',
      livreId: '',
      emprunteur: '',
      datePret: new Date().toISOString().slice(0, 10),
    }),
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['onSave']);

const id = ref(props.pret.id);
const livreId = ref(props.pret.livreId);
const emprunteur = ref(props.pret.emprunteur);
const datePret = ref(props.pret.datePret);

watch(() => props.pret, (newPret) => {
  id.value = newPret.id;
  livreId.value = newPret.livreId;
  emprunteur.value = newPret.emprunteur;
  datePret.value = newPret.datePret;
}, { immediate: true });

const onSubmit = () => {
  emit('onSave', props.index, id.value, livreId.value, emprunteur.value, datePret.value);
};
</script>

<template>
  <div class="modal fade show" tabindex="-1" style="display: block;" aria-labelledby="editPretModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editPretModalLabel">Modifier le Prêt</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="id" class="form-label">Id</label>
              <input type="text" class="form-control" id="id" v-model="id" />
            </div>
            <div class="mb-3">
              <label for="livreId" class="form-label">Livre ID</label>
              <input type="text" class="form-control" id="livreId" v-model="livreId" />
            </div>
            <div class="mb-3">
              <label for="emprunteur" class="form-label">Emprunteur</label>
              <input type="text" class="form-control" id="emprunteur" v-model="emprunteur" />
            </div>
            <div class="mb-3">
              <label for="datePret" class="form-label">Date de Prêt</label>
              <input type="date" class="form-control" id="datePret" v-model="datePret" />
            </div>
            <button type="submit" class="btn btn-primary">Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
