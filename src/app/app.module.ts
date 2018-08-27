import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-Toastr";
import { AppComponent } from "./app.component";
import { FeedingListComponent } from "./components/feeding-list/feeding-list.component";
import { FeedingEditComponent } from "./components/feeding-edit/feeding-edit.component";
import { environment } from "../environments/environment";
import { FeedingService } from "./components/shared/feeding.service";
import { FeedingManagementComponent } from "./components/feeding-management/feeding-management.component";

@NgModule({
  declarations: [
    AppComponent,
    FeedingListComponent,
    FeedingEditComponent,
    FeedingManagementComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ToastrModule.forRoot(),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features,
  ],
  providers: [FeedingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
