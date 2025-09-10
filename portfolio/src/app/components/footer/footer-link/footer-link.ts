import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-link',
  imports: [],
  templateUrl: './footer-link.html',
  styleUrl: './footer-link.scss'
})
export class FooterLink {

  text = input<string>("");
  link = input<string>("");
  ariaLabel = input<string>("");


}
