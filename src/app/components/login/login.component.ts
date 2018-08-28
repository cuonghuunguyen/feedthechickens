import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private location: Location
  ) {
    if (this.auth.isAuth()) {
      this.location.replaceState("/"); // clears browser history so they can't navigate with back button
      this.router.navigate(["homepage"]);
    }
  }

  ngOnInit() {}

  handleSubmit() {
    this.auth.login(this.username, this.password);
  }
}
