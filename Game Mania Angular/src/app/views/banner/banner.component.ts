import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
 numero: number = 1;
 selectIndex = 1;

  constructor() { }

  ngOnInit(): void {
   let a = interval(5000);
   var z: number = 1;
   a.subscribe((b) =>{

    if (z === 3){
      z = 1
    }else{
      z++
    }
     this.numero = z;
     this.selectIndex = z;
    })
  }

  dotOne(){
    this.numero =1
    this.selectIndex = 1
  }
  dotTwo(){
    this.numero = 2
    this.selectIndex = 2
  }
  dotThree(){
    this.numero = 3
    this.selectIndex = 3
  }

  setSelect(id: number){
    this.selectIndex = id;
    this.numero = 1;
  }
}



