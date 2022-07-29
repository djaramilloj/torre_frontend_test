import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Person, Skill } from 'src/app/models/common';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  peopleFound: Person[] = [];
  errorFindingPeople: boolean = false;
  
  constructor(
    private backendServices: CommonService,
    private router: Router
  ) { }

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

  async navigateProfile(event: any) {
    const personData = await this.backendServices.getPersonByUsername(event.username);
    const data: Person = {
      name: event.name,
      username: event.username,
      photo: event.pictureThumbnail,
      skills: this.getSkillsFromData(personData.strengths)
    }
    const navigationExtras: NavigationExtras = {
      state: {
        data,
      }
    };
    this.router.navigate(['/user'], navigationExtras);
  }

  private getSkillsFromData(skills: any[]): Skill[] {
    return skills.map(skill => {
      return {
        name: skill.name,
        proficiency: skill.proficiency
      }
    });
  }
}
