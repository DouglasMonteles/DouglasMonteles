import { Component, input, signal } from '@angular/core';
import { FooterLink } from './footer-link/footer-link';
import { ProfileService } from '../../services/profile.service';
import { EMPTY, Observable } from 'rxjs';
import { SocialMedia } from '../../models/SocialMedia';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    FooterLink,
    AsyncPipe,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  $socialMedia = signal<Observable<SocialMedia[]>>(EMPTY);

  constructor(
    private _profileService: ProfileService,
  ) {
    this.$socialMedia.set(this._profileService.socialMedia());
  }

}
