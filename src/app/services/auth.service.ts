import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import "rxjs/add/operator/filter";
import * as auth0 from "auth0-js";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: "qudQhJIGLRAxN4dfOjF5jEVD3V6BRCdl",
    domain: "matew17.auth0.com",
    responseType: "token id_token",
    audience: "https://matew17.auth0.com/userinfo",
    redirectUri: "http://localhost:4200/callback",
    scope: "openid profile"
  });
  constructor(private router: Router, private http: HttpClient) {}

  public login(): void {
    this.auth0.authorize();
  }

  public isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    if (localStorage.getItem("access_token")) {
      return new Date().getTime() < expiresAt;
    }
  }

  getProfile(): Observable<any> {
    const accessToken = localStorage.getItem("access_token");
    const headers = new HttpHeaders().set(
      "authorization",
      "Bearer " + accessToken
    );
    return this.http.get("https://matew17.auth0.com/userinfo", {
      headers: headers
    });
  }

  // Este metodo se ejecuta en el callback,
  // y valida si la autenticacion fue exitosa,
  // si asi es guarda algunos datos en el local storage.

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setTimeout(() => {
          //Monkey git time
          window.location.hash = "";
          this.setSession(authResult);
          this.router.navigate(["/home"]);
        }, 2500);
      } else if (err) {
        this.router.navigate(["/"]);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  }

  public logout(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.router.navigate(["/"]);
  }
}
