import { AuthService } from "./../shared/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-feeding-management",
  templateUrl: "./feeding-management.component.html",
  styleUrls: ["./feeding-management.component.css"]
})
export class FeedingManagementComponent implements OnInit {
  constructor(private auth: AuthService) {
    this.auth.checkLogin();
  }

  ngOnInit() {}
}
