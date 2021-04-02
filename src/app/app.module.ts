import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

const oktaConfig = {
    issuer: 'https://dev-322018.oktapreview.com/oauth2/default',
    clientId: '0oaipoqa789EAewTL0h7',
    redirectUri: window.location.origin + '/callback'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OktaAuthModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
