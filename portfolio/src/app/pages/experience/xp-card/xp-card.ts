import { Component, input } from '@angular/core';

@Component({
  selector: 'app-xp-card',
  imports: [],
  templateUrl: './xp-card.html',
  styleUrl: './xp-card.scss'
})
export class XpCard {

  period = input<string>("");
  responsibility = input<string>("");
  enterprise = input<string>("");
  description = input<string>("");
  enterpriseLink = input<string>("");
  enterpriseProjectLink = input<string>("");
  enterpriseProjectLinkDescription = input<string>("");
  tags = input<Array<string>>([]);
  
}
