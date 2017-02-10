import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// Header
import { HeaderComponent } from './shared/header/header.component';
// Footer
import { FooterComponent } from './shared/footer/footer.component';
// Home
// import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
// Register
import { RegisterComponent } from './components/register/register.component';
// Routes
import { Routing } from './app.routes';

//additional libs

@NgModule({
  imports:      [ BrowserModule, HomeModule, Routing ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, RegisterComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
