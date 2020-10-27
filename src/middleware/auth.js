import { isAuthenticated } from "@/services/auth"

export default function auth(to, from, next) {

    if (!isAuthenticated()) {
        return next('/login');
    }
    return next();
}