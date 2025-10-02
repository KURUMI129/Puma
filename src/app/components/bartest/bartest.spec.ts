import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bartest } from './bartest';

describe('Bartest', () => {
  let component: Bartest;
  let fixture: ComponentFixture<Bartest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bartest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bartest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
