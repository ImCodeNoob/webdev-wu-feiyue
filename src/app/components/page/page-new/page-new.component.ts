import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";
import {Website} from "../../../models/website.model.client";
import {ActivatedRoute, Router} from "@angular/router";
import {Page} from "../../../models/page.model.client";
import {PageService} from "../../../services/page.service.client";
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websiteId: String;
  websites: Website[] = [];
  newPage: Page;

  constructor(private pageService: PageService,
              private websiteService: WebsiteService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.websiteService.findWebsitesById(params.websiteId).subscribe(
          (website: Website) => {
            if (website.developId === params.userId) {
              this.websiteId = params.websiteId;
              this.userId = params.userId;
            } else {
              console.log("User ID does not match.");
            }
          },
          (error: any) => {
            console.log(error);
          }
        )
      }
    );
  }

  createPage(page) {
    if (page.name.trim() == "") {
      console.log("Name cannot be empty.");
      return;
    }
    if (page.title.trim() == "") {
      console.log("Title cannot be empty.");
      return;
    }
    this.pageService.createPage(this.websiteId, page).subscribe(
      (page: Page) => {
        let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page";
        this.router.navigate([url]);
      }
    );
  }
}
