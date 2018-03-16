import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WidgetService } from '../../../../services/widget.service.client';
import { Widget } from '../../../../models/widget.model.client';
import { PageService } from '../../../../services/page.service.client';
import { WebsiteService } from '../../../../services/website.service.client';
import { UserService } from '../../../../services/user.service.client';
import { Page } from '../../../../models/page.model.client';
import { Website } from '../../../../models/website.model.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  // properties
  widget: Widget = {
    _id: "", widgetType: "", name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
    height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
  };
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;

  constructor(
    private widgetService: WidgetService,
    private pageService: PageService,
    private websiteService: WebsiteService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

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
