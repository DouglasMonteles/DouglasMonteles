import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ComponentsModule } from '../components/components.module';
import { FormModule } from '../components/form/form.module';


import { ProjectsComponent } from './projects/projects.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    ComponentsModule,
    MatChipsModule,
  ],
  exports: [

  ],
})
export class PagesModule { }
