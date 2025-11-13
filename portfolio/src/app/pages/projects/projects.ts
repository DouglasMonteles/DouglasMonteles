import { Component, signal } from '@angular/core';
import { ProjCard } from './proj-card/proj-card';
import GithubUserRepository from '../../models/GithubUserRepository';
import { empty, EMPTY, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-projects',
  imports: [
    ProjCard,
    AsyncPipe,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  $projects = signal<Observable<Array<GithubUserRepository>>>(of([]));

  page = signal<number>(1);

  constructor(
    private _profileService: ProfileService,
  ) {
    this.$projects.set(this._profileService.githubRepositories(
      environment.githubUsername, 
      this.page()
    ));
  }

}
