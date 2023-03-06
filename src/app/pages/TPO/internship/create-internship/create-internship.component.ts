import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-internship',
  templateUrl: './create-internship.component.html',

})
export class CreateInternshipComponent {

  internship_name: any;
  inernship_description: any;
  link: any;

  constructor(private http: HttpClient) { }


  submit() {
    this.http.post(`http://localhost:8080/internship`, {
      internship_name: this.internship_name,
      inernship_description: this.inernship_description,
      link: this.link,
    }).subscribe((res) => {
      // console.log(res);
      alert("Internship Added successfully")
    })
  }


}
