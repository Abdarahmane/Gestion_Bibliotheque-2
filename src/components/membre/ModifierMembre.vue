<template>
  <div class="modal fade show" tabindex="-1" style="display: block;" aria-labelledby="editMembreModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editMembreModalLabel">Modifier le Membre</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="id" class="form-label">Id</label>
              <input type="text" class="form-control" id="id" v-model="id" />
            </div>
            <div class="mb-3">
              <label for="nom" class="form-label">Nom</label>
              <input type="text" class="form-control" id="nom" v-model="nom" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" v-model="email" />
            </div>
            <div class="mb-3">
              <label for="telephone" class="form-label">Téléphone</label>
              <input type="text" class="form-control" id="telephone" v-model="telephone" />
            </div>
            <button type="submit" class="btn btn-primary">Enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  membre: {
    type: Object,
    default: () => ({
      id: '',
      nom: '',
      email: '',
      telephone: ''
    }),
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['onSave']);

const id = ref(props.membre.id);
const nom = ref(props.membre.nom);
const email = ref(props.membre.email);
const telephone = ref(props.membre.telephone);

watch(() => props.membre, (newMembre) => {
  id.value = newMembre.id;
  nom.value = newMembre.nom;
  email.value = newMembre.email;
  telephone.value = newMembre.telephone;
}, { immediate: true });

const onSubmit = () => {
  emit('onSave', props.index, id.value, nom.value, email.value, telephone.value);
};
</script>

<style scoped>

</style>
