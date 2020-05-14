import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModNavbarComponent } from './mod-navbar.component';

describe('ModNavbarComponent', () => {
  let component: ModNavbarComponent;
  let fixture: ComponentFixture<ModNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
