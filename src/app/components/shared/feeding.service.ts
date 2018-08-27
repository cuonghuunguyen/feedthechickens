import { Injectable } from "@angular/core";
import { Feeding } from "./feeding";
import { AngularFirestore } from "angularfire2/firestore";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FeedingService {
  feedingList: Feeding[];
  selectedFeeding: Feeding = new Feeding();

  constructor(public afs: AngularFirestore) {
    this.feedingList = [];
  }
  getData() {
    let tempList: Feeding[];
    this.afs
      .collection<Feeding>("schedule")
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            data.time = new Date(data.time);
            return data;
          });
        })
      )
      .subscribe(data => {
        tempList = data;
        this.feedingList = tempList;
      });

    return tempList;
  }

  insertData(feeding: Feeding) {
    return this.afs.collection("schedule").add(feeding);
  }

  updateData(feeding: Feeding) {
    return this.afs.doc("schedule/" + feeding.id).update(feeding);
  }

  deleteData(key: string) {
    return this.afs.doc("schedule/" + key).delete();
  }
}
