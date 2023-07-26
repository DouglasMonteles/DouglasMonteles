import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify if the correct description was settled in the component controller', () => {
    expect(component.text).toEqual('Copyright ©. Todos os direitos reservados.');
  });

  it('should verify if the correct description is showed in the screen', () => {
    const compiled = fixture.nativeElement;
    const showedText = compiled.querySelector('footer').textContent.trim();

    expect(showedText).toEqual('Copyright ©. Todos os direitos reservados.');
  });
});
