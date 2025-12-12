import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavService } from '../sidenav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class SidenavComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  private subscription?: Subscription;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.subscription = this.sidenavService.isOpen$.subscribe(
      isOpen => this.isOpen = isOpen
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  close() {
    this.sidenavService.close();
  }
}

