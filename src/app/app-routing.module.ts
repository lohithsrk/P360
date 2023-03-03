import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
// import { SkillsetAnalysisComponent } from './pages/TPO/skillset-analysis/skillset-analysis.component';
import { IntershipComponent } from './pages/intership/intership.component';
import { RoadmapComponent } from './pages/StudentDashboard/roadmap/roadmap.component';
import { StudentProfileComponent } from './pages/StudentDashboard/student-profile/student-profile.component';
import { CreateInternshipComponent } from './pages/TPO/internship/create-internship/create-internship.component';
import { ViewInternshipComponent } from './pages/TPO/internship/view-internship/view-internship.component';
// import { SkillsetAnalysisComponent } from './pages/TPO/skillset-analysis/skillset-analysis.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'skillset',
  //   component: SkillsetAnalysisComponent,
  // },
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
    path: 'internship/create',
    component: CreateInternshipComponent,
  },
  {
    path: 'internship/view',
    component: ViewInternshipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
