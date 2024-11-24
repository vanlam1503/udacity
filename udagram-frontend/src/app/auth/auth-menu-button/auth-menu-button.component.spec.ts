import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMenuButtonComponent } from './auth-menu-button.component';

describe('AuthMenuButtonComponent', () => {
  let component: AuthMenuButtonComponent;
  let fixture: ComponentFixture<AuthMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthMenuButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
