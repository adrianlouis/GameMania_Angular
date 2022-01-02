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
  toogleLogin: number = 1;
  userLogado: string = ""

  criarCad: Cadastro = {
    name: "",
    email: "",
    password: "",
    passwordB: ""
  }

  constructor(private router: Router , private loginService: LoginService, private cadService: CadastroService) { }

  ngOnInit(): void {
    if (this.toogleLogin = 2){
      this.tabCadLog = 2;
    }
  }

  cadastrar(){
    if(this.criarCad.password !== this.criarCad.passwordB){
      alert('Senhas não conferem')
      return
    }else if(this.criarCad.name == "" || this.criarCad.email == "" || this.criarCad.password == ""){
      alert('Preencha os campos corretamente')
      return
    }else{
    this.cadService.criarUser(this.criarCad).subscribe(()=>{
      console.log(this.criarCad)
      this.tabCadLog = 1;
      this.userLogado = this.criarCad.name
    
    })
  }

  }

  loginCerto(){
    let time = setInterval(()=>{
      if (this.s !== 0){
        console.log(this.s);
        this.s--;
      }else{
        clearInterval;
        this.router.navigateByUrl("/loja")
      }
    }, 1000)
  }

  tab(){
    this.tabCadLog = 2;
    console.log(this.tabCadLog)
  }
  tab2(){
    this.tabCadLog = 1;
  }

  loginModel = new Login()


  userModel = new User("louis@email.com", "krad") 

  mensagem = "";
  


  onSubmit() {

    const blacklist: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "#", "--", "*", ";"]

    blacklist.forEach(palavra => {
      if (this.loginModel.email?.toLowerCase().includes(palavra)){
        this.mensagem= palavra + " não pode ser usado no campo de email.";
        return;
      }
    })


    console.log(this.loginModel)
    // o response abaixo é apenas uma var 
    this.loginService.login(this.loginModel).subscribe( (response) => {
      let time = setInterval(()=>{
        if (this.s !== 0){
          this.mensagem= "Você está logado e será redirecionado em "+this.s+" segundos."

          // logica para amostrar o nome logado 
          
          // this.loginService.loged = this.loginModel.email

          this.s--;
        }else{
          clearInterval(time);
          this.toogleLogin = 2;
          this.router.navigateByUrl("/loja")
        }
      }, 1000)

      console.log(response)
    }, (error => {
      console.log(error.error)

      if (error.error === "Cannot find user"){
       this.mensagem ="Usuário não encontrado"
      }else if(error.error === "Incorrect password"){
        this.mensagem = "Senha inválida"
      }else if(error.error = "Password is too short"){
        this.mensagem = "Senha muito curta"
      }else{
        this.mensagem = "Formato do email inválido"
      }
    }))
  }
}
