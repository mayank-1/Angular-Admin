import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInProgressComponent } from './sales-in-progress.component';

describe('SalesInProgressComponent', () => {
  let component: SalesInProgressComponent;
  let fixture: ComponentFixture<SalesInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
