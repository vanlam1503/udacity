import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedUploadComponent } from './feed-upload.component';

describe('FeedUploadComponent', () => {
  let component: FeedUploadComponent;
  let fixture: ComponentFixture<FeedUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
