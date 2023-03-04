import { Injectable } from '@angular/core';
import { ProjectData } from '../interfaces/project-data';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  data: ProjectData[] = [
    {
      projectName: 'Amazon',
      projectDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, harum iure nam repellendus accusantium dolorum nesciunt minus. Eos, corrupti facere distinctio molestiae, sint et sit quibusdam numquam neque quae deleniti!',
      projectScreenshot:
        'https://plus.unsplash.com/premium_photo-1669751999543-de9813218b60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bWJuYWlsJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      projectDomain:['website'],
      projectStack:['Html','CSS','ReactJs'],
      projectUrl:'www.amazon.com'
    },
    {
      projectName: 'Amazon',
      projectDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, harum iure nam repellendus accusantium dolorum nesciunt minus. Eos, corrupti facere distinctio molestiae, sint et sit quibusdam numquam neque quae deleniti!',
      projectScreenshot:
        'https://plus.unsplash.com/premium_photo-1669751999543-de9813218b60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bWJuYWlsJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      projectDomain:['website'],
      projectStack:['Html','CSS','ReactJs'],
      projectUrl:'www.amazon.com'
    },
  ];

  constructor() {}
}
