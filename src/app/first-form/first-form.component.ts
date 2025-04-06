import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  dob: Date | null = null;
  skills = {
    angular: false,
    react: false,
    node: false
  };
  country: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Form submitted!');
    this.router.navigate(['/step2']);
  }
}
