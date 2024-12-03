import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('envelopeAnimation', [
      state(
        'closed',
        style({
          transform: 'rotateX(0deg)',
        })
      ),
      state(
        'open',
        style({
          transform: 'rotateX(-180deg)',
        })
      ),
      transition('closed <=> open', animate('0.5s ease-in-out')),
    ]),
    trigger('zoomInAnimation', [
      state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
      state('*', style({ opacity: 1, transform: 'scale(1)' })),
      transition('void => *', animate('1.5s ease-out')),
    ]),
  ],
})

export class AppComponent {
  envelopeState: 'closed' | 'open' = 'closed';
  showPicture = false;

  toggleAnimation() {
    this.envelopeState = this.envelopeState === 'closed' ? 'open' : 'closed';
    if (this.envelopeState === 'open') {
      setTimeout(() => {
        this.showPicture = true;
      }, 500); // Delay for flap animation to complete
    } else {
      this.showPicture = false;
    }
  }
}
