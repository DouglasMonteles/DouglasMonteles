import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EventType, Router, RouterLink } from '@angular/router';
import MenuItem from '../../models/MenuItem';
import { SlideToggle } from "../forms/slide-toggle/slide-toggle";
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    SlideToggle
],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SideNavComponent implements OnInit {

  private readonly MAX_WIDTH = ['(max-width: 1023px)'];

  private breakpointObserver = inject(BreakpointObserver);

  menuList = signal<Array<MenuItem>>([]);

  isMenuLinkActive = signal<boolean>(false);

  constructor(
    private _route: Router,
    private _menuService: MenuService,
  ) {}

  @ViewChild("drawer") drawer!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(this.MAX_WIDTH)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

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

  toggleSideMenu(): void {
    if (this.drawer) {
      this.drawer.toggle();
    }
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
          const indexActiveUrl = this._findIndexActiveMenuByLink(activeUrl);
          
          this.updateMenuLinkActive(indexActiveUrl);
        }
      }
    });
  }

  private _findIndexActiveMenuByLink(activeUrl: string): number {
    return this.menuList().findIndex(it => it.link == activeUrl)
  }

}
