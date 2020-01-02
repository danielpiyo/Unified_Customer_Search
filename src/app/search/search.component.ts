import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {
      
    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchText': [null]
    });    
    // write a subsciber/valueChanges function that calls changeSearchText upon value change in the form
    this.searchForm.valueChanges.subscribe(val=>{     
      this.service.changeSearchText(val);
    })
  }
}
