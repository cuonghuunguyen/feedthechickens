import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "angularfire2/database";
import { FormControl } from "@angular/forms";
import { map, startWith } from "rxjs/operators";
import { Toast, ToastrService } from "ngx-Toastr";
import { Feeding } from "../shared/feeding";
import { FeedingService } from "../shared/feeding.service";

@Component({
  selector: "app-feeding-list",
  templateUrl: "./feeding-list.component.html",
  styleUrls: ["./feeding-list.component.css"]
})
export class FeedingListComponent implements OnInit {
  constructor(
    public feedingService: FeedingService,
    private toast: ToastrService
  ) {
    this.feedingService.getData();
  }

  getReadableDateString(date: string) {
    return new Date(date).toLocaleString("vi");
  }

  onEdit(feeding: Feeding) {
    this.feedingService.selectedFeeding = feeding;
  }

  onDelete(feeding: Feeding) {
    if (confirm("Do you want to DELETE this feeding schedule")) {
      this.feedingService
        .deleteData(feeding.id)
        .then(() =>
          this.toast.error(
            "Remove feeding schedule successfully",
            "Notification from MyGrandMother"
          )
        );
    }
  }

  ngOnInit() {}
}
