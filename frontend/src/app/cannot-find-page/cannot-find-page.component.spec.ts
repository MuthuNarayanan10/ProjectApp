import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CannotFindPageComponent } from './cannot-find-page.component';

describe('CannotFindPageComponent', () => {
  let component: CannotFindPageComponent;
  let fixture: ComponentFixture<CannotFindPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannotFindPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CannotFindPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
