import { SemesterData } from './semester-data';

export interface StudentAcademyDetails {
  registrationNumber: String;
  graduationYear: String;
  cgpa: Number;
  semester: SemesterData[];
  testNameModule: String;
  testModulePercentage: Number;
  grandTotalRangePercentage: Number;
}
