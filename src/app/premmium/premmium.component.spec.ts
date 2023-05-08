import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremmiumComponent } from './premmium.component';

describe('PremmiumComponent', () => {
  let component: PremmiumComponent;
  let fixture: ComponentFixture<PremmiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremmiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremmiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
