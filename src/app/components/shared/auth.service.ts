import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-Toastr";
import { Location } from "@angular/common";

var md5 = require("md5");
@Injectable({
  providedIn: "root"
})
export class AuthService {
  isAuth = false;
  constructor(
    private router: Router,
    private toast: ToastrService,
    private location: Location
  ) {}

  login(username: string, password: string) {
    if (
      md5(username) === "4639e96f5e6661f6fe203379f0f54b72" &&
      md5(password) === "2fc175250a82deca51ae7c0c7861b3c0"
    ) {
      this.isAuth = true;
      this.router.navigate(["/homepage"]);
    } else
      this.toast.error(
        "The username or password is incorrect",
        "Notification from my grandmother"
      );
  }

  logout() {
    this.isAuth = false;
    this.router.navigate(["/login"]);
  }

  checkLogin() {
    if (!this.isAuth) {
      this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.router.navigate(['login']);
  }
  }
}
