import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { Opportunity, Person } from 'src/app/models/common';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compare-user',
  templateUrl: './compare-user.component.html',
  styleUrls: ['./compare-user.component.scss']
})
export class CompareUserComponent implements OnInit {

  peopleFound: Person[] = [];
  errorFindingPeople: boolean = false;
  opportunityInfo: Opportunity | null = null; 
  personData: Person | null = null;

  constructor(
    private backendServices: CommonService,
    private router: Router
  ) { 
    if (this.router.getCurrentNavigation()?.extras.state) {
      const incomingData: any = this.router.getCurrentNavigation()?.extras.state;
      this.opportunityInfo = incomingData.dataOpportunity;
      this.personData = incomingData.dataUser;
      if(!this.opportunityInfo) this.router.navigate(['home']);
    } else{
      this.router.navigate(['home']);
    }
  }

  ngOnInit(): void {
  }

  searchPeople(event: any) {
    this.backendServices.searchPeopleByName(event)
      .subscribe(
        data => this.peopleFound = [...data.results],
        error => {
          console.log(error);
          this.errorFindingPeople = true;
          setTimeout(() => {
            this.errorFindingPeople = false;
          }, 3000);
        }
    );
  }

  async compareProfile(event: any) {
    const personData = await this.backendServices.getPersonByUsername(event.username);
    const recentlySelectedUser = {
      username: event.username,
      name: event.name,
      skills: personData.strengths
    };
    if (this.personData && this.opportunityInfo?.skills) {
      const userMatch = await this.backendServices.compareUsersBasedOnSkills(recentlySelectedUser, this.personData, this.opportunityInfo?.skills);
      this.openDialog(userMatch);
    };
  }

  async openDialog(userMatch: Person) {
    const response = await Swal.fire({
      title: `Good job ${userMatch.name}!`,
      text: `${userMatch.name} is a better match for this specific opportunity`,
      icon: 'success',
      width: 300
    });
    response.dismiss;
    this.navigate('user');
  }

  navigate(target: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        data: this.personData,
      }
    };
    this.router.navigate([`/${target}`], navigationExtras);
  }

}
