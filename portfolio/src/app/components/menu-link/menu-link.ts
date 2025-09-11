import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-link',
  imports: [RouterLink],
  templateUrl: './menu-link.html',
  styleUrl: './menu-link.scss'
})
export class MenuLink {

  text = input<string>("#");
  link = input<string>("#");
  active = input<boolean>(false);

}
