import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-roadmap',
  templateUrl: './create-roadmap.component.html',
  styleUrls: ['./create-roadmap.component.css']
})
export class CreateRoadmapComponent {

  topic: any;
  sub_topic: any;
  description: any;
  links: any;

  constructor(private http: HttpClient, private router: Router) { }


  createRoadmap() {
    this.http.post(`http://localhost:8080/roadmap`, {
      topic: this.topic,
      sub_topic: this.sub_topic,
      description: this.description,
      links: this.links,
    }).subscribe((res) => {
      console.log(res);
      alert("Success")
      this.router.navigate(["/roadmap/view"])

    })
  }

}
