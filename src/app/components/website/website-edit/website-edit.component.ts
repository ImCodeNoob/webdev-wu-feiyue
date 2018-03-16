import { Component, OnInit } from '@angular/core';
import {Website} from "../../../models/website.model.client";
import {WebsiteService} from "../../../services/website.service.client";
import {ActivatedRoute, Router} from "@angular/router";

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
  updatedWebsite: Website = {_id:"", name:"", developId:"", description:""};

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.websiteService.findWebsitesById(params.websiteId).subscribe(
          (website: Website) => {
            this.websiteId = website._id;
            this.updatedWebsite = website;
            this.userId = website.developId;
            console.log(this.updatedWebsite.name);
          },
          (error: any) => {
            // this is the place to put an error message
          }
        );
        this.websiteService.findWebsitesByUser(params.userId).subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          },
          (error: any) => {
            // this is the place to put an error message
          }
        );
      }
    );
  }

  updateWebsite(website) {
    if (website.name.trim() != "" && website.description.trim() != "") {
      this.websiteService.updateWebsite(this.websiteId, website).subscribe(
        (website: Website) => {
          this.updatedWebsite = website;
          let url: any = '/profile/' + this.userId + '/website';
          this.router.navigate([url]);
        },
        (error: any) => {
          // This is the place to put an error message
        }
      );
    }
  }

  deleteWebsite() {
    if (this.websiteId.trim() != "") {
      this.websiteService.deleteWebsite(this.websiteId).subscribe(
        (website: Website) => {
          let url: any = '/profile/' + this.userId + '/website';
          this.router.navigate([url]);
        },
        (error: any) => {
          // Place error message;
        }
      );
    }
  }

}
