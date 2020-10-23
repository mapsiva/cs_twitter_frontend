import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginForm from '@/components/Auth/LoginForm'
import SignUpForm from '@/components/Auth/SignUpForm'
import { logout } from './services/auth'
import auth from './middleware/auth';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            beforeEnter: auth
        },
        {
            path: '/signup',
            component: SignUpForm
        },
        {
            path: '/login',
            component: LoginForm
        },
        {
            path: '/logout',
            beforeEnter: (to, from, next) => {
                logout();
                return next('/login');
            }
        }
    ]
});