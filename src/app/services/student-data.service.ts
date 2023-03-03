import { Injectable } from '@angular/core';

import { StudentData } from '../interfaces/student-data';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  data: StudentData[] = [
    {
      name: 'Ravi Shankar',
      departmant: 'AI&DS',
      email: 'ravishankar@gmail.com',
      gender: 'Male',
      dob: '26-02-2003',
      academy: {
        registrationNumber: '2.0f1421E+11',
        graduationYear: '2025',
        cgpa: 9.36,
        testNameModule: 'DSA',
        testModulePercentage: 30,
        grandTotalRangePercentage: 70,

        semester: [
          {
            semester_no: 1,
            gpa: 9.36,
            subjects: [
              {
                subjectCode: '1',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '2',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '3',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '4',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '5',
                subjectName: 'English',
                LetterGrade: 'O',
              },
            ],
          },
          {
            semester_no: 2,
            gpa: 9.36,
            subjects: [
              {
                subjectCode: '1',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '2',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '3',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '4',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '5',
                subjectName: 'English',
                LetterGrade: 'O',
              },
            ],
          },
          {
            semester_no: 3,
            gpa: 9.36,
            subjects: [
              {
                subjectCode: '1',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '2',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '3',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '4',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '5',
                subjectName: 'English',
                LetterGrade: 'O',
              },
            ],
          },
          {
            semester_no: 4,
            gpa: 9.36,
            subjects: [
              {
                subjectCode: '1',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '2',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '3',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '4',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '5',
                subjectName: 'English',
                LetterGrade: 'O',
              },
            ],
          },
          {
            semester_no: 5,
            gpa: 9.36,
            subjects: [
              {
                subjectCode: '1',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '2',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '3',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '4',
                subjectName: 'English',
                LetterGrade: 'O',
              },
              {
                subjectCode: '5',
                subjectName: 'English',
                LetterGrade: 'O',
              },
            ],
          },
        ],
      },
      // testNameModule: 'Aptitude Test',
      // testModulePercentage: 33.0,
      // grandTotalRangePercentage: 19.32,
      // show: false,
    },
    // {
    //   registrationNumber: '2.1sd042E+11',
    //   name: 'Gayathri',
    //   departmant: 'AI&DS',
    //   graduationYear: '2025',
    //   testNameModule: 'Aptitude Test',
    //   testModulePercentage: 86.0,
    //   grandTotalRangePercentage: 26.14,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1vf042E+11',
    //   name: 'LIBBE RAJ KEERTHY',
    //   departmant: 'CSE',
    //   graduationYear: '2025',
    //   testNameModule: 'Aptitude Test',
    //   testModulePercentage: 67.0,
    //   grandTotalRangePercentage: 19.32,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1f042E+11',
    //   name: 'Akash R',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Aptitude Test',
    //   testModulePercentage: 52.0,
    //   grandTotalRangePercentage: 32.95,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.10b42E+11',
    //   name: 'Akshay Perumal S',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Aptitude Test',
    //   testModulePercentage: 29.0,
    //   grandTotalRangePercentage: 27.84,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.aa+11',
    //   name: 'Chokkalingam A',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Aptitude Test',
    //   testModulePercentage: 0.0,
    //   grandTotalRangePercentage: 0.009,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1042bgE+11',
    //   name: 'Dharsini A',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Aptitude Test',
    //   testModulePercentage: 52.0,
    //   grandTotalRangePercentage: 29.55,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1042qweE+11',
    //   name: 'Dhatchanamoofthy.S',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Aptitude Test',
    //   testModulePercentage: 19.0,
    //   grandTotalRangePercentage: 30.68,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.104gbg2E+11',
    //   name: 'Ganesh.R',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Aptitude Test',
    //   testModulePercentage: 38.0,
    //   grandTotalRangePercentage: 29.55,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1042fdE+11',
    //   name: 'Gokul.S',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Aptitude Test',
    //   testModulePercentage: 38.0,
    //   grandTotalRangePercentage: 38.64,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1042wdE+11',
    //   name: 'Yuvashree G',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Aptitude Test',
    //   testModulePercentage: 24.0,
    //   grandTotalRangePercentage: 31.25,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1042Esxas+11',
    //   name: 'Hema Priya D',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 43.009,
    //   grandTotalRangePercentage: 32.95,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1dcd042E+11',
    //   name: 'Jayapriya K',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 38.0,
    //   grandTotalRangePercentage: 40.34,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1ds042E+11',
    //   name: 'Mahidhar Kandukuri',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'python',
    //   testModulePercentage: 19.0,
    //   grandTotalRangePercentage: 26.7,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1a042E+11',
    //   name: 'Kummararaj.S',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 29.0,
    //   grandTotalRangePercentage: 29.55,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.10b42E+11',
    //   name: 'Mohammed Aqil Z',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 10.0,
    //   grandTotalRangePercentage: 26.14,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.104x2E+11',
    //   name: 'Ponkarpagaa M',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 24.0,
    //   grandTotalRangePercentage: 35.8,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.104j2E+11',
    //   name: 'Rithish Gokul .K',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 43.009,
    //   grandTotalRangePercentage: 27.84,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1042dcsE+11',
    //   name: 'Sahil Choudhary',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 57.0,
    //   grandTotalRangePercentage: 0.009,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.10fdv42E+11',
    //   name: 'Sainul Mushraf M S',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 0.0,
    //   grandTotalRangePercentage: 0.0,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.104xx2E+11',
    //   name: 'Sanjai R',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 0.0,
    //   grandTotalRangePercentage: 24.43,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.1vxv042E+11',
    //   name: 'Saravanan A',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 38.0,
    //   grandTotalRangePercentage: 45.45,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.fvdf1042E+11',
    //   name: 'Shivraj M',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 52.0,
    //   grandTotalRangePercentage: 0.0,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.10vx42E+11',
    //   name: 'Shyam Sunder.E.M',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 0.0,
    //   grandTotalRangePercentage: 30.68,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.10vxv42E+11',
    //   name: 'Sivapriya. G',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 48.009,
    //   grandTotalRangePercentage: 36.93,
    //   show: false,
    // },
    // {
    //   registrationNumber: '2.104xvx2E+11',
    //   name: 'Sriram S',
    //   departmant: 'CIVIL',
    //   graduationYear: '2024',
    //   testNameModule: 'Python',
    //   testModulePercentage: 24.0,
    //   grandTotalRangePercentage: 28.98,
    //   show: false,
    // },
  ];
}
