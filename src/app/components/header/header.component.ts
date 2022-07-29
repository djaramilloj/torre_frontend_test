import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() location: string = '';
  @Input() targetNavigation: string = '';
  @Output() navigate = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  goHomeAction() {
    const targetNavigation = this.targetNavigation ?? 'home';
    this.navigate.emit(targetNavigation);
  }

}
