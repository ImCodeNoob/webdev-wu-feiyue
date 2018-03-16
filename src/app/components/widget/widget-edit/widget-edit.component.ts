import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";
import {Website} from "../../../models/website.model.client";
import {ActivatedRoute} from "@angular/router";
import {Widget} from "../../../models/widget.model.client";
import {WidgetService} from "../../../services/widget.service.client";
import {PageService} from "../../../services/page.service.client";
import {Page} from "../../../models/page.model.client";

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

  constructor(private pageService: PageService, private widgetService: WidgetService, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.widgetService.findWidgetById(params.widgetId).subscribe(
          (widget: Widget) => {
            if (widget.pageId === params.pageId) {
              this.pageService.findPageById(widget.pageId).subscribe(
                (page: Page) => {
                  if (page.websiteId === params.websiteId) {
                    this.websiteService.findWebsitesById(page.websiteId).subscribe(
                      (website: Website) => {
                        if (website.developId === params.userId) {
                          this.userId = params.userId;
                          this.websiteId = params.websiteId;
                          this.pageId = params.pageId;
                          this.widgetId = params.widgetId;
                          this.widget = widget;
                        } else {
                          console.log("User ID does not match.");
                        }
                      }
                    );
                  } else {
                    console.log("Website ID does not match.");
                  }
                }
              );
            }
          }
        );
      }
    );
  }

}
