import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    middleName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    date: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    role: new FormControl('', [Validators.required])
  })

  roles = [
    {value: 'admin'},
    {value: 'ordinary'},
  ];

  async submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;

      try {
        //await axios.post('URL_DE_LA_API', formData);
        console.log("Hello:", formData);
        this.router.navigate(['/dash']);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    }
  }
  constructor(private fb: FormBuilder, private router: Router) {
  }
}
