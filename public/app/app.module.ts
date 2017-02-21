import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';

// Header
import { HeaderComponent } from './shared/header/header.component';
// Footer
import { FooterComponent } from './shared/footer/footer.component';
// Home
import { HomeModule } from './modules/home/home.module';
// Login
import { LoginModule } from './components/login/login.module';
// Register
import { RegisterComponent } from './components/register/register.component';
// Routes
import { Routing } from './app.routes';
// Auth Guard
import { AuthGuard } from './utils/authGuard.component';

// Additional libs

@NgModule({
  imports:      [ BrowserModule, HomeModule, LoginModule, FormsModule, Routing, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, RegisterComponent ],
  providers: [ AuthGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
