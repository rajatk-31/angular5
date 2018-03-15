import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from "@angular/router";
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  header;
  loginform = {
    email: '',
    phone: ''
  };
  constructor(private r: Router, private ar: ActivatedRoute, private login: LoginService, private http:Http) { }

  ngOnInit() {
  }
  logins(){
    console.log(this.loginform)
    this.http.post('http://localhost:8000/login', this.loginform).subscribe(data => {
      console.log(data.json());
      console.log('Api call completed');
    });
  }

}
