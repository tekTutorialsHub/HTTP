import { Component } from '@angular/core';
/*import { Http, Response, Headers, RequestOptions } from '@angular/http';*/
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent
{

    baseUrl: string ="https://api.github.com/";
    userName: string ="tektutorialsHub"
    loading: boolean=false;

    repos: any[];

    /*constructor(public http: Http) {
    
    }*/
    constructor(public http: HttpClient) {
    
    }

   /*public getRepos() {
        this.loading = true;
        this.http.request(this.baseUrl+'users/'+this.userName+'/repos')
                 .subscribe((res: Response) => {
                     this.repos = res.json();
                     this.loading = false;
                });

    }*/


    public getRepos() {
        this.loading = true;
        this.http.get<any[]>(this.baseUrl+'users/'+this.userName+'/repos')
                 .subscribe(data => {
                     this.repos = data;
                     this.loading = false;
                },
                error => {
                    this.repos = error;
                    this.loading = false;
                }
            );

    }

}





