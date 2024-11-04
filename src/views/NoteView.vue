<template>
  <div class="container">
    <div class="card-grid"></div>

    <Card />

    <button @click="logout" class="logout-button">Sair</button>
    <div class="rodape">
      <p>Feito por Wellington</p>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";

import { useAuth } from "@/stores/auth.js";
import { useRouter } from "vue-router";
import Polaroid from "@/components/Polaroid.vue";

const auth = useAuth();
const router = useRouter();

function logout() {
  auth.clear();
  router.push({ name: "auth" });
}
</script>

<style scoped>
.rodape {
  margin-top: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #da8888;
  height: 100vh;
  width: 100%;
}

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
