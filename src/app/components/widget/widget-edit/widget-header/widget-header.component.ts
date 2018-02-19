import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebsiteService} from "../../../../services/website.service.client";
import {Widget} from "../../../../models/widget.model.client";
import {WidgetService} from "../../../../services/widget.service.client";

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  widget: Widget = {
    _id: "", widgetType: "", pageId: "", size: "", text: "", url: "", width: ""
  };
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;

  constructor(
    private widgetService: WidgetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.widgetId = params['widgetId'];
        this.pageId = params['pageId'];
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
      }
    );

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
