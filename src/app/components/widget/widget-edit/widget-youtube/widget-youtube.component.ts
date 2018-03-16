import { Component, OnInit } from '@angular/core';
import {Widget} from "../../../../models/widget.model.client";
import {WidgetService} from "../../../../services/widget.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {PageService} from "../../../../services/page.service.client";
import {Page} from "../../../../models/page.model.client";
import {WebsiteService} from "../../../../services/website.service.client";
import {Website} from "../../../../models/website.model.client";

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

  constructor( private pageService: PageService,
               private websiteService: WebsiteService,
               private widgetService: WidgetService,
               private activatedRoute: ActivatedRoute,
               private router: Router) { }

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
