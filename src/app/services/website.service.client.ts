import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class WebsiteService {

  constructor(private http: Http) { }

  baseUrl = environment.baseUrl;

  // websites: Website[] = [
  //   new Website('123', 'Facebook', '456', 'Lorem' ),
  //   new Website('234', 'Twitter', '456', 'Lorem' ),
  //   new Website('456', 'Gizmodo', '456', 'Lorem' ),
  //   new Website('890', 'Go', '123', 'Lorem' ),
  //   new Website('567', 'Tic Tac Toe', '123', 'Lorem' ),
  //   new Website('678', 'Checkers', '123', 'Lorem' ),
  //   new Website('789', 'Chess', '234', 'Lorem' ),
  //
  // ];

  createWebsite(userId: String, website: Website) {

    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findWebsitesByUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findWebsitesById(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  updateWebsite(websiteId: String, website: Website) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, website).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  deleteWebsite(websiteId: String) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}
