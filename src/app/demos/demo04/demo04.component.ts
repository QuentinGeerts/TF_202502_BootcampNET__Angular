import { Component } from '@angular/core';

@Component({
  selector: 'app-demo04',
  standalone: false,

  templateUrl: './demo04.component.html',
  styleUrl: './demo04.component.scss'
})
export class Demo04Component {

  src: string = "";

  message: string = "Hello World";

  changeValue (event: Event) {
    // this.message = ;
    console.log('event :>> ', event);
    console.log('event.target :>> ', event.target);
    console.log('(event.target as HTMLInputElement).value) :>> ', (event.target as HTMLInputElement).value);
    this.message = (event.target as HTMLInputElement).value;
  }


  changeSrc () {
    this.src = "images/chat.jpg";
  }

  onMouseEnter () {
    console.log('Mouse enter');
  }

  onMouseLeave () {
    console.log('Mouse leave');
  }

}
