import { Component, Input } from '@angular/core';
import { RoadmapData } from 'src/app/interfaces/roadmap';

@Component({
  selector: 'app-roadmap-roles',
  templateUrl: './roadmap-roles.component.html',
})
export class RoadmapRolesComponent {
  @Input() domain=<RoadmapData>{};
}
