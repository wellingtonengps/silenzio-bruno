<template>
  <div>
    <h1>Home</h1>
    <p>Bem-vindo</p>
    <p v-if="auth.isAuthenticated()">{{ auth.user.name }}</p>
    <button @click="logout">Sair</button>
  </div>
</template>

<script setup>
import { useAuth } from "@/stores/auth.js";
import { useRouter } from "vue-router";

const auth = useAuth();
const router = useRouter();

function logout() {
  auth.clear();
  router.push({ name: "auth" });
}
</script>
