import { Page } from '../models/page.model.client';
import {Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
// import {environment} from "../../environments/environment.prod";

@Injectable()
export class PageService {

  constructor(private http: Http) { }
  baseUrl = environment.baseUrl;

  // pages: Page[] = [
  //   new Page('321', 'Post 1', '456', 'Lorem' ),
  //   new Page('432', 'Post 2', '456', 'Lorem' ),
  //   new Page('543', 'Post 3', '456', 'Lorem' ),
  // ];

  createPage(websiteId: String, page: Page) {

    const url = this.baseUrl + "/api/website/" + websiteId + "/page";
    return this.http.post(url, page).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findPageByWebsiteId(websiteId: String) {
    const url = this.baseUrl + "/api/website/" + websiteId + "/page";
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findPageById(pageId: String) {
    const url = this.baseUrl + "/api/page/" + pageId;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  updatePage(pageId: String, page: Page) {
    const url = this.baseUrl + "/api/page/" + pageId;
    return this.http.put(url, page).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  deletePage(pageId: String) {
    const url = this.baseUrl + "/api/page/" + pageId;
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}
