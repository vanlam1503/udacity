import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMenuUserComponent } from './auth-menu-user.component';

describe('AuthMenuUserComponent', () => {
  let component: AuthMenuUserComponent;
  let fixture: ComponentFixture<AuthMenuUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthMenuUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthMenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
