import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // token: string;
  // idToken: string;
  // expireDate: any;

  profile: any;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    // this.token = localStorage.getItem("access_token");
    // this.idToken = localStorage.getItem("id_token");
    // this.expireDate = localStorage.getItem("expires_at");
    this.getProfileInfo();
  }

  getProfileInfo() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }
}
