import { Component } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent {
  constructor(private auth: AuthService, private router: Router) {
    
    this.auth.checkLogin();
  }

  logout() {
    this.auth.logout();
  }
}
