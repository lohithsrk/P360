import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/services/student-data.service';
import { StudentData } from 'src/app/interfaces/student-data';

@Component({
  selector: 'app-skillset-analysis',
  templateUrl: './skillset-analysis.component.html',
  styleUrls: ['./skillset-analysis.component.css'],
})
export class SkillsetAnalysisComponent implements OnInit {
  studentSkillsetData: StudentData[] = [];
  regNoFilters = <Set<String>>{};
  constructor(private studentData: StudentDataService) {}

  ngOnInit(): void {
    this.studentSkillsetData = this.studentData.data.map((d) => ({
      ...d,
      show: false,
    }));
    this.regNoFilters = new Set(
      this.studentSkillsetData.map((data) => data.registrationNumber)
    );
  }

  handleRegFilterChange(regno: String) {
    var all = this.studentData.data.map((d) => {
      return {
        ...d,
        show: d.registrationNumber === regno ? !d.show : d.show,
      };
    });
    var studentSkillsetData = this.studentSkillsetData;
    this.studentSkillsetData = [];
    all.forEach((a) => {
      studentSkillsetData.forEach((data) => {
        if (a.show == true && data.show == true && a.show == data.show) {
          this.studentSkillsetData.push(a);
        }
      });
    });
  }
  handleTestPercentFilterChange(p: Number) {
    var all = this.studentData.data.map((d) => {
      return {
        ...d,
        show: d.testModulePercentage <= p ? !d.show : d.show,
      };
    });
    var studentSkillsetData = this.studentSkillsetData;
    console.log(
      '🚀 ~ file: skillset-analysis.component.ts:55 ~ SkillsetAnalysisComponent ~ handleTestPercentFilterChange ~ studentSkillsetData:',
      studentSkillsetData
    );
    this.studentSkillsetData = [];
    all.forEach((a) => {
      studentSkillsetData.forEach((data) => {
        if (a.show == true && data.show == true && a.show == data.show) {
          this.studentSkillsetData.push(a);
        }
      });
    });
  }
  handleGrandTestPercentFilterChange(p: Number) {
    this.studentSkillsetData = this.studentSkillsetData.map((d) => {
      return {
        ...d,
        show: d.testModulePercentage <= p ? !d.show : d.show,
      };
    });
  }
}
