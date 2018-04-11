import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageService } from '../../../services/page.service.client';
import { UserService } from '../../../services/user.service.client';
import { WebsiteService } from '../../../services/website.service.client';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  errorMsg = '';
  errorFlag: Boolean;
  // properties
  userId: String;
  pageId: String;
  updatedPage: any = {};
  name: String;
  websiteId: String;
  description: String;

  constructor(
    private pageService: PageService,
    private userService: UserService,
    private websiteService: WebsiteService,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.pageService.findPageById(params.pid).subscribe(
          (page: any) => {
            if (page._website === params.wid) {
              this.websiteService.findWebsiteById(page._website).subscribe(
                (website: any) => {
                  // if (website._user === params.uid) {
                  //   this.userId = params.uid;
                  //   this.pageId = params.pid;
                  //   this.websiteId = params.wid;
                  //   this.updatedPage = page;
                  // } else {
                  //   // throw error message
                  //   console.log("User ID does not match");
                  // }
                  this.userId = this.sharedService.user['_id'];
                  this.pageId = params.pid;
                  this.websiteId = params.wid;
                  this.updatedPage = page;

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
    this.errorFlag = false;
    this.errorMsg = '';
    if (page.name == null || page.name.trim() == "") {
      // console.log("Name cannot be empty.");
      // return;
      this.errorFlag = true;
      this.errorMsg += "Page name cant not be empty <br>";
    }
    if (page.title == null || page.title.trim() == "") {
      // console.log("Title cannot be empty.");
      this.errorFlag = true;
      this.errorMsg += "Page Title cannot be empty <br>";
    }
    if(this.errorFlag) {
      return;
    }
    this.pageService.updatePage(this.pageId, page).subscribe(
      (page: any) => {
        this.updatedPage = page;
        // let url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page';
        // this.router.navigate([url]);
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});

      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deletePage() {
    this.pageService.deletePage(this.pageId).subscribe(
      (page: any) => {
        // let url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page';
        // this.router.navigate([url]);
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});

      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
