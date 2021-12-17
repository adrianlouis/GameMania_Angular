import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  public mVendidos:any[] = [
    {img: "assets/img/produtos/controle ps5.png", nome: "Controle de PS5", preco: "R$ 400,00"},
    {img: "assets/img/produtos/xbo x.png", nome: "Xbox One X", preco: "R$ 2.400,00"},
    {img: "assets/img/produtos/cadeira.png", nome: "Cadeira Gamer", preco: "R$ 750,00"},
    {img: "assets/img/produtos/s21Ultra5G.png", nome: "S21 Ultra 5G", preco: "R$ 3.275,00"},
    {img: "assets/img/produtos/ideapad 3i.png", nome: "Notebook", preco: "R$ 4.400,00"},
    {img: "assets/img/produtos/xonecontrole.png", nome: "Controle de Xbox One", preco: "R$ 350,00"},
    {img: "assets/img/produtos/iphoneXR.png", nome: "Iphone XR", preco: "R$ 3.500,00"}
  ]

  public promos:any[] = [
    {img: "assets/img/capas/forzaHorizon4.jpg", nome: "Forza Horizon 4", preco: "R$ 125,00"},
    {img: "assets/img/capas/NFS_Payback.jpg", nome: "Need For Speed Payback", preco: "R$ 115,00"},
    {img: "assets/img/capas/tw3.jpg", nome: "The Witcher 3", preco: "R$ 80,00"},
    {img: "assets/img/capas/qbreak.jpg", nome: "Quantum Break", preco: "R$ 85,00"},
    {img: "assets/img/capas/diablo.jpeg", nome: "Diablo 3", preco: "R$ 75,00"},
    {img: "assets/img/capas/nfsHeat.jpg", nome: "Need For Speed Heat", preco: "R$ 140,00"},
    {img: "assets/img/capas/gtaV.jpg", nome: "Grand Theft Auto V", preco: "R$ 130,00"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
