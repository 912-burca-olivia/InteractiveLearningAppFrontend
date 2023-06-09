import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {
    username: '',
    password: ''
  };
  loading = false;
  loginError = false;
  logout: string;
  loginMessage: string = 'Invalid Username or Password!';

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    this.logout = this.activatedRoute.snapshot.queryParams['logout'];
    if (!(this.logout == null)) {
      this.loginError = true;
      if (this.logout == 'false')
        this.loginMessage = 'You have either logged out or your previous session has expired. Please login again to continue!';
      if (this.logout == 'true')
        this.loginMessage = 'You have successfully logged out!';
    }
  }

  ngOnInit() {
    if (!(sessionStorage.getItem('loggedInUser') == null ))
      this.router.navigate(['browser']);
  }

  login(e: Event) {
    e.preventDefault();
    this.loading = true;
    this.loginError = false;
    if (this.user.username == 'AlexVadean' && this.user.password == 'Research') {
      this.loading = false;
      sessionStorage.setItem('loggedInUser', JSON.stringify({
        fname: 'Alex',
        lname: 'Vadean'
      }));
      this.router.navigate(['browser']);
    }
    else {
      this.loginError = true;
    }
  }
}
