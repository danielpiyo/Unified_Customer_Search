import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private searchText;
  private searchTextSource = new BehaviorSubject<any>("");
  currentSearchText = this.searchTextSource.asObservable();

  constructor() { }

  changeSearchText(searchText: any) {    
    // add data to an observable
    this.searchTextSource.next(searchText)  
  }
  
}
