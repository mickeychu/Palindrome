import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const TEXT_1 = 'A man, a plan, a canal, Panama!';
  const TEXT_2 = 'Amor, Roma';
  const TEXT_3 = 'race car';
  const TEXT_4 = "No 'x' in Nixon";
  const TEXT_5 = 'Was it a car or a cat I saw?';
  const TEXT_6 = 'random';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ok_list = [];
    component.fail_list = [];
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should check the palindrome correctly', () => {

    expect(component.check_palindrome(TEXT_1)).toBe(true);
    expect(component.check_palindrome(TEXT_2)).toBe(true);
    expect(component.check_palindrome(TEXT_3)).toBe(true);
    expect(component.check_palindrome(TEXT_4)).toBe(true);
    expect(component.check_palindrome(TEXT_5)).toBe(true);
    expect(component.check_palindrome(TEXT_6)).toBe(false);
  });

  it('should push the correct word into the ok_list without changes and in alphabetically order', () => {
    component.check_palindrome(TEXT_3);
    component.check_palindrome(TEXT_1);

    expect(component.ok_list.length).toBe(2);
    expect(component.ok_list[0]).toBe(TEXT_1);
  });

  it('should push the incorrect word into the fail_list invertedly', () => {

    let inverted = TEXT_6.replace(/\W/g, '').toLowerCase().split('').reverse().join(''); 

    component.check_palindrome(TEXT_6);

    expect(component.fail_list.length).toBe(1);
    expect(component.fail_list[0]).toBe(inverted);
  });

  /*it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});
