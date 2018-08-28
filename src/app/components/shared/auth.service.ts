import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-Toastr";
import { Location } from "@angular/common";

const md5 = require("md5");
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private router: Router,
    private toast: ToastrService,
    private location: Location
  ) {}

  isAuth() {
    if (!localStorage.getItem("username") || !localStorage.getItem("password")) {
      return false;
    }
    return (
      md5(localStorage.getItem("username")) ===
        "4639e96f5e6661f6fe203379f0f54b72" &&
      md5(localStorage.getItem("password")) ===
        "2fc175250a82deca51ae7c0c7861b3c0"
    );
  }

  login(username: string, password: string) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    if (this.isAuth()) {
      this.router.navigate(["/homepage"]);
    } else {
      this.toast.error(
        "The username or password is incorrect",
        "Notification from my grandmother"
      );
    }
  }

  logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    this.router.navigate(["/login"]);
  }

  checkLogin() {
    if (!this.isAuth()) {
      this.location.replaceState("/"); // clears browser history so they can't navigate with back button
      this.router.navigate(["login"]);
    }
  }
}
