import { Component } from '@angular/core';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent {
  mobile: string = '';
  presentAddress: string = '';
  permanentAddress: string = '';

  copyAddress() {
    this.permanentAddress = this.presentAddress;
  }

  onSubmit() {
    console.log('Mobile:', this.mobile);
    console.log('Present:', this.presentAddress);
    console.log('Permanent:', this.permanentAddress);
    alert('Form submitted successfully!');
  }
}
