import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";
import {Website} from "../../../models/website.model.client";
import {ActivatedRoute} from "@angular/router";
import {Widget} from "../../../models/widget.model.client";
import {WidgetService} from "../../../services/widget.service.client";

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  userId: String;
  pageId: String;
  websiteId: String;
  widgetId: String;
  widget: Widget;

  constructor(private widgetService: WidgetService, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.pageId = params['pageId'];
        this.websiteId = params['websiteId'];
        this.widgetId = params['widgetId'];
      }
    );

    this.widget = this.widgetService.findWidgetById(this.widgetId);
  }

}
