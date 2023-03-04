import { Component, OnInit } from '@angular/core';
import { ProjectData } from 'src/app/interfaces/project-data';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  providers:[ProjectDataService]
})
export class ProjectsComponent implements OnInit{
  // implements OnInit
  data: ProjectData[]=[]
  constructor(private projectService: ProjectDataService) {}
  ngOnInit(): void {
      this.data=this.projectService.data.slice()
  }
}
