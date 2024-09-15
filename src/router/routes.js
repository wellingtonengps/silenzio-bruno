import { useAuth } from "@/stores/auth.js";

export default async function routes(to, from, next) {
    if (to.meta?.auth) {
        const auth = useAuth();
        if (auth.user) {
            const isAuthenticated = await auth.checkToken();
            if (isAuthenticated) next({name: 'Home'});
            else next({ name: "auth" });
        } else {
            next({ name: "auth" });
        }
        console.log(to.name);
    } else {
        next();
    }
}