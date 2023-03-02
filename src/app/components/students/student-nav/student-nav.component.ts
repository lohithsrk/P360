import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/services/student-data.service';
import { StudentData } from 'src/app/interfaces/student-data';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  providers:[StudentDataService]
})
export class StudentNavComponent implements OnInit {
   data: StudentData[]=[]
   constructor(private studentDataService : StudentDataService){}
  ngOnInit(): void {
      this.data=this.studentDataService.data
  }
  }

