import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LinkCardComponent } from './link-card.component';

describe('LinkCardComponent', () => {
  let component: LinkCardComponent;
  let fixture: ComponentFixture<LinkCardComponent>;
  let router: Router;

  const socialCardInformationMock = {
    title: 'Nome da rede social',
    subtitle: 'Rede social',
    link: 'https://redesocial.com',
    imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkCardComponent],
      imports: [
        MatCardModule,
      ]
    });
    fixture = TestBed.createComponent(LinkCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show card information', () => {
    component.title = socialCardInformationMock.title;
    component.subtitle = socialCardInformationMock.subtitle;
    component.link = socialCardInformationMock.link;
    component.imageLink = socialCardInformationMock.imageLink;
    component.compressedTitle = socialCardInformationMock.title;

    // forces the component to reload with the new information
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element).not.toBeNull();

    const matCardImage: HTMLImageElement | null = element.querySelector('mat-card img');
    expect(matCardImage?.src).toContain(socialCardInformationMock.imageLink);
    expect(matCardImage?.alt).toContain(socialCardInformationMock.title + ' ' + socialCardInformationMock.subtitle);

    const matCardHeader: Element | null = element.querySelector('mat-card mat-card-header');
    expect(matCardHeader?.textContent).toContain(socialCardInformationMock.title);
    expect(matCardHeader?.textContent).toContain('Rede social');

    const matCardOptions: Element | null = element.querySelector('mat-card div a');
    expect(matCardOptions?.textContent?.trim()).toContain(`Ir para ${socialCardInformationMock.title}`);
  });

  it('should handle the action when the \'Ir para [...]\' button is clicked', () => {
    component.link = socialCardInformationMock.link;
    fixture.detectChanges();

    const matCardLink: DebugElement = fixture.debugElement.query(By.css('div a'));

    // Prevent that the click make a real redirection
    // matCardLink.nativeElement.dispatchEvent(new Event('click'));
    matCardLink.nativeElement.addEventListener('click', () => {
      expect((matCardLink.nativeElement as HTMLLinkElement).href).toEqual(`${socialCardInformationMock.link}/`);
    });

    // Execute the click without the real redirection
    matCardLink.nativeElement.dispatchEvent(new Event('click'));
  });
});
