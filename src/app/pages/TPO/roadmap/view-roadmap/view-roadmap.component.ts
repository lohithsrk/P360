import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-roadmap',
  templateUrl: './view-roadmap.component.html',
  styleUrls: ['./view-roadmap.component.css']
})
export class ViewRoadmapComponent implements OnInit {

  ngOnInit(): void {
    this.http.get("http://localhost:8080/roadmaps").subscribe((res) => {
      this.allData.push(res)
      console.log(this.allData);

    })
  }

  constructor(private http: HttpClient, private router: Router) { }


  roadmap_topic: any;
  roadmap_subtopic: any;
  roadmap_description: any;
  roadmap_youtube: any;

  allData: any = []

  editItem: any;

  editFunction(item: any) {
    this.editButton = !this.editButton
    this.editItem = item.id;
    this.roadmap_topic = item.roadmap_topic
    this.roadmap_subtopic = item.roadmap_subtopic
    this.roadmap_description = item.roadmap_description
    this.roadmap_youtube = item.roadmap_youtube
  }

  editRoadmap() {
    this.http.put(`http://localhost:8080/roadmap/update/${this.editItem}`, {
      roadmap_topic: this.roadmap_topic,
      roadmap_subtopic: this.roadmap_subtopic,
      roadmap_description: this.roadmap_description,
      roadmap_youtube: this.roadmap_youtube,
    }).subscribe((res) => {
      console.log(res);
      this.editButton = !this.editButton
    })
  }

  deleteProject(id: any) {
    this.http.delete(`http://localhost:8080/roadmap/delete/${id}`).subscribe((res) => {
      console.log(res);
      this.router.navigate(["/roadmap/view"])
    })
  }

  editButton: boolean = false;

  closeButton() {
    this.editButton = !this.editButton
  }
}
