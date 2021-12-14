import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {

  destaque: string[] = ["Diablo", "Assassin's Creed", "Need For Speed"]
  ;
  public corre:any[] = [
    {nome: "Diablo 2", preco: "R$ 200,00", capa: "assets/img/capas/diablo2.jpg"},
    {nome: "Need For Speed Heat", preco: "R$ 400,00", capa: "assets/img/capas/nfsHeat.jpg"},
    {nome: "Call of Duty Vanguard", preco: "R$ 230,00", capa: "assets/img/capas/codVanguard.jpg"},
    {nome: "Far Cry 6", preco: "R$ 275,00", capa: "assets/img/capas/farcry6.jpg"},
    {nome: "The Witcher 3", preco: "R$ 100,00", capa: "assets/img/capas/tw3.jpg"}

  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
