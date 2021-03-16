import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';

@Component({
  selector: 'app-family-donation',
  templateUrl: './family-donation.component.html',
  styleUrls: ['./family-donation.component.css']
})
export class FamilyDonationComponent implements OnInit {

  donationList:Array<any> = [];

  constructor(private http: HttpClient) { }

  getDonationList() {
    return this.http.get('data/DonationList.json').pipe(
      map(data => {
        const donationArray: Array<any> =[];
        for(const counter in data){
          if(data.hasOwnProperty(counter))
          donationArray.push(data[counter])
        }
        return donationArray;
      })
    )
  }

  ngOnInit() {
    this.getDonationList().subscribe(
      data => {
        this.donationList = data;
        console.log(this.donationList)
      }
    ),error =>{
      console.log(error)
    }
  }

}
