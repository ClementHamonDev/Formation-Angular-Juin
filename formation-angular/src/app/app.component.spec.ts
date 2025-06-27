import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideMockStore({})]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should add', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.addNumber(2, 3)).toEqual(5);
  });

  it('should show me a word upper cased', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.maj("mot")).toBe('MOT')
  })

  it('doit filtrer et trier les utilisateurs correctement (minAge = 25)', () => {
    const users = [
      { name: 'Charlie', age: 35 },
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'David', age: 20 }
    ];

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.filterAndSortUsers(users, 25);
    expect(result).toEqual([
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 }
    ]);
  });

  it('doit retourner un tableau vide si aucun utilisateur ne correspond', () => {
    const users = [
      { name: 'Eve', age: 18 },
      { name: 'Frank', age: 19 }
    ];

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.filterAndSortUsers(users, 25); 
    expect(result).toEqual([]);
  });

});
