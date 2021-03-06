import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Noticia } from 'src/app/models/noticia';
import { User } from 'src/app/models/user';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numero: number = 1;
  selectIndex = 1;
  likeCart: number = 0;
  likeArr: any[] = []
  arrTratamento: any[] = []
  id = this.likeArr



  public corre: any[] = [
    { id: 1, nome: "Diablo 3", preco: "R$ 200,00", capa: "assets/img/capas/diablo.jpeg" },
    { id: 2, nome: "Need For Speed Payback", preco: "R$ 175,00", capa: "assets/img/capas/NFS_Payback.jpg" },
    { id: 3, nome: "Call of Duty Vanguard", preco: "R$ 230,00", capa: "assets/img/capas/codVanguard.jpg" },
    { id: 4, nome: "Forza Horizon 4", preco: "R$ 275,00", capa: "assets/img/capas/forzaHorizon4.jpg" },
    { id: 5, nome: "The Witcher 3", preco: "R$ 100,00", capa: "assets/img/capas/tw3.jpg" },
    { id: 6, nome: "Quantum Break", preco: "R$ 60,00", capa: "assets/img/capas/qbreak.jpg" }

  ];

  public news: any[] = [
    { img: "assets/img/news/fifa19.jpg", noticia: "O jogo Fifa 19 em breve estará fora do Game Pass e com ele, alguns outros jogos." },
    { img: "assets/img/news/raceTeamRivals.jpg", noticia: "Supremacy Games lança jogo de corrida NFT exclusivo para celulares, Race Team Rivals." },
    { img: "assets/img/news/epicgames.png", noticia: "Epic Games adiciona jogo retrô por streaming no catálogo." },
    { img: "assets/img/news/thewitcher3.jpg", noticia: "The Witcher 3 recebeu atualização gráfica para consoles Next-Gen." },
    { img: "assets/img/news/deadbydaylight.jpg", noticia: "Dead by Daylight confirmado como o próximo jogo grátis da Epic Store." }
  ];

  listaNoticias = [] as Noticia[];
  cartao = {} as Noticia;



  constructor(private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    this.carregarNoticia();

    // window.onclick = e => {
    //   console.log(e.target)
    // }

    let a = interval(5000);
    var z: number = 1;
    a.subscribe((b) => {

      if (z === 3) {
        z = 1
      } else {
        z++
      }
      this.numero = z;
      this.selectIndex = z;
    })
  }

  dotOne() {
    this.numero = 1
    this.selectIndex = 1
  }
  dotTwo() {
    this.numero = 2
    this.selectIndex = 2
  }
  dotThree() {
    this.numero = 3
    this.selectIndex = 3
  }

  setSelect(id: number) {
    this.selectIndex = id;
    this.numero = 1;

  }

  carregarNoticia() {
    this.noticiaService.getNoticias().subscribe((noticiasRecebidas: Noticia[]) => {
      this.listaNoticias = noticiasRecebidas;
      // console.log(this.listaNoticias)
    })
  }

  userModel = new User("", "")


  onSubmit() {
    console.log(this.userModel)
  }

  //Icone de carrinho, estilo Like
  wishlist(id: number) {
    const card = document.querySelector('#ident' + id)
    console.log(card)
    card?.classList.toggle('red')
  }

  // Forma de colocar uma classe css por toggle 
  // wishlistJson(id: string){
  //   const card = document.querySelector('#idJson'+id)
  //   card?.classList.toggle('red')
  // }



  atualizar(id: any, boolean: any) {

    this.noticiaService.attBool(id, { 'boolean': true }).subscribe()

  }
  atualizarNot(id: string, boolean: any) {

    this.noticiaService.attBool(id, { 'boolean': false }).subscribe()

  }



  pegarCard(id: string) {
    this.noticiaService.getByUnit(id).subscribe((capturado: Noticia[]) => {
      this.arrTratamento[0] = capturado

      if (this.arrTratamento[0].boolean == true) {
        this.atualizarNot(this.arrTratamento[0].id, { 'boolean': false })
      } else {
        this.atualizar(this.arrTratamento[0].id, { 'boolean': true })
      }
      this.likeArr.push(capturado)
      this.carregarNoticia()
    })
  }



}












