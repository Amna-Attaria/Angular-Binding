import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { MycompComponent } from './mycomp/mycomp.component';

export const routes: Routes = [
    {
        path:'Contact Page',
        component:ContactComponent
    },
    {
        path:'About Page',
        component:AboutUsComponent
    },
    {
        path:'abc',
        component:AboutUsComponent
    },
    {
        path:'binding',
        component:MycompComponent
    }
];
