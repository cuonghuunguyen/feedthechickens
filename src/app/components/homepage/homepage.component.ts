import { ToastrService } from "ngx-Toastr";
import { FeedingService } from "./../shared/feeding.service";
import { Component } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Feeding } from "../shared/feeding";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent {
  timeToFeedNow: number = 1;
  constructor(
    private auth: AuthService,
    private feeding: FeedingService,
    private toast: ToastrService
  ) {
    this.auth.checkLogin();
  }

  handleFeedNow() {
    const tempFeedNow = new Feeding();
    tempFeedNow.duration = this.timeToFeedNow;
    console.log(tempFeedNow);

    this.feeding
      .insertData(tempFeedNow)
      .then(() =>
        this.toast.success(
          "Your chickens are enjoying food now!",
          "Notification from YourGrandMother"
        )
      )
      .catch(() =>
        this.toast.error(
          "We got an error when submit your command!",
          "Notification from YourGrandMother"
        )
      );
  }

  logout() {
    this.auth.logout();
  }
}
