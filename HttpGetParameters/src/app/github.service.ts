import { Injectable } from '@angular/core';
/*import { Http, Response, Headers, RequestOptions } from '@angular/http';*/
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';

import { repos} from './repos';

/*import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';*/


@Injectable()
export class GitHubService {

   baseURL= "https://api.github.com/";

   constructor(private httpClient: HttpClient){
   }

   getRepos(userName: string, PageNo: string, SortOn: string): Observable<repos[]> {


        let params = new HttpParams()
                .set('page', PageNo)
                .set('sort', SortOn);


        /*
        This does not work. becuase params is immutable
        let params = new HttpParams();
        params.set('page', PageNo);
        params.set('sort', SortOn);
        */

        /*
        This works
        let params = new HttpParams();
        params = params.set('page', PageNo);
        params = params.set('sort', SortOn);
        */

        /*
        This also works
        let params = new HttpParams();
        params = params.append('page', PageNo);
        params = params.append('sort', SortOn);
        */

        /* This works
        let params = new HttpParams({fromString: `page=${PageNo}&sort=${SortOn}`});
        */

        /*
        This does not work. but under consideration for future versions
        let params = new HttpParams({ fromObject: { page: PageNo, sort: SortOn } });*/

        console.log(params.toString());

        return this.httpClient.get<repos[]>(this.baseURL + 'users/' + userName + '/repos', {params});
   }

   setExample() {

        const params = new HttpParams()
                .set('page', '2')
                .set('page', '3')
                .set('sort', 'name');
        console.log('Set : ' + params.toString());   // Returns page=3&sort=name

   }

   appendExample() {

        const params = new HttpParams()
                .set('page', '2')
                .append('page', '3')
                .set('sort', 'name');
        console.log('Append ' + params.toString());   // Returns page=2&page=3&sort=name
   }

   hasExample() {

        let params = new HttpParams()
                .set('sort', 'name');
        if (!params.has('page')) {
                params = params.set('page', '2')
        }

        console.log('Set : ' + params.toString());   // Returns page=2&sort=name
   }

   getExample() {

        const params = new HttpParams()
                .set('page', '2')
                .append('page', '3')
                .set('sort', 'name');
        console.log(params.get('page'));        // Returns 2  The First occurance of Page
   }

   getAllExample() {

        const params = new HttpParams()
                .set('page', '2')
                .append('page', '3')
                .set('sort', 'name');
                console.log(params.getAll('page'));     // Returns ["2", "3"]  All occurance of Page
   }

   keysExample() {

        const params = new HttpParams()
                .set('page', '2')
                .set('sort', 'name');
        console.log(params.keys());            // Returns ["page", "sort"]
   }


   deleteExample() {

        let params = new HttpParams()
                .set('page', '2')
                .append('page', '3')
                .set('sort', 'name');
        params = params.delete('page', '3');	// Deletes the parameter page with value 3
        console.log(params.toString());         // Returns page=2&sort=name

        params = new HttpParams()
                .set('page', '2')
                .append('page', '3')
                .set('sort', 'name');
        params = params.delete('page');	        // Delete the all the parameter of page
        console.log(params.toString());         // Returns sort=name

        params = new HttpParams()
                .set('page', '2')
                .append('page', '3')
                .set('sort', 'name');
        params = params.delete('');	        // Delete all parameters
        console.log(params.toString());          // Returns null
   }

   toStringExample() {

        let params = new HttpParams()
                .set('page', '2')
                .set('sort', 'name');
        console.log(params.toString()); // Returns page=2&sort=name


   }
}


