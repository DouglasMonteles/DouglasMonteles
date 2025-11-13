import { Component, OnInit, signal } from '@angular/core';
import { EventType, Router, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Profile } from "./components/profile/profile";
import { MenuLink } from "./components/menu-link/menu-link";

import MenuItem from './models/MenuItem';
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    Profile,
    MenuLink,
    SideNavComponent,
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected readonly title = signal('portfolio');

  menuList = signal<Array<MenuItem>>([]);

  isMenuLinkActive = signal<boolean>(false);

  constructor(
    private _route: Router,
    private _menuService: MenuService,
  ) {}

  ngOnInit(): void {
    this._findAllMenuItems();
    this._updateActiveMenuItem();
  }

  updateMenuLinkActive(linkIndex: number): void {
    this.menuList.update(items => (items.map((item, index) => {
      item.active = linkIndex === index ? true : false;
      return item;
    })));
  }

  private _findAllMenuItems(): void {
    this._menuService.findAll().subscribe({
      next: (data) => {
        this.menuList.set(data);
        this.updateMenuLinkActive(this._findIndexActiveMenuByLink(this._route.url));
      }
    });
  }

  private _updateActiveMenuItem(): void {
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

  private _findIndexActiveMenuByLink(activeUrl: string): number {
    return this.menuList().findIndex(it => it.link == activeUrl)
  }

}
