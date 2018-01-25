import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.getProfile();
  }
  getProfile() {
    if (!this.profile) {
      this.auth.getProfile().subscribe(
        profile => {
          this.profile = profile;
        },
        err => {
          console.error("Error en peticion: ", err.error);
        }
      );
    }
  }
}
