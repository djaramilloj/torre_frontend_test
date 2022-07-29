import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareUserComponent } from './compare-user/compare-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'compare',
    component: CompareUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
