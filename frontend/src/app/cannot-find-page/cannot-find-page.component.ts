import { Component, OnInit } from '@angular/core';
//Location services
import { Location } from '@angular/common';

@Component({
  selector: 'app-cannot-find-page',
  templateUrl: './cannot-find-page.component.html',
  styleUrls: ['./cannot-find-page.component.css']
})
export class CannotFindPageComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }
  public goBack = (): any => {
    this.location.back();
  }

}
 