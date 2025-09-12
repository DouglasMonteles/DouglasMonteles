import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpCard } from './xp-card';

describe('XpCard', () => {
  let component: XpCard;
  let fixture: ComponentFixture<XpCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XpCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XpCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
