import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl: string = '';

  constructor(private http: HttpClient) {
    if (isDevMode()==true) {
      // console.log('Development mode');
      // console.log(isDevMode());
      this.baseUrl = 'http://localhost/dotCeeJayS/wp-json/wp/v2/posts'
    } else {
      // console.log('Production mode');
      // console.log(isDevMode());
      this.baseUrl = 'https://www.ceejaysmedia.com/dotCeeJayS/wp-json/wp/v2/posts';
    }
  }

  getAllPosts():Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page',1);
    queryParams = queryParams.append('per_page', 3);
    return this.http.get<any>(`${this.baseUrl}`,{params:queryParams});
  }
}
