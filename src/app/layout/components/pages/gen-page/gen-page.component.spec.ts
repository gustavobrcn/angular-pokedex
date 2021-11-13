import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenPageComponent } from './gen-page.component';

describe('GenPageComponent', () => {
  let component: GenPageComponent;
  let fixture: ComponentFixture<GenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
