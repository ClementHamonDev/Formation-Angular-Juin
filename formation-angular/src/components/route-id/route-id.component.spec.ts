import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteIdComponent } from './route-id.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RouteIdComponent', () => {
  let component: RouteIdComponent;
  let fixture: ComponentFixture<RouteIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteIdComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
