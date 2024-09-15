import {defineStore} from "pinia";
import {ref} from "vue";

import http from '@/services/https.js'

export const useAuth = defineStore("auth", () => {
    const user = ref(JSON.parse(localStorage.getItem("user")));

    function setUser(userValue) {
        localStorage.setItem('user', JSON.stringify(userValue));
        user.value  = userValue;
    }

    function isAuthenticated() {
        return user.value
    }

    async function checkToken() {
        try {
            const token = `Bearer ${user.value.accessToken}`
            console.log(token);
            const {data} = await http.get('/authenticate/verify', {
                headers: {
                    Authorization: token
                }
            });
            return data
        }catch (error) {

        }
    }
    
    function clear() {
        localStorage.removeItem('user');
        user.value = '';
    }

    return {setUser, user, checkToken, isAuthenticated, clear}
})
