import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { InputComponent } from './components/forms/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsetAnalysisComponent } from './pages/TPO/skillset-analysis/skillset-analysis.component';
import { IntershipComponent } from './pages/StudentDashboard/intership/intership.component';
import { FilterPipe } from './pipes/filter.pipe';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// import { SkillsetAnalysisComponent } from './pages/TPO/skillset-analysis/skillset-analysis.component';
import { RoadmapComponent } from './pages/StudentDashboard/roadmap/roadmap.component';
import { RoadmapNavComponent } from './components/roadmap-nav/roadmap-nav.component';
import { RoadmapRolesComponent } from './components/roadmap-roles/roadmap-roles.component';
import { StudentProfileComponent } from './pages/StudentDashboard/student-profile/student-profile.component';
import { StudentNavComponent } from './components/students/student-nav/student-nav.component';
import { StudentDetailsComponent } from './components/students/student-details/student-details.component';
import { AboutStudentComponent } from './pages/StudentDashboard/studentProfilePages/about-student/about-student.component';
import { StudentProfileDetailsComponent } from './components/students/student-profile-details/student-profile-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateInternshipComponent } from './pages/TPO/internship/create-internship/create-internship.component';
import { ViewInternshipComponent } from './pages/TPO/internship/view-internship/view-internship.component';
import { ProjectsComponent } from './pages/StudentDashboard/projects/projects.component';
import { ProjectsPageComponent } from './components/students/projects-page/projects-page.component';

import { ViewProjectComponent } from './pages/TPO/projects/view-project/view-project.component';
import { CreateProjectComponent } from './pages/TPO/projects/create-project/create-project.component';
import { SidebarComponent } from './pages/TPO/sidebar/sidebar.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    SkillsetAnalysisComponent,
    IntershipComponent,
    FilterPipe,
    RoadmapComponent,
    RoadmapNavComponent,
    RoadmapRolesComponent,
    StudentProfileComponent,
    StudentNavComponent,
    StudentDetailsComponent,
    AboutStudentComponent,
    StudentProfileDetailsComponent,
    NavbarComponent,
    CreateInternshipComponent,
    ViewInternshipComponent,
    ProjectsComponent,
    CreateProjectComponent,
    ViewProjectComponent,
    SidebarComponent,
    ProjectsPageComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // Ng2SearchPipeModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
