import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";
import {Website} from "../../../models/website.model.client";
import {ActivatedRoute, Router} from "@angular/router";
import {PageService} from "../../../services/page.service.client";
import {Page} from "../../../models/page.model.client";
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: String;
  pageId: String;
  updatedPage: Page;
  websiteId: String;
  name: String;
  description: String;


  constructor(
              private userService: UserService,
              private pageService: PageService,
              private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

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
                    this.pageId = params.pageId;
                    this.websiteId = params.websiteId;
                    this.updatedPage = page;
                  } else {
                    // throw error message
                    console.log("User ID deos not match");
                  }
                }
              );
            } else {
              // throw error message
              console.log("Website ID does not match");
            }
          }
        );
      }
    );
  }

  updatePage(page) {
    if (page.name.trim() == "") {
      console.log("Name cannot be empty.");
      return;
    }
    if (page.title.trim() == "") {
      console.log("Title cannot be empty.");
      return;
    }
    this.pageService.updatePage(this.pageId, page).subscribe(
      (page: Page) => {
        this.updatedPage = page;
        let url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page';
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deletePage() {
    this.pageService.deletePage(this.pageId).subscribe(
      (page: Page) => {
        let url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page';
        this.router.navigate([url]);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


}
