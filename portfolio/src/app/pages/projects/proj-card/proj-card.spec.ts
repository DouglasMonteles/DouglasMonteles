import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjCard } from './proj-card';

describe('ProjCard', () => {
  let component: ProjCard;
  let fixture: ComponentFixture<ProjCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
