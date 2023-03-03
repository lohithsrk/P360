import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SkillsetAnalysisComponent } from './pages/TPO/skillset-analysis/skillset-analysis.component';
import { IntershipComponent } from './pages/StudentDashboard/intership/intership.component';
import { RoadmapComponent } from './pages/StudentDashboard/roadmap/roadmap.component';
import { StudentProfileComponent } from './pages/StudentDashboard/student-profile/student-profile.component';
import { ProjectsComponent } from './pages/StudentDashboard/projects/projects.component';
// import { SkillsetAnalysisComponent } from './pages/TPO/skillset-analysis/skillset-analysis.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'skillset',
    component: SkillsetAnalysisComponent,
  },
  {
    path: 'roadmap',
    component: RoadmapComponent,
  },
  {
    path: 'internship',
    component: IntershipComponent,
  },
  {
    path: 'about',
    component: StudentProfileComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
