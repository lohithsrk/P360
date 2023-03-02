import { Injectable } from '@angular/core';
import { InternshipData } from '../interfaces/internship-data';

@Injectable({
  providedIn: 'root'
})
export class IntershipDataService {
  data: InternshipData[] = [
    {
      companyName: 'Amazon',
      role: 'Junior Intern',
      intershipType: 'Online',
      country: 'USA',
      links: 'www.amazon.com'
    },
    {
      companyName: 'Google',
      role: 'Intern',
      intershipType: 'Offline',
      country: 'Europe',
      links: 'www.google.com'
    },
    {
      companyName: 'Apple',
      role: 'Testing Specialist',
      intershipType: 'Offline',
      country: 'Brazil',
      links: 'www.apple.com'
    },
    {
      companyName: 'Samsung',
      role: 'Testing Specialist',
      intershipType: 'Offline',
      country: 'India',
      links: 'www.samsung.com'
    },
    {
      companyName: 'Yuplez',
      role: 'Testing Specialist',
      intershipType: 'Offline',
      country: 'China',
      links: 'www.clown.com'
    },
   
  ]
  
}
