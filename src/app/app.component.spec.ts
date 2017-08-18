import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;
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
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    component.ok_list = [];
    component.fail_list = [];
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render the input', async(() => {
    expect(compiled.querySelector('#input_text')).toBeTruthy();
  }));

  it('should render the button', async(() => {
    expect(compiled.querySelector('#check_btn')).toBeTruthy();
  }));

  it('should call the check_palindrome function when user click the button', async(() => {
    let spy = spyOn(component, 'check_palindrome');

    fixture.nativeElement.querySelector('#check_btn').click();

    expect(spy).toHaveBeenCalled();
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

    let inverted = TEXT_6.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''); 

    component.check_palindrome(TEXT_6);

    expect(component.fail_list.length).toBe(1);
    expect(component.fail_list[0]).toBe(inverted);
  });

  it('should catch an error when user check with empty input', () => {
    expect(() => {component.check_palindrome(null)}).not.toThrowError();
    expect(() => {component.check_palindrome('')}).not.toThrowError();
  });
});
