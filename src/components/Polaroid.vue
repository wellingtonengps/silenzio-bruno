<script setup>
import { defineProps } from "vue";

// Definir as propriedades que o card aceitará
const props = defineProps({
  cardDate: {
    type: String,
    required: true,
  },
  cardTitle: {
    type: String,
    required: true,
  },
  cardBody: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  polaroidWidth: {
    type: String,
    default: "250px", // Valor padrão para a largura
  },
  polaroidHeight: {
    type: String,
    default: "300px", // Valor padrão para a altura
  },
});
</script>

<template>
  <div class="polaroid-card" :style="{ width: polaroidWidth }">
    <div class="polaroid-image" :style="{ height: polaroidHeight }">
      <img :src="imageUrl" alt="Polaroid Image" />
    </div>
    <div class="polaroid-caption">
      <h2 class="card-title">{{ cardTitle }}</h2>
      <p class="card-body">{{ cardBody }}</p>
      <span class="card-date">{{ cardDate }}</span>
    </div>
  </div>
</template>

<style scoped>
.polaroid-card {
  background-color: whitesmoke;
  border: 10px solid whitesmoke;
  padding: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
}

.polaroid-image {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.polaroid-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Preenche o div mantendo a proporção */
}

.polaroid-caption {
  text-align: center;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
}

.card-title {
  font-weight: 700;
  font-size: 16px;
  margin: 5px 0;
}

.card-body {
  font-size: 14px;
  margin: 5px 0;
  color: #181818;
}

.card-date {
  font-size: 12px;
  color: #666;
}
</style>
