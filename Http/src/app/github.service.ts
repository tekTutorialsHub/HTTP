import { Injectable } from '@angular/core';
/*import { Http, Response, Headers, RequestOptions } from '@angular/http';*/
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';

import { repos} from './repos';

/*import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';*/


@Injectable()
export class GitHubService {

   baseURL:string="https://api.github.com/";

   constructor(private httpClient:HttpClient){
   }

   getRepos(userName:string): Observable<repos[]> {
        return this.httpClient.get<repos[]>(this.baseURL + 'users/' + userName + '/repos')
   }

   /*getRepos(userName:string): Observable<repos[]> {
        return this.http.get(this.baseURL+'users/'+userName+'/repos')
                .map(this.extractRepos)
                .catch(this.handleError)
   }


   private extractRepos(res: Response) {
        return <repos[]>res.json();
   }

   private handleError(error:Response|any){

        let errMsg: string;
        if (error instanceof Response) {
                const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
                errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
   } */

}


