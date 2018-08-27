import { Component, OnInit } from "@angular/core";
import { FeedingService } from "../shared/feeding.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-Toastr";
@Component({
  selector: "app-feeding-edit",
  templateUrl: "./feeding-edit.component.html",
  styleUrls: ["./feeding-edit.component.css"]
})
export class FeedingEditComponent implements OnInit {
  constructor(
    public feedingService: FeedingService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.feedingService.getData();
    this.resetForm();
  }

  onSubmit(feedingForm: NgForm) {
    if (this.feedingService.selectedFeeding.id === null) {
      this.feedingService.insertData(this.feedingService.selectedFeeding);
      this.toast.info("Insert successfully!", "Notification of CuongHandsome");
    } else {
      this.feedingService.updateData(this.feedingService.selectedFeeding);
      this.toast.success(
        "Update successfully!",
        "Notification of MyGrandMother"
      );
    }
    this.resetForm();
  }

  resetForm(feedingForm?: NgForm) {
    if (feedingForm != null) {
      feedingForm.reset();
    }
    this.feedingService.selectedFeeding = {
      id: null,
      time: new Date(),
      duration: 0
    };
  }
}
