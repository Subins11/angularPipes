import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularPipes';

welcome: string="welcome to angular"
currency: any=2568


students = [
  { id: 1, name: 'Subin S', gender: 'Male' },
  { id: 2, name: 'Rose', gender: 'Female' },
  { id: 3, name:'Hari', gender:'Male'}
];
}
