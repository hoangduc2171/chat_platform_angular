
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureUserComponent } from './modules/user/user.component';
import { FeatureUserDetailComp } from './modules/user/components/detail/detail.component';
import { FeatureLoginComp } from './modules/auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: FeatureLoginComp },
  { path: 'users', component: FeatureUserComponent },
  { path: 'users/detail/:id', component: FeatureUserDetailComp}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {  }


