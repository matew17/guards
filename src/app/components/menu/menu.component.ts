import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  items = [{ name: "Home", url: "/home" }];

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
  ngOnInit() {}
}
