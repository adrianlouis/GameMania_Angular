import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevendaComponent } from './prevenda.component';

describe('PrevendaComponent', () => {
  let component: PrevendaComponent;
  let fixture: ComponentFixture<PrevendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
