import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAssnmntComponent } from './display-assnmnt.component';

describe('DisplayAssnmntComponent', () => {
  let component: DisplayAssnmntComponent;
  let fixture: ComponentFixture<DisplayAssnmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayAssnmntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayAssnmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
