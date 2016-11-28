/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IrscCardComponent } from './irsc-card.component';

describe('IrscCardComponent', () => {
  let component: IrscCardComponent;
  let fixture: ComponentFixture<IrscCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrscCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrscCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
