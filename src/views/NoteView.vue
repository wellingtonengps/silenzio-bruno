<template>
  <div class="container">
    <div class="card-grid">
      <!-- Cards dispostos em grid -->
      <Card
        cardDate="23/09/2024"
        cardTitle="Primeira Mensagem"
        cardBody="Conteúdo do primeiro card com propriedades diferentes. Conteúdo do primeiro card com propriedades diferentes. Conteúdo do primeiro card com propriedades diferentes."
      />
      <Card
        cardDate="23/09/2024"
        cardTitle="Segunda Mensagem"
        cardBody="Conteúdo do segundo card com propriedades diferentes."
      />
      <Card
        cardDate="23/09/2024"
        cardTitle="Terceira Mensagem"
        cardBody="Conteúdo do terceiro card com propriedades diferentes."
      />

      <Card
        cardDate="23/09/2024"
        cardTitle="Terceira Mensagem"
        cardBody="Conteúdo do terceiro card com propriedades diferentes."
      />
    </div>

    <!-- Botão de logout abaixo do grid -->
    <button @click="logout" class="logout-button">Sair</button>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";

import { useAuth } from "@/stores/auth.js";
import { useRouter } from "vue-router";

const auth = useAuth();
const router = useRouter();

function logout() {
  auth.clear();
  router.push({ name: "auth" });
}
</script>

<style scoped>
/* Container que envolve o grid e o botão */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

/* Estilo do grid para dispor os cards */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

/* Estilo do botão */
.logout-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff5252;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.logout-button:hover {
  background-color: #ff2d2d;
}
</style>
