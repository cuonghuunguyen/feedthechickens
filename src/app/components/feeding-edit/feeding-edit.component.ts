import { Component, OnInit } from "@angular/core";
import { FeedingService } from "../shared/feeding.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-Toastr";
import { Feeding } from "../shared/feeding";
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

  onSubmit() {
    if (this.validateForm()) {
      if (!this.feedingService.selectedFeeding.id) {
        this.feedingService
          .insertData(this.feedingService.selectedFeeding)
          .then(() =>
            this.toast.info(
              "Insert successfully!",
              "Notification of CuongHandsome"
            )
          );
      } else {
        this.feedingService
          .updateData(this.feedingService.selectedFeeding)
          .then(() =>
            this.toast.success(
              "Update successfully!",
              "Notification of MyGrandMother"
            )
          );
      }
      this.resetForm();
    }
  }

  validateForm() {
    const { time, duration } = this.feedingService.selectedFeeding;
    if (new Date(time).getTime() < new Date().getTime() || duration <= 0) {
      this.toast.warning(
        "- Date must be in future! \n- The duration must be a positive number!",
        "You've enter invalid data"
      );
      return false;
    }
    return true;
  }

  handleClickCheckbox() {
    this.feedingService.selectedFeeding.loop = !this.feedingService
      .selectedFeeding.loop;
  }

  resetForm(feedingForm?: NgForm) {
    if (feedingForm) {
      feedingForm.reset();
    }
    this.feedingService.selectedFeeding = Object.assign(new Feeding(), {});
  }
}
