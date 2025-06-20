import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirectionnelComponent } from './bidirectionnel.component';

describe('BidirectionnelComponent', () => {
  let component: BidirectionnelComponent;
  let fixture: ComponentFixture<BidirectionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidirectionnelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidirectionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
