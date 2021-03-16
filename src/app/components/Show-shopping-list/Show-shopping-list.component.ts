import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/service/shopping.service';
import { Items } from 'src/app/model/items';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-Show-shopping-list',
  templateUrl: './Show-shopping-list.component.html',
  styleUrls: ['./Show-shopping-list.component.css']
})
export class ShowShoppingListComponent implements OnInit {
  storeType: any;
 cshoppingArray: Array<Items> = [];
  constructor( private route: ActivatedRoute, private router: Router, private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.storeType = this.route.snapshot.params['store'];
    this.route.params.subscribe(
      (params) =>{
        this.storeType = params['store'];
        console.log(this.storeType);
        this.shoppingService.getShoppingList(this.storeType).subscribe(
          data => {
            this.cshoppingArray = data
            console.log(this.cshoppingArray)
          }),error =>{
          console.log(error)
        }
      }
    )


  }

}
