import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovileComponent } from './movile.component';

describe('MovileComponent', () => {
  let component: MovileComponent;
  let fixture: ComponentFixture<MovileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
