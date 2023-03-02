import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterr',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string) {
    // if(value.length === 0){
    //   return value;
    // }

    if (!filterString) {
      return value;
    }

    // const companies = []
    // for (const reg of value){
    //   if(reg['companyName'].toLowerCase() === filterString.toLowerCase()){
    //     companies.push(reg);
    //   }
    // }
    return value.filter((it) => {
      // console.log(it);
      console.log(it.companyName.includes(filterString.toLowerCase()));
      return it.companyName.includes(filterString.toLowerCase());
    });
    // return companies;
  }
}
