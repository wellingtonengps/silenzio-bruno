import { useAuth } from "@/stores/auth.js";

export default async function routes(to, from, next) {
    const isAuthenticated = localStorage.getItem('user'); // Assuming 'user' contains authentication info

    if (isAuthenticated) {
        // If the user is authenticated and trying to access the login page, redirect to '/note'
        if (to.name === 'auth') {
            next({ name: 'note' });
        } else {
            next();
        }
    } else {
        // If the route requires authentication and the user is not authenticated, redirect to '/auth'
        if (to.meta.auth) {
            next({ name: 'auth' });
        } else {
            next();
        }
    }
}