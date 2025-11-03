import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
   scrollToSection(event: Event, sectionId: string) {
    event.preventDefault(); // prevent default anchor jump
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
