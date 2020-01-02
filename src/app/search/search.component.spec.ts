import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { DataService } from '../data.service';

describe('SearchComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      imports: [ReactiveFormsModule],
      providers: [DataService]
    }).compileComponents();
  }));

  it('should not be valid if search box is empty', () => {
    let fixture = TestBed.createComponent(SearchComponent);
    let search = fixture.componentInstance;
    fixture.detectChanges();
    search.searchForm.controls['searchText'].setValue('');
    expect(search.searchForm.controls['searchText'].valid).toBeFalsy();
  });

  it('should trigger the changeSearchText routine', async(inject([DataService], (service: DataService) => {
    let fixture = TestBed.createComponent(SearchComponent);
    let search = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(search.service, "changeSearchText").and.callThrough();
    search.searchForm.controls['searchText'].setValue("Uk");
    expect(search.service.changeSearchText).toHaveBeenCalled();
  })));

});
