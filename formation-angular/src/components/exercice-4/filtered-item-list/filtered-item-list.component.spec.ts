import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredItemListComponent } from './filtered-item-list.component';

describe('FilteredItemListComponent', () => {
  let component: FilteredItemListComponent;
  let fixture: ComponentFixture<FilteredItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
