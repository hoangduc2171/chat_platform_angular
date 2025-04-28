
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureUserComponent } from './modules/user/user.component';
import { FeatureUserDetailComp } from './modules/user/components/detail/detail.component';
import { FeatureLoginComp } from './modules/auth/login/login.component';
import { HomeGuard } from './guards/home-guard.guard';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeLayoutComponent } from './shared/layout/home-layout/home-layout.component';

const routes: Routes = [
  { path: 'login', component: FeatureLoginComp },
  { path: 'auth', component: AuthComponent },
  { 
    path: '', component: HomeLayoutComponent, 
    children: [
      { path: 'users', component: FeatureUserComponent},
      { path: 'users/detail/:id', component: FeatureUserDetailComp}
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


