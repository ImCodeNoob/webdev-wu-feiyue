import { Component, OnInit } from '@angular/core';
import {Widget} from "../../../models/widget.model.client";
import {ActivatedRoute} from "@angular/router";
import {WebsiteService} from "../../../services/website.service.client";
import {WidgetService} from "../../../services/widget.service.client";
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer, private widgetService : WidgetService, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
      }
    );

    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
  }

  photoURL(url) {
    var embedUrl = url.replace("youtu.be", "youtube.com/embed");
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
