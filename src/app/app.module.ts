import { AppRoutingModule } from "./app.router";
import { AuthService } from "./services/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CallbackComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
