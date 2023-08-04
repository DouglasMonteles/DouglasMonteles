import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.css']
})
export class SocialCardComponent {

  @Input()
  name: string | null = null;

  @Input()
  link: string | null = null;

  @Input()
  imageLink: string | null = null;

}
