import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  customers = [
    { name: "Jeremy Clarke", age: 21, id: 12345, gender: "Male", location: "Melbourne", income: "$120,000" },
    { name: "Matty Bing", age: 25, id: 12225, gender: "Female", location: "Toronto", income: "$950,000" },
    { name: "Tanya Smith", age: 18, id: 12455, gender: "Female", location: "New York City", income: "$150,000" },
    { name: "Sparsh Saxena", age: 25, id: 13345, gender: "Male", location: "Philadephia", income: "$200,000" },
    { name: "Adam Gilly", age: 32, id: 12344, gender: "Male", location: "Melbourne", income: "$2,200,000" },
    { name: "Glenn Adams", age: 34, id: 12395, gender: "Male", location: "Adelaide", income: "$4,200,000" },
    { name: "Stuart McGill", age: 32, id: 19945, gender: "Male", location: "Arlington", income: "$400,000" },
    { name: "Erica Edwards", age: 25, id: 11145, gender: "Female", location: "Toronto", income: "$2,200,000" }
  ]

  public text: any; 
  private reload = 0
  private allCustomers

  searchCustomersList = { searchText: '' };

  constructor(private service: DataService, private ref: ChangeDetectorRef) {
    // interval for searchText update
    setInterval(() => {
      this.reload++;
      // require function to pull the customers again based on th filter
      this.searchText();
      this.ref.markForCheck();
    }, 1000);
  }

  ngOnInit() {

    this.searchText();

  }

  // complete this function which searches the customer data & adds them to searchCustomersList
  searchText() {
    this.service.currentSearchText.subscribe((data: any) => {
      this.searchCustomersList = data;      
    })
    let searchNeed = this.searchCustomersList.searchText    
    // check if the searchText is present (this case not present)
    if (searchNeed == undefined) {
     this.allCustomers= this.customers;
    }     
     // searchText is present
    else if (searchNeed != undefined && searchNeed != null) {
      this.allCustomers = this.customers.filter(function (customer) {
        return customer.name.toLowerCase().match(searchNeed) || customer.location.toLowerCase().match(searchNeed)
          || customer.gender.toLowerCase().match(searchNeed) || customer.income.toLowerCase().match(searchNeed)
      })
    }
    else{
      // the searchText is empty get all list of customers
      this.allCustomers = this.customers;
    }
   
  }

}
