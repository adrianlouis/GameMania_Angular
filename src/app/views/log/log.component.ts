import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  tabCadLog: number = 1;

  constructor() { }

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

  onSubmit() {
    console.log(this.loginModel)
  }
  
}
