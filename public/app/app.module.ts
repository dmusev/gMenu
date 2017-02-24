import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';

// Header
import { HeaderComponent } from './shared/header/header.component';
// Footer
import { FooterComponent } from './shared/footer/footer.component';
// Login
import { LoginModule } from './components/login/login.module';
// Routes
import { Routing } from './app.routes';
// Auth Guard
import { AuthGuard } from './utils/authGuard.component';
// Login Guard
import { LoginGuard } from './components/login/login.guard.component';

// Additional libs

@NgModule({
  imports:      [ BrowserModule, LoginModule, FormsModule, Routing, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent ],
  providers: [ AuthGuard, LoginGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
