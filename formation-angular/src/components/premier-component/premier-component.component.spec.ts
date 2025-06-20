import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierComponentComponent } from './premier-component.component';

describe('PremierComponentComponent', () => {
  let component: PremierComponentComponent;
  let fixture: ComponentFixture<PremierComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremierComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremierComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
