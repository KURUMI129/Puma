import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Bartest } from './components/bartest/bartest';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { SingIn } from './components/sing-in/sing-in';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        // Esta es tu ruta principal que sí funciona
        path: 'home/:userType',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'header',
        component: Header
    },
    {
        path: 'footer',
        component: Footer
    },
    {
        path: 'bartest',
        component: Bartest
    },
    {
        path: 'forgot-password',
        component: ForgotPassword
    },
    {
        path: 'sing-in',
        component: SingIn
    }
];