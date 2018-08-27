import { Component } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent {
  constructor(private auth: AuthService) {
    this.auth.checkLogin();
  }

  logout() {
    this.auth.logout();
  }
}
