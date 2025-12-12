import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Layout/header/header.component';
import { SidenavComponent } from './Layout/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    FormsModule,
    MatDialogModule,
    RouterOutlet,
    HeaderComponent,
    SidenavComponent
  ],
})
export class AppComponent {
  title = 'Todo-List';
}
