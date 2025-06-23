import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantCComponent } from './composant-c.component';

describe('ComposantCComponent', () => {
  let component: ComposantCComponent;
  let fixture: ComponentFixture<ComposantCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
