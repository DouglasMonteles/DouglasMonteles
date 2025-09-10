import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-menu-link',
  imports: [],
  templateUrl: './menu-link.html',
  styleUrl: './menu-link.scss'
})
export class MenuLink {

  @Input()
  text: string = "";

  @Input()
  link: string = "#";

}
