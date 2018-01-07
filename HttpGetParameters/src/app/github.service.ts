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


        const params = new HttpParams()
                .set('page', PageNo)
                .set('sort', SortOn);


        /*
        This does not work.  becuase params is immutable
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



}


