import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  standalone: false,

  templateUrl: './demo01.component.html',
  styleUrl: './demo01.component.scss'
})
export class Demo01Component implements OnInit {

  // Champs
  maVariable1: string = 'Hello World';
  maVariable2!: string; // Definite Assignment Assertion 
  maVariable3: boolean = true; // false
  maVariable4: number = 42; // 3.14
  maVariable5: string[] = ['Hello', 'World'];
  maVariable6: any = 'Hello World';
  maVariable7: any = 42;
  maVariable8: any[] = ['Hello', 42, true];
  maVariable9: { nom: string, prenom: string } = { nom: 'Doe', prenom: 'John' };
  maVariable10: (a: number, b: number) => number = (a, b) => a + b;
  maVariable11: null = null;
  maVariable12: undefined = undefined;
  maVariable13: unknown = 'Hello World';
  maVariable14: string | number = 'Hello World';
  maVariable15: string | undefined;
  maVariable16?: string;

  ngOnInit (): void {
    this.maVariable2 = 'Hello World';
    this.maVariable14 = 42;
  }
}
