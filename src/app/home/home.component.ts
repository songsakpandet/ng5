import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemCount:number=4;
  addNewItem:string="Add New Item";
  goalText:string="My first life goal...";

  goals = [];

  constructor() { }

  ngOnInit() {
  }

  additem() {
    this.goals.push(this.goalText);
    this.goalText='';
  }

}
