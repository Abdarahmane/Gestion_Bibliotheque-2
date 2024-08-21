<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  membre: {
    type: Object,
    default: () => ({
      id: '',
      nom: '',
      email: '',
      dateInscription: '',
    }),
  },
});

const id = ref(props.membre.id);
const nom = ref(props.membre.nom);
const email = ref(props.membre.email);
const dateInscription = ref(props.membre.dateInscription);

watch(() => props.membre, (newMembre) => {
  id.value = newMembre.id;
  nom.value = newMembre.nom;
  email.value = newMembre.email;
  dateInscription.value = newMembre.dateInscription;
}, { immediate: true });
</script>

<template>
  <div class="modal fade" id="detailMembreModal" tabindex="-1" aria-labelledby="detailMembreModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="detailMembreModalLabel">Détails du Membre</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p><strong>Id :</strong> {{ id }}</p>
          <p><strong>Nom :</strong> {{ nom }}</p>
          <p><strong>Email :</strong> {{ email }}</p>
          <p><strong>Date d'inscription :</strong> {{ dateInscription }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
