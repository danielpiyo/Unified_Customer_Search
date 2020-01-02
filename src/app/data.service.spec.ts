import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should use an observable to add values', inject([DataService], (service: DataService) => {
    spyOn(service['searchTextSource'], 'next').and.callThrough();
    service.changeSearchText('Tor');
    expect(service['searchTextSource'].next).toHaveBeenCalled();
  }));
});
