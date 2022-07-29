import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarPeopleComponent } from './searchbar-people.component';

describe('SearchbarPeopleComponent', () => {
  let component: SearchbarPeopleComponent;
  let fixture: ComponentFixture<SearchbarPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbarPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbarPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
