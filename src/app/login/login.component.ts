import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: any;
  form = {
    email: '',
    password: '',
  };

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.form.email, [
        Validators.required,
        forbiddenNameValidator(
          /^ [a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@ [a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
        ),
      ]),
      password: new FormControl(this.form.password, Validators.required),
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public send(): void {
    console.log(this.email, this.password);
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
