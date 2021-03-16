import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Update-Shopping-List',
  templateUrl: './Update-Shopping-List.component.html',
  styleUrls: ['./Update-Shopping-List.component.css']
})
export class UpdateShoppingListComponent implements OnInit {
  public storeList: Array<string> = ['Costco', 'Tarkari', 'Braums', 'Tomthumb']
  updateListForm = new FormGroup({
    itemName: new FormControl(''),
    itemPrice: new FormControl(''),
    storeType: new FormControl('select store'),
    storeAddress: new FormGroup({
      city: new FormControl(''),
      state: new FormControl('Texas'),
      zipcode: new FormControl('')
    })
  });


  constructor() { }

  ngOnInit() {
  }

  onSubmit(val:any) {
    console.log(val);

  }

}
