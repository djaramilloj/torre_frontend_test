import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Opportunity, Person } from 'src/app/models/common';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  personData: Person | null = null;
  opportunities: Opportunity[] = [];

  constructor(
    private backendServices: CommonService,
    private router: Router
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      const incomingData: any = this.router.getCurrentNavigation()?.extras.state;
      this.personData = incomingData.data;
      if(!this.personData) this.navigate('home');
    } else{
      this.navigate('home');
    }
  }

  ngOnInit(): void {
    this.getBestOpportunitiesForUser(this.personData?.username || '');
  }

  navigate(target: string) {
    this.router.navigate([`/${target}`]);
  }

  private getBestOpportunitiesForUser(username: string) {
    if (username) {
      this.backendServices.getBestOpportunities(username)
        .subscribe(
          data => this.opportunities = this.processOpportunitites(data.results),
          error => console.log(error)
      );
    }
  }

  private processOpportunitites(data: any[]): Opportunity[] {
    return data.map(opp => {
      return {
        job: opp.objective,
        name: opp.organizations[0]?.name ?? '',
        skills: opp.skills
      };
    });
  }

  compareOpportunity(opportunity: Opportunity) {
    const navigationExtras: NavigationExtras = {
      state: {
        dataOpportunity: opportunity,
        dataUser: this.personData
      }
    };
    this.router.navigate(['/user/compare'], navigationExtras); 
  }

}
