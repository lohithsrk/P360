import { Component } from '@angular/core';

@Component({
  selector: 'app-view-internship',
  templateUrl: './view-internship.component.html',
})
export class ViewInternshipComponent {

  company_name: String = "";
  internship_position: String = "";
  internship_registration_link: String = "";
  internship_date: String = "";

  editButton: Boolean = false;

  editArray: any = {};


  allData: any = [
    {
      company_name: "abc company",
      internship_position: "Full Stack Developer",
      internship_registration_link: "link",
      internship_date: "13/08/2002"
    },
    {
      company_name: "abc company",
      internship_position: "Full Stack Developer",
      internship_registration_link: "link",
      internship_date: "13/08/2002"
    },
    {
      company_name: "abc company",
      internship_position: "Full Stack Developer",
      internship_registration_link: "link",
      internship_date: "13/08/2002"
    },
    {
      company_name: "abc company",
      internship_position: "Full Stack Developer",
      internship_registration_link: "link",
      internship_date: "13/08/2002"
    },
    {
      company_name: "abc company",
      internship_position: "Full Stack Developer",
      internship_registration_link: "link",
      internship_date: "13/08/2002"
    },
  ]

  editFunction(item: any) {
    this.editButton = !this.editButton
    this.editArray = item;
    console.log(item);
    this.company_name = item.company_name;
    this.internship_date = item.internship_date;
    



    // console.log(this.editArray);


  }
}
