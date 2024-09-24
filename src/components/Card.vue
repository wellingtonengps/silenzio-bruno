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
  cardSize: {
    type: String,
    default: '300px', // Tamanho padrão se não for especificado
  },
});
</script>

<template>
  <div class="card" :style="{ maxWidth: cardSize, width: cardSize }">
    <div class="card-header">
      <h2 class="card-title">{{ cardTitle }}</h2>
      <span class="card-date">{{ cardDate }}</span>
    </div>
    <div class="card-body">
      <p>{{ cardBody }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;   /* Previne que o card encolha em flex containers */
  height: auto;     /* Permite que a altura se ajuste ao conteúdo */
  overflow: hidden; /* Opcional: oculta conteúdo extra caso exceda */
  background-color: whitesmoke;
}

.card-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.card-date {
  font-size: 14px;
  color: #666;
}

.card-title {
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}

.card-body {
  margin-top: 12px;
  font-family: 'Courier New', Courier, monospace;
}
</style>
