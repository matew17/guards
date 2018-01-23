import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  token: string;
  idToken: string;
  expireDate: any;
  constructor() {}

  ngOnInit() {
    this.token = localStorage.getItem("access_token");
    this.idToken = localStorage.getItem("id_token");
    this.expireDate = localStorage.getItem("expires_at");
  }
}
