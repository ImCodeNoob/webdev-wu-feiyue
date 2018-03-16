import { Component, OnInit } from '@angular/core';
import {Widget} from "../../../models/widget.model.client";
import {ActivatedRoute} from "@angular/router";
import {WebsiteService} from "../../../services/website.service.client";
import {WidgetService} from "../../../services/widget.service.client";
import { DomSanitizer } from '@angular/platform-browser';
import {Page} from "../../../models/page.model.client";
import {PageService} from "../../../services/page.service.client";
import {Website} from "../../../models/website.model.client";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: String;
  pageId: String;
  websiteId: String;
  widgets: Widget[] = [];

  constructor(private pageService: PageService, private sanitizer: DomSanitizer, private widgetService : WidgetService, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.pageService.findPageById(params.pageId).subscribe(
          (page: Page) => {
            if (page.websiteId === params.websiteId) {
              this.websiteService.findWebsitesById(page.websiteId).subscribe(
                (website: Website) => {
                  if (website.developId === params.userId) {
                    this.userId = params.userId;
                    this.websiteId = params.websiteId;
                    this.pageId = params.pageId;
                    this.widgetService.findWidgetsByPageId(this.pageId).subscribe(
                      (widgets: Widget[]) => {
                        this.widgets = widgets;
                      },
                      (error: any) => {
                        console.log(error);
                      }
                    );
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
    );
  }

  photoURL(url) {
    var embedUrl = url.replace("youtu.be", "youtube.com/embed");
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  // receiving the emitted event
  reorderWidgets(indexes) {
    // call widget service function to update widget as per index
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe(
        (data) => console.log(data)
      );
  }
}
