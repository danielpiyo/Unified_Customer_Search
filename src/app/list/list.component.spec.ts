import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { DataService } from '../data.service';

describe('ListComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent
      ],
      imports: [ReactiveFormsModule],
      providers: [DataService]
    }).compileComponents();
  }));

  it('should enlist all the customers', () => {
    let fixture = TestBed.createComponent(ListComponent);
    let list = fixture.componentInstance;
    fixture.detectChanges();
    expect(list.searchCustomersList).toEqual([
      { name: "Jeremy Clarke", age: 21, id: 12345, gender: "Male", location: "Melbourne", income: "$120,000" },
      { name: "Matty Bing", age: 25, id: 12225, gender: "Female", location: "Toronto", income: "$950,000" },
      { name: "Tanya Smith", age: 18, id: 12455, gender: "Female", location: "New York City", income: "$150,000" },
      { name: "Sparsh Saxena", age: 25, id: 13345, gender: "Male", location: "Philadephia", income: "$200,000" },
      { name: "Adam Gilly", age: 32, id: 12344, gender: "Male", location: "Melbourne", income: "$2,200,000" },
      { name: "Glenn Adams", age: 34, id: 12395, gender: "Male", location: "Adelaide", income: "$4,200,000" },
      { name: "Stuart McGill", age: 32, id: 19945, gender: "Male", location: "Arlington", income: "$400,000" },
      { name: "Erica Edwards", age: 25, id: 11145, gender: "Female", location: "Toronto", income: "$2,200,000" }
    ])
  });

  it('should filter the customers accordingly', inject([DataService], (service: DataService) => {
    let fixture = TestBed.createComponent(ListComponent);
    let list = fixture.componentInstance;
    fixture.detectChanges();
    list.ngOnInit();
    service.changeSearchText("ar");
    expect(list.searchCustomersList).toEqual([Object({ name: 'Jeremy Clarke', age: 21, id: 12345, gender: 'Male', location: 'Melbourne', income: '$120,000' }), Object({ name: 'Sparsh Saxena', age: 25, id: 13345, gender: 'Male', location: 'Philadephia', income: '$200,000' }), Object({ name: 'Stuart McGill', age: 32, id: 19945, gender: 'Male', location: 'Arlington', income: '$400,000' }), Object({ name: 'Erica Edwards', age: 25, id: 11145, gender: 'Female', location: 'Toronto', income: '$2,200,000' })]);
  }));

});
