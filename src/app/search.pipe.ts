import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    let search = typeof parseInt(searchText, 10) === 'number' ? parseInt(searchText, 10) : searchText.toLowerCase();
    return items.filter( it => {
      if (typeof search === 'number') {
        if (it.phone.toString().includes(search.toString())) {
          return it;
        }
      } else {
        if (it.name.toLowerCase().includes(searchText)) {
          return it;
        }
      }
    });
   }

}
