import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ProfileService } from '../../../services/profile.service';
import { EMPTY, map, Observable } from 'rxjs';
import GithubLanguageRepository from '../../../models/GithubLanguageRepository';

@Component({
  selector: 'app-proj-card',
  imports: [
    DatePipe,
    AsyncPipe,
    MatChipsModule,
  ],
  templateUrl: './proj-card.html',
  styleUrl: './proj-card.scss'
})
export class ProjCard implements OnInit {

  projectName = input<string>("");
  projectLink = input<string>("");
  projectRepositoryLink = input<string>("");
  projectDescription = input<string>("");
  projectImage = input<string>("");
  projectStars = input<number>(0);
  tags = input<Array<string>>([]);
  createdAt = input<string>("");
  updatedAt = input<string>("");

  $languages = signal<Observable<Array<string>>>(EMPTY);

  constructor(
    private _profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.$languages.update(() => this._profileService
      .githubRepositoryLanguage(this.projectName())
      .pipe(
        map(obj => Object.keys(obj))
      ));
  }

}
