import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SkillsetAnalysisComponent } from './pages/TPO/skillset-analysis/skillset-analysis.component';
import { IntershipComponent } from './pages/intership/intership.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: SkillsetAnalysisComponent,
  },
  {
    path: 'intership',
    component: IntershipComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
