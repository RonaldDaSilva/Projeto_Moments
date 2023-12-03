import { Component } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MessagesService } from 'src/app/services/messages.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  faTimes = faTimes;

  constructor(
    public messageService: MessagesService,
    public themeService: ThemeService
  ) {}

  themeSwitcher() {
    this.themeService.themeSwitcher();
  }
}
