import {Injectable} from '@angular/core';
import { Widget } from '../models/widget.model.client';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
// import {environment} from "../../environments/environment.prod";

@Injectable()
export  class WidgetService {

  // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
  // widgets: Widget[] = [
  //   new Widget('123', 'HEADER', '321', '2', 'GIZMODO' ),
  //   new Widget('234', 'HEADER', '321', '2', 'GIZMODO' ),
  //   new Widget('345', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
  //   new Widget('456', 'HTML', '321', '2', '<p>Lorem ipsum</p>' ),
  //   new Widget('567', 'HEADER', '321', '4', 'Lorem ipsum'),
  //   new Widget('678', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtu.be/AM2Ivdi9c4E' ),
  //   new Widget('789', 'HTML', '321', '2', '<p>Lorem ipsum</p>'),
  //
  // ];
  constructor(private http: Http) { }

  baseUrl = environment.baseUrl;

  createWidget(pageId: String, widget: Widget) {
    const url = this.baseUrl + "/api/page/" + pageId + "/widget";
    return this.http.post(url, widget).map(
      (res: Response) => {
        return res.json();
      }
    );

  }

  findImage(imageName: String) {
    const url = this.baseUrl + "/api/image/" + imageName;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }


  findWidgetsByPageId(pageId : String) {
    const url = this.baseUrl + "/api/page/" + pageId + "/widget";
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findWidgetById(widgetId : String) {
    const url = this.baseUrl + "/api/widget/" + widgetId;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  updateWidget(widgetId : String, widget: Widget) {
    const url = this.baseUrl + "/api/widget/" + widgetId;
    return this.http.put(url, widget).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  deleteWidget(widgetId : String) {
    const url = this.baseUrl + "/api/widget/" + widgetId;
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  reorderWidgets(startIndex, endIndex, pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex;
    return this.http.put(url, '').map(
      (res: Response) => {
        const data = res;
        return data;
      }
    );
  }
}
