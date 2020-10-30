import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginForm from '@/components/Auth/LoginForm'
import SignUpForm from '@/components/Auth/SignUpForm'
import UserProfileSettings from '@/components/User/Settings/UserProfileSettings'
import UserPasswordSettings
    from '@/components/User/Settings/UserPasswordSettings'

import SingleTweet from '@/components/Tweet/SingleTweet'
import UserProfile from '@/components/User/Profile/UserProfile'
import UsersFollowing from '@/components/User/Profile/UsersFollowing'
import UserFollowers from '@/components/User/Profile/UserFollowers'
import FavoriteTweets from '@/components/User/Profile/FavoriteTweets'

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
            path: '/settings/profile',
            component: UserProfileSettings,
            beforeEnter: auth
        },
        {
            path: '/settings/password',
            component: UserPasswordSettings,
            beforeEnter: auth
        },
        {
            path: '/following',
            component: UsersFollowing,
            beforeEnter: auth
        },
        {
            path: '/:username/following',
            component: UsersFollowing,
            beforeEnter: auth,
            props: true
        },
        {
            path: '/followers',
            component: UserFollowers,
            beforeEnter: auth
        },
        {
            path: '/:username/followers',
            component: UserFollowers,
            beforeEnter: auth,
            props: true
        },
        {
            path: '/favorites',
            component: FavoriteTweets,
            beforeEnter: auth
        },
        {
            path: '/:username/favorites',
            component: FavoriteTweets,
            beforeEnter: auth,
            props: true
        },
        {
            path: '/:username',
            component: UserProfile,
            beforeEnter: auth,
            props: true
        },
        {
            path: '/:username/status/:id',
            component: SingleTweet,
            beforeEnter: auth,
            props: true
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