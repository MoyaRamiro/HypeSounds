import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundPacksComponent } from './sound-packs.component';

describe('SoundPacksComponent', () => {
  let component: SoundPacksComponent;
  let fixture: ComponentFixture<SoundPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundPacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoundPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
