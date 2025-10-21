import { Component, inject, signal, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink } from '@angular/router';
import MenuItem from '../../models/MenuItem';

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
]
})
export class SideNavComponent {

  private readonly MAX_WIDTH = ['(max-width: 1023px)'];

  private breakpointObserver = inject(BreakpointObserver);

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

  updateMenuLinkActive(linkIndex: number): void {
    this.menuList.update(items => (items.map((item, index) => {
      item.active = linkIndex === index ? true : false;
      return item;
    })));
    this.drawer.toggle();
  }

  @ViewChild("drawer") drawer!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(this.MAX_WIDTH)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  toggleSideMenu(): void {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

}
