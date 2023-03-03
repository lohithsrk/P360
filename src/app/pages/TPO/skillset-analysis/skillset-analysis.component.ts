import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/services/student-data.service';
import { StudentData } from 'src/app/interfaces/student-data';

@Component({
  selector: 'app-skillset-analysis',
  templateUrl: './skillset-analysis.component.html',
})
export class SkillsetAnalysisComponent implements OnInit {
  studentSkillsetData: StudentData[] = [];
  filteredStudents: StudentData[] = [];

  regNoFilters: String[] = [];
  filterType: String = 'regno';
  filteredRegNos: String[] = [];
  filteredTestPercents: any[] = [];
  filteredGrandTestPercents: any[] = [];
  filteredDepts: any[] = [];

  constructor(private studentData: StudentDataService) {}

  ngOnInit(): void {
    this.studentSkillsetData = this.studentData.data;
    this.filteredStudents = this.studentData.data;
    this.regNoFilters = this.studentSkillsetData.map(
      (student) => student.academy.registrationNumber
    );
    this.handleRegChange('All', 'r');
    this.handleTestPercentFilterChange('All', '');
    this.handleGrandTestPercentFilterChange('All', '');
    this.handleDeptChange('All', '');
  }

  handleRegChange(regno: String, type: String): void {
    if (type == 'r') {
      this.filterType = 'r';
    }
    if (regno === 'All') {
      this.filteredRegNos = this.studentSkillsetData.map(
        (stu) => stu.academy.registrationNumber
      );
    } else {
      this.filteredRegNos = [
        this.studentSkillsetData.filter(
          (student) => student.academy.registrationNumber === regno
        )[0].academy.registrationNumber,
      ];
    }
  }

  handleDeptChange(dept: any, type: String): void {
    if (type == 'd') {
      this.filterType = 'd';
    }
    if (dept === 'All') {
      this.filteredDepts = this.studentSkillsetData.map(
        (stu) => stu.academy.registrationNumber
      );
    } else {
      this.filteredDepts = [
        ...this.studentSkillsetData
          .filter((student) => {
            return student.departmant.toLowerCase() == dept.toLowerCase();
          })
          .map((stu) => stu.academy.registrationNumber),
      ];
    }
  }
  handleTestPercentFilterChange(p: any, type: String): void {
    if (type == 'p') {
      this.filterType = 'p';
    }
    if (p === 'All') {
      this.filteredTestPercents = this.studentSkillsetData.map(
        (stu) => stu.academy.registrationNumber
      );
    } else {
      this.filteredTestPercents = [
        ...this.studentSkillsetData
          .filter((student) => {
            return (
              student.academy.testModulePercentage <= p &&
              student.academy.testModulePercentage >= p - 25
            );
          })
          .map((stu) => stu.academy.registrationNumber),
      ];
    }
    // findCommon(): void {
    //   var filters = [this.filteredRegNos, this.filteredTestPercents];
    //   var flag = 0;
    //   filters.forEach((filter) => {
    //     if (filter.length == 0) {
    //       flag += 1;
    //     }
    //   });
    //   if (flag == filters.length) {
    //     this.filteredStudents = this.studentSkillsetData;
    //   } else {
    //     var filtered: StudentData[] = [];

    //     this.filteredRegNos.forEach((filteredRegNo) => {
    //       this.filteredTestPercents.forEach((filteredTestPercent) => {
    //         console.log(filteredRegNo, filteredTestPercent);

    //         if (
    //           filteredRegNo.academy.registrationNumber ===
    //           filteredTestPercent.academy.registrationNumber
    //         ) {
    //           filtered.push(filteredTestPercent);
    //         }
    //       });
    //     });
    //   }
    // }
  }
  handleGrandTestPercentFilterChange(p: any, type: String): void {
    if (type == 'gp') {
      this.filterType = 'gp';
    }
    if (p === 'All') {
      this.filteredGrandTestPercents = this.studentSkillsetData.map(
        (stu) => stu.academy.registrationNumber
      );
    } else {
      this.filteredGrandTestPercents = [
        ...this.studentSkillsetData
          .filter((student) => {
            return (
              student.academy.testModulePercentage <= p &&
              student.academy.testModulePercentage >= p - 25
            );
          })
          .map((stu) => stu.academy.registrationNumber),
      ];
    }
    // findCommon(): void {
    //   var filters = [this.filteredRegNos, this.filteredTestPercents];
    //   var flag = 0;
    //   filters.forEach((filter) => {
    //     if (filter.length == 0) {
    //       flag += 1;
    //     }
    //   });
    //   if (flag == filters.length) {
    //     this.filteredStudents = this.studentSkillsetData;
    //   } else {
    //     var filtered: StudentData[] = [];

    //     this.filteredRegNos.forEach((filteredRegNo) => {
    //       this.filteredTestPercents.forEach((filteredTestPercent) => {
    //         console.log(filteredRegNo, filteredTestPercent);

    //         if (
    //           filteredRegNo.academy.registrationNumber ===
    //           filteredTestPercent.academy.registrationNumber
    //         ) {
    //           filtered.push(filteredTestPercent);
    //         }
    //       });
    //     });
    //   } // }
  }
}
