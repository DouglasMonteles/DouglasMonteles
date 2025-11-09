import { Component, signal } from '@angular/core';
import { ProfileAbout } from '../../models/ProfileAbout';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    AsyncPipe,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  $about = signal<Observable<ProfileAbout> | null>(null);

  constructor(
    private _profileService: ProfileService
  ) {
    this.$about.set(this._profileService.about())
  }

}
