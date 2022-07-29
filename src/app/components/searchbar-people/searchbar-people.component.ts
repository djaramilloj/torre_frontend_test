import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Person } from 'src/app/models/common';

@Component({
  selector: 'app-searchbar-people',
  templateUrl: './searchbar-people.component.html',
  styleUrls: ['./searchbar-people.component.scss']
})
export class SearchbarPeopleComponent implements OnInit {

  @Input() peopleFound: Person[] = [];
  @Input() errorFindingPeople: boolean = false;
  @Output() searchPeople = new EventEmitter<any>();
  @Output() navigateProfile = new EventEmitter<any>();
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['errorFindingPeople'] && changes['errorFindingPeople'].currentValue === true) {
      this.searchText = '';
    }
  }

  search() {
    const MIN_CHARACTERS_TO_SEARCH = 2;
    if(this.searchText.length > MIN_CHARACTERS_TO_SEARCH) this.searchPeople.emit(this.searchText);
  }

  navigateProfileInfo(person: Person) {
    this.navigateProfile.emit(person);
  }

  get loadingData(): boolean {
    return this.searchText.length > 2 && this.peopleFound.length === 0 && this.errorFindingPeople === false ? true : false;
  }

  get showRecommendations(): boolean {
    return this.peopleFound.length > 0 && this.errorFindingPeople === false && this.searchText.length > 2 ? true: false;
  }

}
