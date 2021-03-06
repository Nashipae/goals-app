import { Component, OnInit } from '@angular/core';
import { Goal } from "../goal";
import {Goals} from "../goals";
import {GoalService} from "../goals/goal.service";
import { AlertsService } from '../alert-service/alerts.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers: [GoalService, QuoteRequestService], //add the providers to the component
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {


  quote: Quote;

  goals:Goal[];
  alertService: AlertsService;

  constructor(goalService: GoalService, alertService: AlertsService, private http: HttpClient, private quoteService: QuoteRequestService, private router: Router){
     this.goals = goalService.getGoals();
     this.alertService = alertService;//make the service available to the class
   }

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)

  }
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  goToUrl(id) {
    this.router.navigate(['/goals, id'])
  }
  deleteGoal(index){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`);

    if (toDelete){
      this.goals.splice(index,1);
      this.alertService.alertMe("Goal has been deleted");
      }
    }


// constructor() { }

  ngOnInit() {
    interface ApiResponse {
      quote: string;
      author: string
    }

  {
      this.quoteService.quoteRequest()
      this.quote = this.quoteService.quote
  }


    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data => {
      this.quote = new Quote(data.quote, data.author)

    }, err => {
      this.quote = new Quote("Never, never, never give up.", "winston churchill")
      console.log("Error occured ")
      // Successful API request.
})
  }

  }
