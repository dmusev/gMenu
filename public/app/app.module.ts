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
// import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
// Register
import { RegisterComponent } from './components/register/register.component';
// Routes
import { Routing } from './app.routes';
// Auth Guard
import { AuthGuard } from './utils/authGuard.component';

//additional libs

@NgModule({
  imports:      [ BrowserModule, HomeModule, FormsModule, Routing, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, RegisterComponent],
  providers: [ AuthGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
