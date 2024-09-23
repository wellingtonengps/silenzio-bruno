import { defineStore } from "pinia";
import { ref } from "vue";

import http from "@/services/https.js";

export const useAuth = defineStore("auth", () => {
  const user = ref(JSON.parse(localStorage.getItem("user")));

  const person = {
    username: "wellington.silva",
    password: "wel1ing7",
  };

  function setUser(userValue) {
    localStorage.setItem("user", JSON.stringify(userValue));
    user.value = userValue;
  }

  function isAuthenticated() {
    return user.value;
  }

  function checkCredential(user) {
    console.log("user: " + user.username + " " + user.password);
    console.log("person: " + person.username + " " + person.password);

    if (user.username == person.username && user.password == person.password) {
      return true;
    }

    return false;
  }

  async function checkToken() {
    try {
      const token = `Bearer ${user.value.accessToken}`;
      console.log(token);
      const { data } = await http.get("/authenticate/verify", {
        headers: {
          Authorization: token,
        },
      });
      return data;
    } catch (error) {}
  }

  function clear() {
    localStorage.removeItem("user");
    user.value = "";
  }

  return { setUser, user, checkToken, isAuthenticated, clear, checkCredential };
});
