import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";
import {Website} from "../../../models/website.model.client";
import {ActivatedRoute} from "@angular/router";
import {Page} from "../../../models/page.model.client";
import {PageService} from "../../../services/page.service.client";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pages: Page[] = [];

  constructor(private pageService : PageService, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
      }
    );

    this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
  }


}
