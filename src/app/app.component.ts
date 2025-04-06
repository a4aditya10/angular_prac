import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None // Added for styling to work properly in Shadow DOM. This will not work in Angular CLI's default view encapsulation.
})
export class AppComponent {
  fullName = '';
  email = '';
  password = '';
  gender = 'male';
  dob: Date | null = null;
  skills = {
    angular: false,
    react: false,
    node: false
  };
  country = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
 
  get selectedSkills() {
    return Object.keys(this.skills).filter(
      (skill) => this.skills[skill as keyof typeof this.skills]
    );
  }
}
