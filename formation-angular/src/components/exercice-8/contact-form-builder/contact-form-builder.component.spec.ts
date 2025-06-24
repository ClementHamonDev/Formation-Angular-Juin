import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormBuilderComponent } from './contact-form-builder.component';

describe('ContactFormBuilderComponent', () => {
  let component: ContactFormBuilderComponent;
  let fixture: ComponentFixture<ContactFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
