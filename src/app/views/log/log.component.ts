import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
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


  constructor(private router: Router , private loginService: LoginService) { }

  ngOnInit(): void {
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
          this.s--;
        }else{
          clearInterval;
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
