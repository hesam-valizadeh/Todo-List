import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class HeaderComponent {
  currentView: 'grid' | 'list' = 'list';
  currentDate: string;

  constructor(private sidenavService: SidenavService) {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = today.toLocaleDateString('en-US', options);
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  setView(view: 'grid' | 'list') {
    this.currentView = view;
  }
}

