import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from './navigation.component';

// Criar um mock para o BreakpointObserver usando um valor fixo para isHandset$
const mockBreakpointObserver = {
  observe: (): Observable<any> => of({ matches: true }), // Valor fixo para isHandset$
};

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent,
        FooterComponent,
      ],
      imports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterModule,
      ],
      providers: [
        {
          provide: BreakpointObserver,
          useValue: mockBreakpointObserver
        }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should render with "role=dialog" when isHandset$ is true', () => {
    // Verificar se o valor do atributo 'role' é igual a 'dialog' quando isHandset$ é true
    const element: HTMLElement = fixture.nativeElement;
    const dialogElement = element.querySelector('[role="dialog"]');
    expect(dialogElement).toBeTruthy();
  });

  it('should render with "role=navigation" when isHandset$ is false', () => {
    // Atualizar o valor de isHandset$ para false (um cenário em que não é dispositivo móvel)
    const breakpointObserver = TestBed.inject(BreakpointObserver) as any;
    (breakpointObserver).activePropertyChanged = of();

    // Disparar a detecção de alterações para atualizar a renderização com o novo valor de isHandset$
    fixture.detectChanges();

    // Verificar se o valor do atributo 'role' é igual a 'navigation' quando isHandset$ é false
    const element: HTMLElement = fixture.nativeElement;
    const navigationElement = element.querySelector('[role="navigation"]');
    expect(navigationElement).toBeTruthy();
  });

  it('should show the mat-toolbar description', () => {
    const element: HTMLElement = fixture.nativeElement;
    const matToolbarText = element.querySelector('mat-toolbar')?.textContent;
    expect(matToolbarText).toEqual('Acesso rápido');
  });

  it('should show the side-nav-list with the available menu options', () => {
    const element: HTMLElement = fixture.nativeElement;
    const menuOptions = element.querySelector('mat-nav-list');
    expect(menuOptions?.textContent).not.toBeNull();
    expect(menuOptions?.children.length).toBeGreaterThan(0);
  });
});
