import { Component, OnInit } from '@angular/core';
import {Widget} from "../../../../models/widget.model.client";
import {WidgetService} from "../../../../services/widget.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;

  constructor( private widgetService: WidgetService,
               private activatedRoute: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    (params: any) => {
      this.userId = params['userId'];
      this.websiteId = params['websiteId'];
      this.pageId = params['pageId'];
      this.widgetId = params['widgetId'];
    }
    this.widget = this.widgetService.findWidgetById(this.widgetId);
  }

  updateWidget(widget: Widget) {
    this.widgetService.updateWidget(widget._id, widget);
    let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget";
    this.router.navigate([url]);
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
    let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget";
    this.router.navigate([url]);
  }


}
