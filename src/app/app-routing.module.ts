import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },

  {
    path: 'user-info',
    component: UserInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
