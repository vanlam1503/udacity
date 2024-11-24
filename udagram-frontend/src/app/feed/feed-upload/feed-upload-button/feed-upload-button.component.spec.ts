import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedUploadButtonComponent } from './feed-upload-button.component';

describe('FeedUploadButtonComponent', () => {
  let component: FeedUploadButtonComponent;
  let fixture: ComponentFixture<FeedUploadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedUploadButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedUploadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
