import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  }));

  it('should create the HomeComponent', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  }));

  it(`should have as title 'Angular Playground Home Page'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home.title).toEqual('Angular Playground Home Page');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Playground Home Page');
  }));
});
