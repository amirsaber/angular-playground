import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MdTabsModule } from '@angular/material';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MdTabsModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  it('should create the AppComponent', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have home in navLinks`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const index = app.navLinks.findIndex((navLink) => {
      return navLink.link === 'home';
    });
    expect(index).toBeGreaterThan(-1);
  }));

  it(`should have Home as label in navLinks`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const index = app.navLinks.findIndex((navLink) => {
      return navLink.link === 'home';
    });
    expect(app.navLinks[index].label).toEqual('Home');
  }));

  it(`should have form in navLinks`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const index = app.navLinks.findIndex((navLink) => {
      return navLink.link === 'form';
    });
    expect(index).toBeGreaterThan(-1);
  }));

  it(`should have Form as label in navLinks`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const index = app.navLinks.findIndex((navLink) => {
      return navLink.link === 'form';
    });
    expect(app.navLinks[index].label).toEqual('Form');
  }));

  it('should render navLinks rendered in nav > a', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const elements = compiled.querySelectorAll('nav a');
    elements.forEach((element) => {
      const text: String = element.textContent.trim();
      const href: String = element.getAttribute('href');
      let index = app.navLinks.findIndex((navLink) => {
        return navLink.label === text;
      });
      expect(index).toBeGreaterThan(-1);
      index = app.navLinks.findIndex((navLink) => {
        return navLink.link === href.substring(1);
      });
      expect(index).toBeGreaterThan(-1);
    });
  }));

  it('should have a router-outlet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const elements = compiled.querySelectorAll('router-outlet');
    expect(elements.length).toEqual(1);
  }));
});
