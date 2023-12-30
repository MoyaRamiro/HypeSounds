import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLibraryComponent } from './track-library.component';

describe('TrackLibraryComponent', () => {
  let component: TrackLibraryComponent;
  let fixture: ComponentFixture<TrackLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
