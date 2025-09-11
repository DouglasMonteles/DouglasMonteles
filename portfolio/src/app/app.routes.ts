import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full",
  },
  {
    title: "Sobre",
    path: "about",
    component: About,
  },
  {
    title: "Experiência",
    path: "experience",
    component: Experience,
  },
  {
    title: "Projetos",
    path: "projects",
    component: Projects,
  },
];
