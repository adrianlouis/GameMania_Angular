import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }
  control: number = 1
  ngOnInit(): void {
  }

  cad(){
    this.control = 1
  }
  adr(){
    this.control = 2
  }
  sMedia(){
    this.control = 3
  }

}
