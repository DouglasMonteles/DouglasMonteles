import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
  ],
  exports: [

  ],
})
export class PagesModule { }
