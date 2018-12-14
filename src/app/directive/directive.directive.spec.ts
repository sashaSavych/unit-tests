import { DirectiveDirective } from './directive.directive';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `<div appDirective (changes)="output = $event"></div>`
})
export class TestContainerComponent {
  output: number;
}

describe('DirectiveDirective', () => {
  let component: TestContainerComponent;
  let fixture: ComponentFixture<TestContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestContainerComponent, DirectiveDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestContainerComponent);
    component = fixture.componentInstance;
  }));

  it('should create an instance', () => {
    const directive = new DirectiveDirective();
    expect(directive).toBeTruthy();
  });

  it('should log clicks', () => {
    const div = fixture.nativeElement.querySelector('div');
    div.click();
    expect(component.output).toBe(1);
  });
});
