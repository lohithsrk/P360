import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-internship',
  templateUrl: './view-internship.component.html',
})
export class ViewInternshipComponent implements OnInit {
  ngOnInit(): void {
    this.http.get("http://localhost:8080/internship").subscribe((res) => {
      this.allData.push(res)
    })
  }

  internship_name: any;
  inernship_description: any;
  link: any;

  editButton: Boolean = false;

  editArray: any = {};

  allData: any = []

  constructor(private http: HttpClient) { }

  editSubmit() {
    this.http.put(`http://localhost:8080/internship/${this.editItem}`, {
      internship_name: this.internship_name,
      inernship_description: this.inernship_description,
      link: this.link,
    }).subscribe((res) => {
      console.log(res);
    })
  }

  closeButton() {
    this.editButton = !this.editButton
  }

  editItem: any;

  editFunction(item: any) {
    this.editButton = !this.editButton
    this.editArray = item;
    this.editItem = item.id;
    this.internship_name = item.internship_name;
    this.inernship_description = item.inernship_description;
    this.link = item.link;

  }
}
