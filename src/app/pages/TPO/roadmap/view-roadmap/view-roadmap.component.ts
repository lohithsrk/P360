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
    this.http.get("http://localhost:8080/roadmap").subscribe((res) => {
      this.allData.push(res)
      console.log(this.allData);
    })
  }
  constructor(private http: HttpClient, private router: Router) { }

  topic: any;
  sub_topic: any;
  description: any;
  links: any;

  allData: any = []

  editItem: any;

  editFunction(item: any) {
    this.editButton = !this.editButton
    this.editItem = item.id;
    this.topic = item.topic
    this.sub_topic = item.sub_topic
    this.description = item.description
    this.links = item.links
  }

  editRoadmap() {
    this.http.put(`http://localhost:8080/roadmap/update/${this.editItem}`, {
      topic: this.topic,
      sub_topic: this.sub_topic,
      description: this.description,
      links: this.links,
    }).subscribe((res) => {
      console.log(res);
      this.editButton = !this.editButton
    })
  }

  deleteProject(id: any) {
    this.http.delete(`http://localhost:8080/roadmap/${id}`).subscribe((res) => {
      console.log(res);
      this.router.navigate(["/roadmap/view"])
    })
    this.http.get("http://localhost:8080/roadmap").subscribe((res) => {
      this.allData.push(res)
      console.log(this.allData);
    })
  }

  editButton: boolean = false;

  closeButton() {
    this.editButton = !this.editButton
  }
}
