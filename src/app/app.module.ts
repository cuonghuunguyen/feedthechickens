import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-Toastr';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { environment } from '../environments/environment';
import { CourseServiceService } from './components/shared/course-service.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { 
    path: 'login', 
    component:   LoginComponent 
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path: 'homepage',      
    component: HomepageComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseEditComponent,
    HomepageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CourseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
