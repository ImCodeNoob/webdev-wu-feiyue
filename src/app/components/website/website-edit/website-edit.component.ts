import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WebsiteService } from '../../../services/website.service.client';
import {SharedService} from "../../../services/shared.service";
import {Website} from "../../../models/website.model.client";

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  // properties
  errorFlag: boolean;
  errorMsg = '';
  websiteId: String;
  websites: any[];
  updatedWebsite: any = {};
  name: String;
  developerId: String;
  description: String;
  userId: String;

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   params => {
    //     this.websiteService.findWebsiteById(params.wid).subscribe(
    //       (website: any) => {
    //         this.websiteId = website._id;
    //         this.developerId = website._user;
    //         this.updatedWebsite = website;
    //       },
    //       (error: any) => {
    //         // this is the place to put an error message
    //       }
    //     );
    //     this.websiteService.findWebsitesByUser(params.uid).subscribe(
    //       (websites: any[]) => {
    //         this.websites = websites;
    //       },
    //       (error: any) => {
    //         // this is the place to put an error message
    //       }
    //     );
    //   }
    // );
    this.getUser();
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteService.findWebsitesByUser(this.userId).subscribe(
          (websites: any[]) => {
            this.websites = websites;
          });

        this.websiteId = params['wid'];
        this.websiteService.findWebsiteById(this.websiteId).subscribe(
          (website: any) => {
            this.updatedWebsite = website;
          }
        );
      });
  }

  getUser() {
    this.userId = this.sharedService.user['_id'];
  }

  updateWebsite(website) {
    this.errorFlag = false;
    this.errorMsg = '';
    if (website.name == null || website.name.trim() == "") {
      this.errorFlag = true;
      this.errorMsg = "Website Name cannot be empty";
      return;
    }

    if (!this.errorFlag) {
      this.websiteService.updateWebsite(this.websiteId, website).subscribe(
        (website: any) => {
          this.updatedWebsite = website;
          // let url: any = '/user/' + this.developerId + '/website';
          // this.router.navigate([url]);
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        },
        (error: any) => {
          // This is the place to put an error message
        }
      );
    }
  }

  deleteWebsite() {
    if (this.websiteId != null && this.websiteId.trim() != "") {
      this.websiteService.deleteWebsite(this.websiteId).subscribe(
        (website: any) => {
          // let url: any = '/user/' + this.developerId + '/website';
          // this.router.navigate([url]);
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});

        },
        (error: any) => {
          // Place error message;
        }
      );
    }
  }
}
