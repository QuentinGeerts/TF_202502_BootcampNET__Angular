import { Component } from '@angular/core';

@Component({
  selector: 'app-demo08',
  standalone: false,

  templateUrl: './demo08.component.html',
  styleUrl: './demo08.component.scss'
})
export class Demo08Component {
  isActive: boolean = true;

  persons: { id: number, lastname: string, firstname: string; }[] = [
    { id: 1, lastname: 'Doe', firstname: 'John' },
    { id: 2, lastname: 'Doe', firstname: 'Jane' },
    { id: 3, lastname: 'Doe', firstname: 'Jim' },
    { id: 4, lastname: 'Doe', firstname: 'Jill' },
    { id: 5, lastname: 'Doe', firstname: 'Jack' },
    { id: 6, lastname: 'Doe', firstname: 'Joe' },

  ];
}
