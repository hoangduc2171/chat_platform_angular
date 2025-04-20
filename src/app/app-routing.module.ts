
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureUserComponent } from './features/user/user.component';
import { FeatureUserDetailComp } from './features/user/components/detail/detail.component';
import { FeatureLoginComp } from './features/auth/login/login.component';

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


