import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], filter: string): Product[] {
    if (!products || !filter) {
        return products;
    }
    return products.filter(product => product.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
}




  //transform(items: any[], searchText: string): any[] {
    //if(!items) return [];

   // if(!searchText) return items;

   // return this.searchItems(items, searchText.toLowerCase());
  // }

  // private searchItems(items :any[], searchText): any[] {
  //   let results = [];
  //    items.forEach(it => {
  //      if (it.product.toLowerCase().includes(searchText)) {
   //         results.push(it);
  //      } else {
  //        let searchResults =  this.searchItems(it.items_containers, searchText);
   //       if (searchResults.length > 0) {
   //           results.push({
   //             name: it.name,
    //            items_containers: searchResults
    //          });
    //      }
    //    }
    //  });
    //  return results;
   }
  //transform(value: any[], filterString: string, propName: string): any[] {
   // console.log(value);
   // console.log("filterString",filterString);
   // console.log("propName",propName);
  //  const resultArray = [];

  // if(value.length === 0 || filterString === ''|| propName ==='' ){
   //        return value;
  //    }
   //   for(const item of value){
   //   if (item[propName] === filterString) {
    //  resultArray.push(item);
    //}
   // }
   // return resultArray;
// }


