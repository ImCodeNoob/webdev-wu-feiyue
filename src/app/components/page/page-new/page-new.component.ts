import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";
import {Website} from "../../../models/website.model.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websiteId: String;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
      }
    );

    this.websites = this.websiteService.findWebsitesByUser2(this.userId);
  }


}
