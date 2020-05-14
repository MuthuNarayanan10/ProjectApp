import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrndListComponent } from './frnd-list.component';

describe('FrndListComponent', () => {
  let component: FrndListComponent;
  let fixture: ComponentFixture<FrndListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrndListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
