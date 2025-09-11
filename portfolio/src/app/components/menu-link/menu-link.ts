import { Component, input } from '@angular/core';

@Component({
  selector: 'app-menu-link',
  imports: [],
  templateUrl: './menu-link.html',
  styleUrl: './menu-link.scss'
})
export class MenuLink {

  text = input<string>("#");
  link = input<string>("#");
  active = input<boolean>(false);

}
