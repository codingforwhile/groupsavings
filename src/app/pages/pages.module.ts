import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MygroupComponent } from './mygroup/mygroup.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    MygroupComponent,
    CreategroupComponent,
    GroupsComponent
  ]
})

export class PagesModule {}
