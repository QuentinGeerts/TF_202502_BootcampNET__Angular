import { Component } from '@angular/core';

@Component({
  selector: 'app-exo02',
  standalone: false,

  templateUrl: './exo02.component.html',
  styleUrl: './exo02.component.scss'
})
export class Exo02Component {
  compteur: number = 7592;
  timer: any;

  start () {
    if (this.timer) return;
    this.timer = setInterval(() => { this.compteur++; }, 1000);
  }

  stop () {
    if (!this.timer) return;
    clearInterval(this.timer);
    this.timer = null;
  }

  reset () {
    this.compteur = 0;
    this.stop();
  }
}
