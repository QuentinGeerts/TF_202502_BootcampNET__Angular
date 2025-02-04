import { Component } from '@angular/core';

@Component({
  selector: 'app-demo07',
  standalone: false,

  templateUrl: './demo07.component.html',
  styleUrl: './demo07.component.scss'
})
export class Demo07Component {
  color: string = 'red';
  fontSize: number = 22;


  stylesObj: { [key: string]: string | number; } = {
    'color': this.color,
    'font-size.px': this.fontSize
  };

  isActive: boolean = true;
}
