<!-- DetailPret -->
<template>
  <div>
    <h3>Détails du Prêt</h3>
    <p><strong>ID:</strong> {{ pret.id }}</p>
    <p><strong>Livre ID:</strong> {{ pret.livreId }}</p>
    <p><strong>Membre ID:</strong> {{ pret.membreId }}</p>
    <p><strong>Date de Début:</strong> {{ pret.dateDebut }}</p>
    <p><strong>Date de Fin:</strong> {{ pret.dateFin }}</p>
    <button @click="$emit('close')">Fermer</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pret: {
    type: Object,
    required: true
  }
});
</script>
