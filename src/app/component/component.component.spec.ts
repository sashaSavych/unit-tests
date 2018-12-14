import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComponent } from './component.component';
import { HttpServiceService } from '../httpService/http-service.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ComponentComponent', () => {
  let component: ComponentComponent;
  let fixture: ComponentFixture<ComponentComponent>;
  let httpService: HttpServiceService;
  let spy: jasmine.Spy;
  let mockUser;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ComponentComponent ],
      providers: [ HttpServiceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentComponent);
    component = fixture.componentInstance;

    httpService = fixture.debugElement.injector.get(HttpServiceService);
    mockUser = { name: 'John' };
    spy = spyOn(httpService, 'getOne').and.returnValue(of(mockUser));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call http service', () => {
    component.getUser();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should set user', () => {
    component.getUser();
    expect(component.user.name).toEqual('John');
  });
});
