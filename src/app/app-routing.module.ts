
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guards/home-guard.guard';
import { HomeLayoutComponent } from './shared/layout/home-layout/home-layout.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { 
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
      { path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.FeatureUserModule)},
    ],
    canActivate: [HomeGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {  }


