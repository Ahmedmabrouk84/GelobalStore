import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundedComponent } from './components/not-founded/not-founded.component';
import { Component } from '@angular/core';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'}, 
    {path:'home',component:HomeComponent, title:'Home'}, 
    {path:'about',component:AboutComponent, title:'About'}, 
    {path:'contact',component:ContactComponent, title:'Contact'}, 
    {path:'**',component:NotFoundedComponent, title:'Not founded'}, 
]
