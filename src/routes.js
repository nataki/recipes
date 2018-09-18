import React from 'react';
import Loadable from 'react-loadable';

export const ABOUT_ROUTE_PATH = '/about';
export const RECIPES_ROUTE_PATH = '/recipes';
export const DASHBOARD_ROUTE_PATH = '/';
export const SHOPPING_LIST_ROUTE_PATH = '/shopping-list';
export const LOGIN_ROUTE_PATH = '/login';
export const SIGN_UP_ROUTE_PATH = '/sign-up';

const LoadingSpin = () => <div>Loading...</div>;

export default [
    {
        path: ABOUT_ROUTE_PATH,
        exact: true,
        isPrivate: false,
        component: Loadable({
            loader: () => import('./modules/About'),
            loading: LoadingSpin,
        }),
    },
    {
        path: DASHBOARD_ROUTE_PATH,
        exact: true,
        isPrivate: false,
        component: Loadable({
            loader: () => import('./modules/Dashboard'),
            loading: LoadingSpin,
        }),
    },
    {
        path: RECIPES_ROUTE_PATH,
        exact: true,
        isPrivate: true,
        component: Loadable({
            loader: () => import('./modules/Recipes'),
            loading: LoadingSpin,
        }),
    },
    {
        path: SHOPPING_LIST_ROUTE_PATH,
        exact: true,
        isPrivate: true,
        component: Loadable({
            loader: () => import('./modules/ShoppingList'),
            loading: LoadingSpin,
        }),
    },
    {
        path: LOGIN_ROUTE_PATH,
        exact: true,
        isPrivate: false,
        component: Loadable({
            loader: () => import('./modules/Auth/LogIn'),
            loading: LoadingSpin,
        }),
        guestOnly: true
    },
    {
        path: SIGN_UP_ROUTE_PATH,
        exact: true,
        isPrivate: false,
        component: Loadable({
            loader: () => import('./modules/Auth/SignUp'),
            loading: LoadingSpin,
        }),
        guestOnly: true,
    },
];
