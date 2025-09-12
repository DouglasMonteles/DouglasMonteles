import { Component, input } from '@angular/core';

@Component({
  selector: 'app-proj-card',
  imports: [],
  templateUrl: './proj-card.html',
  styleUrl: './proj-card.scss'
})
export class ProjCard {

  projectName = input<string>("");
  projectLink = input<string>("");
  projectRepositoryLink = input<string>("");
  projectDescription = input<string>("");
  projectImage = input<string>("");
  projectStars = input<number>(0);
  tags = input<Array<string>>([]);

}
