import { Component, signal } from '@angular/core';
import { XpCard } from './xp-card/xp-card';
import { ProfessionalExperience } from '../../models/ProfessionalExperience';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [
    XpCard,
    AsyncPipe,
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  $experience = signal<Observable<ProfessionalExperience[]> | null>(null);

  constructor(
    private _profileService: ProfileService,
  ) {
    this.$experience.set(this._profileService.experience());
  }

}
