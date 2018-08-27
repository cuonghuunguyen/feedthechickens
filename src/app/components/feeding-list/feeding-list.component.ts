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
    console.log(this.feedingService.feedingList);
  }

  onEdit(feeding: Feeding) {
    console.log(feeding);
    this.feedingService.selectedFeeding = Object.assign({}, feeding);
  }

  onDelete(feeding: Feeding) {
    // tslint:disable-next-line:no-unused-expression
    !confirm("Do you want to DELETE this feeding schedule") ||
      this.feedingService.deleteData(feeding.id);
    this.toast.error(
      "Remove feeding schedule successfully",
      "Notification from MyGrandMother"
    );
  }

  ngOnInit() {}
}
