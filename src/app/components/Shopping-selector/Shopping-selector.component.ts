import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Shopping-selector',
  templateUrl: './Shopping-selector.component.html',
  styleUrls: ['./Shopping-selector.component.css']
})
export class ShoppingSelectorComponent implements OnInit {

  public storeList: Array<string> = ['Costco', 'Tarkari', 'Braums', 'Tomthumb']
  constructor() { }

  ngOnInit() {
  }

}
