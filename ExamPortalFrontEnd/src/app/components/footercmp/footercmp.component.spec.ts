import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercmpComponent } from './footercmp.component';

describe('FootercmpComponent', () => {
  let component: FootercmpComponent;
  let fixture: ComponentFixture<FootercmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootercmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootercmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
