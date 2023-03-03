import { Component } from '@angular/core';

@Component({
  selector: 'app-create-internship',
  templateUrl: './create-internship.component.html',
  styleUrls: ['./create-internship.component.css']
})
export class CreateInternshipComponent {
  company_name: String = "";
  internship_position: String = "";
  internship_registration_link: String = "";
  internship_date: String = "";
}
