/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComsumeComponent } from './comsume.component';

describe('ComsumeComponent', () => {
  let component: ComsumeComponent;
  let fixture: ComponentFixture<ComsumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComsumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
