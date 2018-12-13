import { TestBed } from '@angular/core/testing';

import { HttpServiceService } from './http-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HttpServiceService', () => {
  let service: HttpServiceService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(HttpServiceService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get one user', () => {
    const mockUser = {
      name: 'John'
    };

    service.getOne(1).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users/1'
    }).flush(mockUser);

  });

  it('should get all users', () => {
    const mockUsers = [{
      name: 'John'
    }];

    service.getAll().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users'
    }).flush(mockUsers);

  });
});
