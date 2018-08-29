import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FeedingListComponent } from "./components/feeding-list/feeding-list.component";
import { FeedingEditComponent } from "./components/feeding-edit/feeding-edit.component";
import { FeedingService } from "./components/shared/feeding.service";
import { FeedingManagementComponent } from "./components/feeding-management/feeding-management.component";
import { RouterModule, Routes } from "@angular/router";
import { ToastrModule } from "ngx-Toastr";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { LoginComponent } from "./components/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "homepage",
    component: HomepageComponent
  },
  {
    path: "management",
    component: FeedingManagementComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FeedingListComponent,
    FeedingEditComponent,
    FeedingManagementComponent,
    HomepageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ToastrModule.forRoot(),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [FeedingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
