import { Component } from '@angular/core';
import { ProjCard } from './proj-card/proj-card';

@Component({
  selector: 'app-projects',
  imports: [
    ProjCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}
