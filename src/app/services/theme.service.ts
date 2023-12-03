import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme: boolean = false;
  constructor() {}

  themeSwitcher() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  isDark() {
    return this.isDarkTheme;
  }
}
