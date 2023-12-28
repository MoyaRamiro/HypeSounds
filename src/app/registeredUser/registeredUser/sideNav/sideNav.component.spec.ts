import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sideNavComponent } from './sideNav.component';

describe('DashboardComponent', () => {
  let component: sideNavComponent;
  let fixture: ComponentFixture<sideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [sideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(sideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
