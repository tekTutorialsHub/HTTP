import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';

import { repos} from './repos';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GitHubService {  
   
   baseURL:string="https://api.github.com/";

   constructor(private http:Http){
   } 

   getRepos(userName:string): Observable<repos[]> {
        return this.http.get(this.baseURL+'users/'+userName+'/repos')
                /*.map((response)=> <repos[]>response.json())  */
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
   } 

}


 /*.map(response => response.json());*/