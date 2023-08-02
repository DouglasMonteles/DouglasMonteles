import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [

  
    ProjectsComponent,
        UserInfoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [

  ],
})
export class PagesModule { }
