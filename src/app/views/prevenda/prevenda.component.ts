import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prevenda',
  templateUrl: './prevenda.component.html',
  styleUrls: ['./prevenda.component.css']
})
export class PrevendaComponent implements OnInit {

  public pvDez: any[] = [
    {img: "assets/img/capas/wonderLabyrinth.png", nome: "Wonder Labyrinth", data: "16.12.21"},
    {img: "assets/img/capas/gunk.png", nome: "The Gunk", data: "16.12.21"},
    {img: "assets/img/capas/circusPocus.jpg", nome: "Circus Pocus", data: "16.12.21"},
    {img: "assets/img/capas/inMyShadow.jpg", nome: "In My Shadow", data: "21.12.21"}
  ]

  public pvJan:any[] = [
    {img: "assets/img/capas/weirdWest.jpg", nome: "Weird West", data: "11.01.22"},
    {img: "assets/img/capas/cogen.jpg", nome: "COGEN: Sword of Rewind", data: "26.01.22"},
    {img: "assets/img/capas/pokemonLegendsArceus.webp", nome: "Pokémon Legends Arceus", data: "28.01.22"},
    {img: "assets/img/capas/uncharted.jpg", nome: "Uncharted Legacy of Thieves Collection", data: "28.01.22"},
  ];

  public pvFev:any[] = [
    {img: "assets/img/capas/dyinglight.jpg", nome: "Dying Light 2", data: "04.02.22"},
    {img: "assets/img/capas/kof.jpg", nome: "The King of Fighters XV", data: "17.02.22"},
    {img: "assets/img/capas/saintsRow.jpg", nome: "Saints Row", data: "25.02.22"},
    {img: "assets/img/capas/eldenRing.jpg", nome: "Elden Ring", data: "25.02.22"}
  ]

 
  constructor() { }

  ngOnInit(): void {
  }

}
