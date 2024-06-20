import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRegularComponent } from './nav-regular.component';

describe('NavRegularComponent', () => {
  let component: NavRegularComponent;
  let fixture: ComponentFixture<NavRegularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavRegularComponent]
    });
    fixture = TestBed.createComponent(NavRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
