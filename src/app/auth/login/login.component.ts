import {Component} from '@angular/core';
import {Router} from '@angular/router';
import axios from 'axios';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {AuthService} from "../../auth.service";

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

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }


  async submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      try {
        const x = await axios.get('http://localhost:4200');
        this.authService.setAuthenticated(true);
        this.authService.setUserData({name:"Jhair"});
        this.router.navigate(['/dash']);
        console.log("Hello:", formData, x.data)
      } catch (e) {

      }
    }
  }
}
