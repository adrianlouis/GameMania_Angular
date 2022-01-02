import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Cadastro } from 'src/app/models/cadastro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  // cadastro: Cadastro = {
  //   nome: '',
  //   email: '',
  //   senha: '' ,
  //   cadastro
  // }

  constructor( private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }
  
  // onSubmit(): void{
  //   this.cadastroService.create(this.cadastro).subscribe(() =>{
  //     alert('Usuário cadastrado!')
  //   })
  // }
}
