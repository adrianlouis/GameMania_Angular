import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ola: string = "ola";

  myScriptElement: HTMLScriptElement;
  constructor(){
   this.myScriptElement = document.createElement("script");
   this.myScriptElement.src = "assets/js/newScript.js";
    document.body.appendChild(this.myScriptElement);
  }
  title = 'Game Mania';

}
