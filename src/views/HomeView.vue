<template>
  <div>
    <h1>Home</h1>
    <p>Bem-vindo</p>
    <p v-if="auth.isAuthenticated()">{{auth.user.name}}</p>
    <button @click="logout">Sair</button>
  </div>
</template>

<script setup>
import {useAuth} from "@/stores/auth.js";

const auth = useAuth();

function logout() {
  auth.clear()
}
</script>