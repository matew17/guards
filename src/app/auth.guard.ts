import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  // canActivate(): boolean {
  //   if (this.authService.isAuthenticated()) {
  //     console.log("Se llamo el GUARD , true");
  //     return true;
  //   } else {
  //     console.log("Se llamo el GUARD , false");
  //     this.router.navigate(["/noauth"]);
  //     return false;
  //   }
  // }

  canActivate(): Observable<boolean> {
    if (this.authService.isAuthenticated()) {
      console.log("Se llamo el GUARD , true");
      return this.authService
        .getProfile().pipe(
        map(() => true),
        catchError(err => {
          // return of(false)
          console.log("Se llamo el GUARD , false", err);
          this.router.navigate(["/noauth"]);
          return of(false);
        })
        )
    } else {
      console.log("Se llamo el GUARD , false");
      this.router.navigate(["/noauth"]);
      return of(false);
    }
  }
}
