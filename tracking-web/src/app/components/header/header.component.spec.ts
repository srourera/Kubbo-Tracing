import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let header: HeaderComponent;
  let router: Router;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    router = TestBed.get(Router);
    header = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Given
    // Then
    expect(header).toBeTruthy();
  });

  it(`should have as title 'kubbo smart logistics'`, () => {
    // Given
    // Then
    expect(header.title).toEqual('kubbo smart logistics');
  });

  it(`should have as title 'kubbo smart logistics'`, () => {
    // Given
    spyOn(router,'navigate');
    // When
    header.goHome();
    // Then
    expect(router.navigate).toHaveBeenCalled();
  });
});
