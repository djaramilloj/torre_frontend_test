import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareUserComponent } from './compare-user.component';

describe('CompareUserComponent', () => {
  let component: CompareUserComponent;
  let fixture: ComponentFixture<CompareUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
