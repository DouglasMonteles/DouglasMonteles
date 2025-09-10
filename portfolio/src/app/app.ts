import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { MenuLink } from "./components/menu-link/menu-link";
import { Profile } from "./components/profile/profile";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    MenuLink,
    Profile
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
