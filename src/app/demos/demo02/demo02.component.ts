import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02',
  standalone: false,
  
  templateUrl: './demo02.component.html',
  styleUrl: './demo02.component.scss'
})
export class Demo02Component {

  message: string = "Hello World!";

}
