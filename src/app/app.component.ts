import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp 4ERP-BI4';
  x = false;
  msg = "";

  fillMsg(){
    this.msg = "Hello World!";
  }

  getNumber(): number {
    return 42;
  }
}
