import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';


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

    constructor(public http: Http) {
    
    }
   public getRepos() {
        this.loading = true;
        this.http.request(this.baseUrl+'users/'+this.userName+'/repos')
                 .subscribe((res: Response) => {
                     this.repos = res.json();
                     this.loading = false;
                });

    }

}





