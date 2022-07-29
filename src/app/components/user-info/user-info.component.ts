import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/common';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() personData: Person | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
