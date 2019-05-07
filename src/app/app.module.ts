import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import {FormsModule} from '@angular/forms';
import { AlertsService } from './alert-service/alerts.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "goals", component: GoalComponent },
  { path: "about", component: AboutComponent },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule,// normal progress bar
    NgProgressHttpModule, // progress bar to load http requests
    RouterModule
  ],
  providers: [AlertsService],// Add service to providers
  bootstrap: [AppComponent]
})


export class AppModule { }
