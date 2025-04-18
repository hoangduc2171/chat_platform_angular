
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureUserComponent } from './features/user/user.component';
import { FeatureUserDetailComp } from './features/user/detail.component';

const routes: Routes = [
  { path: 'users-list', component: FeatureUserComponent },
  { path: 'users-list/:id', component: FeatureUserDetailComp }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {  }


