import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/Operators'
import { Items } from '../model/items';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

constructor(private http: HttpClient) { }

getShoppingList(storeType: string) {
  return this.http.get('data/ShoppingList.json').pipe(
    map(data => {
      const shoppingArray: Array<Items> = [];
      for(const counter in data) {
        if(data.hasOwnProperty(counter) && data[counter].StoreType === storeType)
        shoppingArray.push(data[counter])
      }
      return shoppingArray;
    })
  )
}

}
