import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeytrackerComponent } from './keytracker.component';

describe('KeytrackerComponent', () => {
  let component: KeytrackerComponent;
  let fixture: ComponentFixture<KeytrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeytrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeytrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
