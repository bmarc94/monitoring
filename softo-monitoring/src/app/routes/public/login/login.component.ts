import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private router: Router) {

  }


  login(): void {
    this.router.navigate(['./parents']);
    // if (this.username === 'admin' && this.password === 'admin') {
    //   this.router.navigate(['./parents']);
    // } else {
    //   alert('Invalid credentials');
    // }
  }

}
