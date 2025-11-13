import { Component, input, signal } from '@angular/core';
import { GithubUserProfile } from '../../models/GithubUserProfile';
import { EMPTY, Observable } from 'rxjs';
import { ProfileService } from '../../services/profile.service';
import { AsyncPipe } from '@angular/common';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-profile',
  imports: [
    AsyncPipe,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

  $profile = signal<Observable<GithubUserProfile>>(EMPTY);

  constructor(
    private _profileService: ProfileService,
  ) {
    this.$profile.set(this._profileService.githubProfile(environment.githubUsername));
  }

}
