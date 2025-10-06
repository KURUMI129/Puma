import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Bartest } from './components/bartest/bartest';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    { path: '',
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
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
    }
];
// @NgModule({
//     imports: [RouterModule, forRoot(routes)],
//     exports: [RouterModule]
// })
// function forRoot(routes: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
//     throw new Error('Function not implemented.');
// }