
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
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    data: { breadcumb: 'Trang chủ' },
    canActivate: [HomeGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then(m => m.FeatureUserModule),
    data: { breadcumb: 'Danh sách người dùng' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {  }


