import { Component } from '@angular/core';

@Component({
  selector: 'app-demo03',
  standalone: false,

  templateUrl: './demo03.component.html',
  styleUrl: './demo03.component.scss'
})
export class Demo03Component {

  src: string = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
  src2: string = 'images/chat.jpg';
  alt: string = 'Google Logo';
  width: number = 92;
  height: number = 30;
  title: string = 'Google Logo';

  message: string = "Hello, World!";

}
