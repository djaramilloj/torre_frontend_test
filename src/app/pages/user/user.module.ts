import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/material.module';
import { CompareUserComponent } from './compare-user/compare-user.component';


@NgModule({
  declarations: [
    UserComponent,
    CompareUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class UserModule { }
