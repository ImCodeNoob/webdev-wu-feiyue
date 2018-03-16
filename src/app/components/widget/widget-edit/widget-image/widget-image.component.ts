import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebsiteService} from "../../../../services/website.service.client";
import {Widget} from "../../../../models/widget.model.client";
import {WidgetService} from "../../../../services/widget.service.client";
import {PageService} from "../../../../services/page.service.client";
import {Page} from "../../../../models/page.model.client";
import {Website} from "../../../../models/website.model.client";
import {environment} from "../../../../../environments/environment";

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
  baseUrl: String;

  constructor(private pageService: PageService, private router: Router, private widgetService: WidgetService, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

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
                          this.baseUrl = environment.baseUrl;
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


  updateWidget(widget: Widget) {
    this.widgetService.updateWidget(this.widgetId, widget).subscribe(
      (widget: Widget) => {
        let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget";
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId).subscribe(
      (widget: Widget) => {
        let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget";
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
