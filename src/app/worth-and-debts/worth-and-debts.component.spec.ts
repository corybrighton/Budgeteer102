import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorthAndDebtsComponent } from './worth-and-debts.component';

describe('WorthAndDebtsComponent', () => {
  let component: WorthAndDebtsComponent;
  let fixture: ComponentFixture<WorthAndDebtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorthAndDebtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorthAndDebtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
