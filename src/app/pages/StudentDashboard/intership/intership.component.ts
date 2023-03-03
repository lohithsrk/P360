import { Component, OnInit } from '@angular/core';
import { InternshipData } from 'src/app/interfaces/internship-data';
import { IntershipDataService } from 'src/app/services/intership-data.service';
import {Sort} from '@angular/material/sort'



@Component({
  selector: 'app-intership',
  templateUrl: './intership.component.html',
})
export class IntershipComponent implements OnInit {
  filterString: string = '';
  internshipData: InternshipData[] = [];
  intershipCompanyFilters = <Set<String>>{};
  internshipRoleFilters = <Set<String>>{};
  internshipTypeFilters = <Set<String>>{};
  internshipCountryFilters = <Set<String>>{};



  constructor(private internshipDataa: IntershipDataService) {
    this.sortedIntershipData = this.internshipData.slice()
  }

  ngOnInit(): void {
    this.internshipData = this.internshipDataa.data.map((d) => ({ ...d }));
    this.intershipCompanyFilters = new Set(
      this.internshipData.map((data) => data.companyName)
    );
    this.internshipRoleFilters = new Set(
      this.internshipData.map((data) => data.role)
    );
    this.internshipTypeFilters = new Set(
      this.internshipData.map((data) => data.intershipType)
    );
    this.internshipCountryFilters = new Set(
      this.internshipData.map((data) => data.country)
    );
  }

  sortedIntershipData: InternshipData[];

  sortData(sort: Sort){
    const data = this.internshipData.slice();
    if(!sort.active || sort.direction === ''){
      this.sortedIntershipData = data;
      return;
    }

    this.sortedIntershipData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'companyname':
          return compare(a.companyName[0], b.companyName[0], isAsc);
        case 'role':
          return compare(a.country[0], b.country[0], isAsc)
        case 'internshiptype':
          return compare(a.intershipType[0], b.intershipType[0], isAsc)
        case 'country':
          return compare(a.intershipType[0], b.intershipType[0], isAsc)
        case 'internshiptype':
          return compare(a.intershipType[0], b.intershipType[0], isAsc)
        default:
          return 0;
      }
    });

  }

}

function compare(a: number|string, b: number|string, isAsc: boolean  ){
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
