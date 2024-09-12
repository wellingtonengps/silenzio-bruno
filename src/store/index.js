import {createStore} from 'vuex'

export const store = createStore({
    state:{
        user: null,
        isAuthenticated: false,
        loginError: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            state.isAuthenticated = true;
            state.loginError = null
        },
        setLoginError(state, error){
            state.loginError = error;
        },
        logout(state){
            state.user = null;
            state.isAuthenticated = false;
        }
    },
    actions: {
        login({commit}, credentials) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (credentials.username === 'admin' && credentials.password === 'password') {
                        commit('setUser', { username: credentials.username });
                        resolve();
                    } else {
                        commit('setLoginError', 'Usuário ou senha incorretos');
                        reject('Usuário ou senha incorretos');
                    }
                }, 1000);
            });
        },
        logout({commit}){
            commit('logout');
        }
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        loginError: state => state.loginError,
        user: state => state.user
    }
})