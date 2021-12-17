import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  public jogosAgo21:any[] = [
    {img: "assets/img/capas/hades.jpg", nome: "Hades", data: "13.08.21"},
    {img: "assets/img/capas/twelveMinutes.jpg", nome: "Twelve Minutes", data: "19.08.21"},
    {img: "assets/img/capas/ghostTsushimaDirector.jpg", nome: "Ghost of Tsushima Director's Cut", data: "20.08.21"},
    {img: "assets/img/capas/aliensFireteam.jpg", nome: "Aliens: Fireteam Elite", data: "24.08.21"}
  ];

  public jogosSet21:any[] = [
    {img: "assets/img/capas/diablo.jpeg", nome: "Diablo 3", data: "01.09.21"},
    {img: "assets/img/capas/diablo2.jpg", nome: "Diablo 2 Resurrected", data: "12.09.21"},
    {img: "assets/img/capas/farcry6.jpg", nome: "Far Cry 6", data: "15.09.21"},
    {img: "assets/img/capas/ForzaH5.jpg", nome: "Forza Horizon 5", data: "30.09.21"}
  ];

  public jogosOut21:any[] = [
    {img: "assets/img/capas/farcry6.jpg", nome: "Far Cry 6", data: "07.10.21"},
    {img: "assets/img/capas/back4blood.jpg", nome: "Back 4 Blood", data: "12.10.21"},
    {img: "assets/img/capas/guardians.jpg", nome: "Guardiões da Galáxia da Marvel", data: "13.10.21"},
    {img: "assets/img/capas/demonSlayer.jpg", nome: "Demon Slayer - The Hinokami Chronicles", data: "13.10.21"}
  ]

  public jogosNov21:any[] = [
    {img: "assets/img/capas/justdance22.jpg", nome: "Just Dance 22", data: "04.11.21"},
    {img: "assets/img/capas/codVanguard.jpg", nome: "Call of Duty Vanguard", data: "05.11.21"},
    {img: "assets/img/capas/ForzaH5.jpg", nome: "Forza Horizon 5", data: "09.11.21"},
    {img: "assets/img/capas/bf2042.jpg", nome: "Battlefield 2042", data: "19.11.21"}
  ]

  public jogosDez21:any[] = [
    {img: "assets/img/capas/chorus.jpg", nome: "Chorus", data: "03.12.21"},
    {img: "assets/img/capas/humble.jpg", nome: "Happy's Humble Burger Farm", data: "03.12.21"},
    {img: "assets/img/capas/haloinfinite.jpg", nome: "Halo Infinite", data: "08.12.21"},
    {img: "assets/img/capas/antar.jpg", nome: "Antarctica 88", data: "09.12.21"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
