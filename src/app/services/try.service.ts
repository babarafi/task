import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TryService {

  constructor(private http: Http) {

  }
  getUser() {
    const url = 'http://127.0.0.1:8000/api/v1/user';
    const getData = this.http.get(url);
    return getData.map(res => { return res.json();});

  }

  postUser(name,email,password,remember_token,created_at,updated_at){
    const url = 'http://127.0.0.1:8000/api/v1/user?';
    const params =[]
    const headers = new Headers ({'Content-type': 'application/x-www-form-urlencoded'});
    const options= new RequestOptions({headers:headers})
      if(name) { params.push('name=' + name);}
      if(email) { params.push('email=' + email);}
      if(password) { params.push('password=' + password);}
      if(remember_token) { params.push('remember_token=' + remember_token);}
      if(updated_at) { params.push('updated_at=' + updated_at);}
      if(created_at) { params.push('created_at=' + created_at);}

      const url_all= url + params.join('&');
      return this.http.post(url_all, params, options).map(res => res.json());

  }
}
