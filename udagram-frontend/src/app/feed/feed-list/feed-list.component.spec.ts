import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedListComponent } from './feed-list.component';

describe('FeedListComponent', () => {
  let component: FeedListComponent;
  let fixture: ComponentFixture<FeedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
