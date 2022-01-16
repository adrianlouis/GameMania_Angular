import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/models/cadastro';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  tabCadLog: number = 1;
  s: number = 5;
  cs: number = 5;
  toogleLogin: number = 1;
  userLogado: string = "";
  mensagemCad: string = "";
  emailExists: boolean = false;
  msgEmailExists: string = "";

  criarCad: Cadastro = {
    name: "",
    email: "",
    password: "",
    passwordB: ""
  }

  constructor(private router: Router, private loginService: LoginService, private cadService: CadastroService) { }

  ngOnInit(): void {
    if (this.toogleLogin = 2) {
      this.tabCadLog = 2;
    }
  }

  cadastrar() {
    if (this.criarCad.password !== this.criarCad.passwordB) {
      this.mensagemCad = 'Senhas não conferem'
      return
    } else if (this.criarCad.name == "" || this.criarCad.email == "" || this.criarCad.password == "") {
      this.mensagemCad = 'Preencha todos os campos'
      return

    } else if (this.emailExists !== false){
      return
    } else {
      this.cadService.criarUser(this.criarCad).subscribe(() => {
        this.cs = 5;
        let timer = setInterval(() => {
          
          if (this.cs !== 0) {
            this.mensagemCad = "Cadastro realizado. Você será redirecionado ao login em " + this.cs + " segundos."
            this.cs--;
          } else {
            clearInterval(timer);
            this.toogleLogin = 1;
            this.tabCadLog = 1;
          }
        }, 1000) 
      })
    }
  }

  loginCerto() {
    let time = setInterval(() => {
      if (this.s !== 0) {
        this.s--;
      } else {
        clearInterval;
        this.router.navigateByUrl("/loja")
      }
    }, 1000)
  }

  tab() {
    this.tabCadLog = 2;
  }
  tab2() {
    this.tabCadLog = 1;
  }

  loginModel = new Login()


  userModel = new User("louis@email.com", "krad")

  mensagem = "";

  emailExist(id: string){
    this.cadService.buscarUm(id).subscribe((emailConsulta:Cadastro[]) =>{
     
      if (emailConsulta.length > 0){
        this.emailExists = true;
        this.msgEmailExists = "Email já cadastrado"
      }else{
        this.emailExists = false;
        this.msgEmailExists = ""
      }
    })
  }

  verificarEmailInput(){
    return this.criarCad.email
  }



  onSubmit() {

    const blacklist: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ",
     "by ", "insert ", "exec ", "\"", "\'", "#", "--", "*", ";"]

    blacklist.forEach(palavra => {
      if (this.loginModel.email?.toLowerCase().includes(palavra)) {
        this.mensagem = palavra + " não pode ser usado no campo de email.";
        return;
      }
    })
    this.loginService.login(this.loginModel).subscribe((response) => {
      let time = setInterval(() => {
        if (this.s !== 0) {
          this.mensagem = "Você está logado e será redirecionado em " + this.s + " segundos."
          this.s--;
        } else {
          clearInterval(time);
          this.toogleLogin = 2;
          this.router.navigateByUrl("/loja")
        }
      }, 1000)
    }, (error => {
      if (error.error === "Cannot find user") {
        this.mensagem = "Usuário não encontrado"
      } else if (error.error === "Incorrect password") {
        this.mensagem = "Senha inválida"
      } else if (error.error === "Password is too short") {
        this.mensagem = "Senha muito curta"
      } else {
        this.mensagem = "Formato do email inválido"
      }
    }))
  }
}
