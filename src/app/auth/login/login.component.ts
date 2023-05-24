import {Component} from '@angular/core';
import {Router} from '@angular/router';
import axios from 'axios';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(private fb: FormBuilder, private router: Router) {
  }


  async submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      try {
        const x = await axios.get('http://localhost:4200');
        this.router.navigate(['/dash']);
        console.log("Hello:", formData, x.data)
      }catch (e) {

      }
    }
  }
}
