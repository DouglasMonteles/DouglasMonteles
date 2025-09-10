import { Component } from '@angular/core';
import { FooterLink } from './footer-link/footer-link';

@Component({
  selector: 'app-footer',
  imports: [
    FooterLink
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
