<template>
  <div class="container">
    <div class="card-grid">
      <Card
        card-size="360px"
        card-date="23/09/2024"
        cardTitle="Sobre esse site"
        cardBody="Desde o dia que você me mandou o vídeo no tiktok, eu não parei de pensar em como faria algo para você. Queria fazer algo legal, mas a idéia nunca vinha (não sei se esse ficou legal), mas fiz de coração. Tem muita coisa para colocar, mas senti que não queria passar de hoje sem te mostrar."
      />
      <Polaroid
        :image-url="whatsappImg"
        card-body="Não foi aqui que começou, mas..."
        polaroid-width="300px"
      />
      <Polaroid
        :image-url="img23092024"
        card-body="Primeira foto que me mandou 😊"
        card-date="23/06/2024"
      />
      <Polaroid
        :image-url="fotoImg"
        card-body="Eu estava com cara péssima, mas foi a primeira foto que te mandei 😂😂"
        card-date="23/06/2024"
      />
      <Card
        cardDate="23/09/2024"
        cardBody="Ainda vai ter muita coisa aqui, espere só para você ver 😁😁😁"
      />
    </div>

    <button @click="logout" class="logout-button">Sair</button>
    <div class="rodape">
      <p>Feito com ❤️ para alguém que gosto muito</p>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";

import { useAuth } from "@/stores/auth.js";
import { useRouter } from "vue-router";
import Polaroid from "@/components/Polaroid.vue";

import whatsappImg from "@/assets/img/whatsapp.jpg";
import img23092024 from "@/assets/img/23_09_2024.jpg";
import fotoImg from "@/assets/img/foto.jpg";

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
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
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
