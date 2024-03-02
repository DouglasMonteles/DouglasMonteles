import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';


import { FooterComponent } from './footer/footer.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    LinkCardComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    RouterModule,
    MatPaginatorModule,
  ],
  exports: [
    NavigationComponent,
    LinkCardComponent,
    PaginationComponent,
  ],
})
export class ComponentsModule { }
