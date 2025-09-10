import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

  name = input<string>("");
  profession = input<string>("");
  resume = input<string>("");
  pictureLink = input<string>("");

}
