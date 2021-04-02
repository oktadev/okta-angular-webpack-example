import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-webpack-demo';
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService) {
    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit() {
    // get authentication state for immediate use
    this.oktaAuth.isAuthenticated().then((auth) => {this.isAuthenticated = auth});
  }

  login() {
    this.oktaAuth.signInWithRedirect();
  }

  logout() {
    this.oktaAuth.signOut();
  }
}