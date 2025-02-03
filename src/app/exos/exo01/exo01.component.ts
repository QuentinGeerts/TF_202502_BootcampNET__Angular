import { Component } from '@angular/core';

@Component({
  selector: 'app-exo01',
  standalone: false,

  templateUrl: './exo01.component.html',
  styleUrl: './exo01.component.scss'
})
export class Exo01Component {
  compteur: number = 0;
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
