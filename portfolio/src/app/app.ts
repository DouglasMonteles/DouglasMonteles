import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, EventType, Router, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Profile } from "./components/profile/profile";
import { MenuLink } from "./components/menu-link/menu-link";

import MenuItem from './models/MenuItem';
import { SideNavComponent } from "./components/side-nav/side-nav.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    Profile,
    MenuLink,
    SideNavComponent
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected readonly title = signal('portfolio');

  public readonly menuList = signal<Array<MenuItem>>([
    {
      id: "about",
      name: "Sobre",
      link: "/about",
      active: true,
    },
    {
      id: "experience",
      name: "Experiência",
      link: "/experience",
      active: false,
    },
    {
      id: "projects",
      name: "Projetos",
      link: "/projects",
      active: false,
    },
  ]);

  isMenuLinkActive = signal<boolean>(false);

  constructor(private _route: Router) {
  }

  ngOnInit(): void {
    this._route.events.subscribe({
      next: (value) => {
        if (value.type == EventType.ResolveEnd) {
          const activeUrl = value.url;
          const indexActiveUrl = this.menuList().findIndex(it => it.link == activeUrl);

          this.updateMenuLinkActive(indexActiveUrl);
        }
      }
    });
  }

  updateMenuLinkActive(linkIndex: number): void {
    this.menuList.update(items => (items.map((item, index) => {
      item.active = linkIndex === index ? true : false;
      return item;
    })));
  }

}
