import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getAllBlogs() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'jwt')
    return this._http.get('url', {});
  }

  createBlog(body) {
    return this._http.post('url', body);
  }

  editPost(body) {
    return this._http.post('url', body);
  }
}
