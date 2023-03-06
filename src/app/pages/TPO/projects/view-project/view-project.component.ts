import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
})

export class ViewProjectComponent implements OnInit {

  ngOnInit(): void {
    this.http.get("http://localhost:8080/projects").subscribe((res) => {
      this.allData.push(res)
    })
  }

  project_name: any;
  student_rollno: any;
  project_description: any;
  project_score: any;

  constructor(private http: HttpClient, private router: Router) { }

  editButton: Boolean = false;

  editArray: any = {};

  allData: any = [];


  closeButton() {
    this.editButton = !this.editButton

  }

  editItem: any;

  editFunction(item: any) {
    this.editButton = !this.editButton
    this.editItem = item.id;
    this.editArray = item;
    this.project_name = item.project_name
    this.student_rollno = item.student_rollno
    this.project_description = item.project_description
    this.project_score = item.project_score
  }

  editProject() {
    this.http.put(`http://localhost:8080/project/update/${this.editItem}`, {
      project_name: this.project_name,
      student_rollno: this.student_rollno,
      project_description: this.project_description,
      project_score: this.project_score,
    }).subscribe((res) => {
      console.log(res);
      this.editButton = !this.editButton
    })
  }





  deleteProject(id: any) {
    try {
      this.http.delete(`http://localhost:8080/project/delete/${id}`).subscribe((res) => {
        console.log(res);
        this.router.navigate(["/project/view"])
      })
    } catch (error) {
      console.log(error);
    }
    this.router.navigate(["/project/view"])
  }

}
