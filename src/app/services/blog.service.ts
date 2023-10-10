import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://www.ceejaysmedia.com/dotCeeJayS/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) { }

  getAllPosts():Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page',1);
    queryParams = queryParams.append('per_page', 3);
    return this.http.get<any>(`${this.baseUrl}`,{params:queryParams});
  }
}
