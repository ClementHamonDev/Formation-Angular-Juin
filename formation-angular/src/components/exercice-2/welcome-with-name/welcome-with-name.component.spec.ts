import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeWithNameComponent } from './welcome-with-name.component';

describe('WelcomeWithNameComponent', () => {
  let component: WelcomeWithNameComponent;
  let fixture: ComponentFixture<WelcomeWithNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeWithNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeWithNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
