import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";
import {Website} from "../../../models/website.model.client";
import {ActivatedRoute} from "@angular/router";
import {PageService} from "../../../services/page.service.client";
import {Page} from "../../../models/page.model.client";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: String;
  pageId: String;
  page: Page;
  websiteId: String;

  constructor(private pageService: PageService, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
      }
    );

    this.page = this.pageService.findPageById(this.pageId);
  }


}
