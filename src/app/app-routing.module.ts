
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guards/home-guard.guard';
import { HomeLayoutComponent } from './shared/layout/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/user/user.module').then(m => m.FeatureUserModule),
      },
      {
        path: 'partners',
        loadChildren: () => import('./modules/partners/partner.module').then(m => m.PartnerModule),
      },
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


