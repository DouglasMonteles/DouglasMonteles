import { Component, input, signal } from '@angular/core';
import { GithubUserProfile } from '../../models/GithubUserProfile';
import { EMPTY, Observable } from 'rxjs';
import { ProfileService } from '../../services/profile.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    AsyncPipe,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

  private readonly GITHUB_USERNAME = "DouglasMonteles";

  $profile = signal<Observable<GithubUserProfile>>(EMPTY);

  constructor(
    private _profileService: ProfileService,
  ) {
    this.$profile.set(this._profileService.githubProfile(this.GITHUB_USERNAME));
  }

}
