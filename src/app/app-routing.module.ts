
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureUserComponent } from './modules/user/user.component';
import { FeatureUserDetailComp } from './modules/user/components/detail/detail.component';
import { FeatureLoginComp } from './modules/auth/login/login.component';
import { HomeLayoutComponent } from './shared/components/layout/home-layout/home-layout.component';

const routes: Routes = [
  { path: 'login', component: FeatureLoginComp },

  { path: '', component: HomeLayoutComponent, children: [
    { path: 'users', component: FeatureUserComponent},
    { path: 'users/detail', component: FeatureUserDetailComp}
  ]},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {  }


