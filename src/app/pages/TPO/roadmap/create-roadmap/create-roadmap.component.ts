import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-roadmap',
  templateUrl: './create-roadmap.component.html',
  styleUrls: ['./create-roadmap.component.css']
})
export class CreateRoadmapComponent {

  roadmap_topic: any;
  roadmap_subtopic: any;
  roadmap_description: any;
  roadmap_youtube: any;

  constructor(private http: HttpClient, private router: Router) { }


  createRoadmap() {
    this.http.post(`http://localhost:8080/roadmap/create`, {
      roadmap_topic: this.roadmap_topic,
      roadmap_subtopic: this.roadmap_subtopic,
      roadmap_description: this.roadmap_description,
      roadmap_youtube: this.roadmap_youtube,
    }).subscribe((res) => {
      console.log(res);
      alert("Success")
      this.router.navigate(["/roadmap/view"])

    })
  }

}
