import { Component, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LocalStorageService } from '../../../services/local-storage.service';
import { SelectedTheme } from '../../../models/SelectedTheme';


@Component({
  selector: 'app-slide-toggle',
  imports: [
    MatIconModule,
    MatSlideToggleModule,
  ],
  templateUrl: './slide-toggle.html',
  styleUrl: './slide-toggle.scss'
})
export class SlideToggle implements OnInit {

  static readonly SELECTED_THEME_KEY = "selected-theme";

  private readonly DARK_MODE_CLASS_NAME = "dark-theme";
  private readonly LIGHT_MODE_CLASS_NAME = "light-theme";

  selectedTheme = signal<string>(this.LIGHT_MODE_CLASS_NAME);
  checked = signal<boolean>(false);

  constructor(
    private _localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {
    const storedSelectedTheme: SelectedTheme | null = this._localStorageService.findByKey<SelectedTheme>(SlideToggle.SELECTED_THEME_KEY);
    
    if (storedSelectedTheme) {
      this.selectedTheme.set(storedSelectedTheme.selectedTheme);
      this.checked.set(storedSelectedTheme.checked);

      if (this.checked()) {
        this.enableDarkMode();
      }
    }
  }

  handleToggle(): void {
    if (this.selectedTheme() == this.DARK_MODE_CLASS_NAME) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }

    this._localStorageService.save(SlideToggle.SELECTED_THEME_KEY, {
      selectedTheme: this.selectedTheme(),
      checked: this.selectedTheme() == this.DARK_MODE_CLASS_NAME ? true : false,
    } as SelectedTheme);
  }

  private enableDarkMode(): void {
    this.selectedTheme.set(this.DARK_MODE_CLASS_NAME);
    document.body.classList.add(this.selectedTheme());
  }

  private enableLightMode(): void {
    this.selectedTheme.set(this.LIGHT_MODE_CLASS_NAME);
    document.body.classList.remove(this.DARK_MODE_CLASS_NAME);
  }

}
