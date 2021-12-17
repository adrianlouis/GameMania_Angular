import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router , private loginService: LoginService) { }

  ngOnInit(): void {
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
    console.log(this.loginModel)
    // o response abaixo é apenas uma var 
    this.loginService.login(this.loginModel).subscribe( (response) => {
      this.mensagem = "Login com sucesso!";
      this.router.navigateByUrl("/loja")
      console.log(response)
    }, (error => {
      console.log(error.error)

      if (error.error === "Cannot find user"){
       this.mensagem ="Usuário não encontrado"
      }else if(error.error === "Incorrect password"){
        this.mensagem = "Senha errada"
      }else{
        this.mensagem = "Formato do email inválido"
      }

      
    }))
  }
  
}
