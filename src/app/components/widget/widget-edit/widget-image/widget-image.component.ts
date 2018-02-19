import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebsiteService} from "../../../../services/website.service.client";
import {Widget} from "../../../../models/widget.model.client";
import {WidgetService} from "../../../../services/widget.service.client";

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  userId: String;
  websiteId: String;
  pageId: String;
  widget: Widget;
  widgetId: String;

  constructor(private router: Router, private widgetService: WidgetService, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    (params: any) => {
      this.userId = params['userId'];
      this.websiteId = params['websiteId'];
      this.pageId = params['pageId'];
      this.widgetId = params['widgetId'];
    }
    this.widget = this.widgetService.findWidgetById('widgetId');
  }


  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
    let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget";
    this.router.navigate([url]);
  }

}
