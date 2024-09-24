<script setup>
import http from "@/services/https.js";
import { reactive } from "vue";
import { useAuth } from "@/stores/auth.js";
import { useRouter } from "vue-router";

const user = reactive({
  username: "",
  password: "",
  error: false,
});

const auth = useAuth();
const router = useRouter();

function handleLogin() {
  if (auth.checkCredential(user)) {
    auth.setUser(user);
    router.push({ name: "note" });
  } else {
    user.error = true;
  }
}

/*
async function handleLogin() {
  try {
    const { data } = await http.post("/authenticate/login", user);
    console.log(data);
    auth.setUser(data);

    await router.push({ name: "note" });
  } catch (error) {
    console.log(error.response.data);
  }
}*/
</script>

<template>
  <div class="background">
    <div class="container">
      <img class="logo" src="../assets/img/silenzio_bruno.png" alt="Logo" />
      <div>
        <form @submit.prevent="handleLogin">
          <input
            type="text"
            placeholder="Usuário"
            v-model="user.username"
            id="username"
          />
          <input
            type="password"
            placeholder="Senha"
            v-model="user.password"
            id="password"
          />
          <p v-if="user.error" class="error">Eu gosto de você 😢</p>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error {
  margin-top: 10px;
  color: red;
}
.background {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/img/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(44, 62, 80, 0.9);
  height: 450px;
  width: 360px;
  border-radius: 10px;
}

button {
  margin-top: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;

  input:first-child {
    margin-bottom: 10px;
  }
}

.logo {
  width: 160px;
}
</style>
