import { Component, OnInit} from '@angular/core';
import { RoadmapData } from 'src/app/interfaces/roadmap';
import { RoadmapService } from 'src/app/services/roadmap.service';

@Component({
  selector: 'app-roadmap-nav',
  templateUrl: './roadmap-nav.component.html',
  providers: [RoadmapService]

})
export class RoadmapNavComponent implements OnInit{
  data: RoadmapData[]=[]
  constructor(private roadmapService: RoadmapService) {}
  ngOnInit(): void {
      this.data=this.roadmapService.data
  }
}
