import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
})
export class CreateProjectComponent {

  project_name: any;
  student_rollno: any;
  project_description: any;
  project_score: any;


  constructor(private http: HttpClient, private router: Router) { }

  createProject() {
    try {
      this.http.post("http://localhost:8080/project/create", {
        project_name: this.project_name,
        student_rollno: this.student_rollno,
        project_description: this.project_description,
        project_score: this.project_score
      }).subscribe((res) => {
        console.log(res);
        alert("Success")
        this.router.navigate(["/project/view"])
      })
    } catch (error) {
      console.log(error);

    }

  }

}
