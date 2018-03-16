import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email;
  name;
  password;
  constructor( private http: HttpClient, private header: HttpHeaders, private router: Router, private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit() {
  }
  register() {
    // start loader service
    this.http.post('http://localhost:4000/register',{
      email: this.email,
      name: this.name,
      password: this.password
    }).subscribe((data: any) => {
      // stop loader service
      if (data.success) {
        this.router.navigate( ['/login'] );
      } else {
        console.log( 'Registeration unsucessfull');
      }
    })
  }
}
