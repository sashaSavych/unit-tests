import { Component } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Component({
  selector: 'app-component',
  template: '<div>{{user?.name}}</div>'
})
export class ComponentComponent {
  user: any;

  constructor(private _httpServiceService: HttpServiceService) { }

  getUser(): void {
    this._httpServiceService.getOne(1).subscribe(user => this.user = user);
  }
}
