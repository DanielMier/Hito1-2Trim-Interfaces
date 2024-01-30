import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PircingComponent } from './pircing.component';

describe('PircingComponent', () => {
  let component: PircingComponent;
  let fixture: ComponentFixture<PircingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PircingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PircingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
