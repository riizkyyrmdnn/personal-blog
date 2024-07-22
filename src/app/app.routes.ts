import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { Post1to20Component } from './blog/post1to20/post1to20.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog/:title', component: Post1to20Component },
    { path: '**', component: ErrorComponent }
];
