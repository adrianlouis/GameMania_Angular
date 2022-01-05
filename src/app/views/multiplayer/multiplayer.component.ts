import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Multiplayer } from 'src/app/models/multiplayer';
import { MultiplayerService } from 'src/app/services/multiplayer.service';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})
export class MultiplayerComponent implements OnInit {
  userForm: FormGroup;

  multiplayer: Multiplayer = {
    id: "",
    plataforma: "",
    game: "",
    data: new Date(),
    host: ""
  }

  formCriarEvento: number = 0;

  dataAtual: any = new Date();
  dataEscolhida: Date = new Date(this.multiplayer.data);

  Xbox: string = "Xbox";
  Playstation: string = "Playstation";
  Nintendo: string = "Nintendo";
  acoes: string = "Editar"

  value: string = "";
  toogle: number = 0
  addEdt: number = 0;

  multiplay = [] as Multiplayer[];
  deletar = {} as Multiplayer;

  id: any = 0
  place: string = ""
  _url: string = "http://localhost:3000/multiplayer/"

  sort: any = "0";


  constructor(private MultiplayerService: MultiplayerService, private router: Router, private actRoute: ActivatedRoute, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: '',
      game: '',
      plataforma: '',
      data: '',
      host: ''
    })
  }

  ngOnInit(): void {
    this.mostrar();
  }

  mostrar() {
    this.MultiplayerService.read().subscribe((multiplay: Multiplayer[]) => {
      this.multiplay = multiplay;
    });
  }

  update() {
    this.MultiplayerService.update(this.id, this.userForm.value).
      subscribe(result => {
        this.addEdt = 0;
        this.formCriarEvento = 0;
        this.mostrar();
      })
  }

  onChange() {
    this.value = this.multiplayer.plataforma;
  }

  criarEvento() {
    this.multiplayer.game = ""
    this.multiplayer.host = ""
    if (this.formCriarEvento == 0) {
      this.formCriarEvento = 1;
    } else {
      this.formCriarEvento = 0;
    }
  }

  deletarUser(id: string) {
    this.MultiplayerService.deletarUser(id).subscribe(() => {
      this.mostrar();
    })
  }

  readByPlat(plataforma: string) {
    this.MultiplayerService.readByPlat(plataforma).
      subscribe((multiplay: Multiplayer[]) => {
        this.multiplay = multiplay;
      })
  }

  editar(id: string, game: string, data: Date, host: string, plataforma: string) {
    this.deletar = { id, game, plataforma, host, data }
    this.id = id;
    this.addEdt = 1;
    this.formCriarEvento = 1;
    this.multiplayer.game = this.deletar.game
    this.multiplayer.data = this.deletar.data
    this.multiplayer.host = this.deletar.host
    this.multiplayer.plataforma = this.deletar.plataforma
    this.toogle = 1; //Boolean que será usado futuramente
  }

  onSubmit(): void {
    this.dataAtual = new Date()
    this.dataEscolhida = new Date(this.multiplayer.data)

    if (this.multiplayer.game == "" ||
      this.multiplayer.host == "" ||
      this.multiplayer.plataforma == "") {
      alert("Não pode haver campos vazios!")
      return
    } else if (this.dataEscolhida < this.dataAtual) {
      alert('Não é possivel utilizar a data escolhida!');
      return
    } else if (this.toogle == 1) {
      this.deletarUser(this.id)
      this.value = this.multiplayer.plataforma;
      this.MultiplayerService.criar(this.multiplayer).subscribe(() => {
        alert('Evento criado!')
        this.router.navigateByUrl("/multiplayer")
        this.formCriarEvento = 0;
        this.toogle = 0; //Boolean que será usado futuramente
        this.mostrar();
      })
    } else {
      this.value = this.multiplayer.plataforma;
      this.MultiplayerService.criar(this.multiplayer).subscribe(() => {
        alert('Evento criado!')
        this.router.navigateByUrl("/multiplayer")
        this.formCriarEvento = 0;
        this.toogle = 0; //Boolean que será usado futuramente
        this.mostrar();
      })
    }
  }
}
