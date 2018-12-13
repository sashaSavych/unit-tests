import {fakeAsync, flush, TestBed, tick} from '@angular/core/testing';

import { ServiceService } from './service.service';

describe('Service1Service', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return sum', () => {
    expect(service.sum(3, 8)).toEqual(11);
  });

  it('should return sumAsync/flush', <any>fakeAsync(() => {
    service.sumAsync(3, 8).then(result => {
      expect(result).toEqual(11);
    });
    flush();
  }));

  it('should return sumAsync/tick', <any>fakeAsync(() => {
    service.sumAsync(3, 8).then(result => {
      expect(result).toEqual(11);
    });
    tick(3000);
  }));
});
