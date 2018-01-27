import { AppRoutingModule } from "./app.router";
import { AuthService } from "./services/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { CallbackComponent } from "./components/callback/callback.component";
import { MenuComponent } from "./components/menu/menu.component";
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from "./components/profile/profile.component";
import { NoAutorizadoComponent } from "./components/no-autorizado/no-autorizado.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    MenuComponent,
    ProfileComponent,
    NoAutorizadoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
