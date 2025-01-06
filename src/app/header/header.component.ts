import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  
  onMouseEnter(event: MouseEvent) {
    const element = event.target as HTMLElement;
    element.classList.add('open');
  }

  onMouseLeave(event: MouseEvent) {
    const element = event.target as HTMLElement;
    element.classList.remove('open');
  }

}
