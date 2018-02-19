import { Component, OnInit } from '@angular/core';
import {Website} from "../../../models/website.model.client";
import {WebsiteService} from "../../../services/website.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: String;
  websiteId: String;
  website: Website;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
      }
    );

    this.website = this.websiteService.findWebsitesById(this.websiteId);
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

}
