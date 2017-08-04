import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyNewServiceService {

  constructor(private http: Http) { }

  get_user_following() {
    let url = 'https://api.github.com/users/andhikamaheva/following';
    let getData = this.http.get(url);
    return getData.map(res => { return res.json(); });
  }
  getContentUrl(url1){
    let getData = this.http.get(url1);
    return getData.map(res => { return res.json(); });
    
  }

   get_user_follower() {
    let url = 'https://api.github.com/users/andhikamaheva/followers';
    let getData = this.http.get(url);
    return getData
    .map(res => { return res.json(); });
  }


   get_user_detail() {
    let url = 'https://api.github.com/users/andhikamaheva';
    let getData = this.http.get(url);
    return getData.map(res => { return res.json(); });
  }

  get_repositories_starred() {
    let url = 'https://api.github.com/users/andhikamaheva/starred';
    let getData = this.http.get(url);
    return getData.map(res => { return res.json(); });
  }

  get_user_repositories() {
    let url = 'https://api.github.com/users/andhikamaheva/repos';
    let getData = this.http.get(url);
    return getData.map(res => { return res.json(); });
  }

    get_repositories_search(keyword) {
     let  params= []
     if(keyword) {params.push('q='+ keyword)}
    let url = 'https://api.github.com/search/repositories?' +  params.join('&');
    let getData = this.http.get(url);
    return getData.map(res => { return res.json(); });
  }

}
