import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { InputComponent } from './components/forms/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsetAnalysisComponent } from './pages/TPO/skillset-analysis/skillset-analysis.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, InputComponent, SkillsetAnalysisComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
