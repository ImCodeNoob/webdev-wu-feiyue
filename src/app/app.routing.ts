/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {LoginComponent} from "./components/user/login/login.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {WebsiteEditComponent} from "./components/website/website-edit/website-edit.component";
import {WebsiteListComponent} from "./components/website/website-list/website-list.component";
import {WebsiteNewComponent} from "./components/website/website-new/website-new.component";
import {PageEditComponent} from "./components/page/page-edit/page-edit.component";
import {PageListComponent} from "./components/page/page-list/page-list.component";
import {PageNewComponent} from "./components/page/page-new/page-new.component";
import {WidgetChooserComponent} from "./components/widget/widget-chooser/widget-chooser.component";
import {WidgetEditComponent} from "./components/widget/widget-edit/widget-edit.component";
import {WidgetHeaderComponent} from "./components/widget/widget-edit/widget-header/widget-header.component";
import {WidgetImageComponent} from "./components/widget/widget-edit/widget-image/widget-image.component";
import {WidgetYoutubeComponent} from "./components/widget/widget-edit/widget-youtube/widget-youtube.component";
import {WidgetListComponent} from "./components/widget/widget-list/widget-list.component";
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import { AuthGuard } from './services/auth-guard.service';
// const APP_ROUTES: Routes = [
//   // {path: '', redirectTo: 'login', pathMatch: 'full'},
//   {path: 'login', component : LoginComponent},
//   {path: 'register', component : RegisterComponent},
//   {path: 'profile/:userId', component : ProfileComponent},
//   {path: 'profile/:userId/website', component: WebsiteListComponent},
//   {path: 'user/:userId/website/new', component: WebsiteNewComponent},
//   {path: 'user/:userId/website/:websiteId', component : WebsiteEditComponent},
//   {path: 'user/:userId/website/:websiteId/page', component: PageListComponent},
//   {path: 'user/:userId/website/:websiteId/page/new', component: PageNewComponent},
//   {path: 'user/:userId/website/:websiteId/page/:pageId', component: PageEditComponent},
//   {path: 'user/:userId/website/:websiteId/page/:pageId/widget', component: WidgetListComponent},
//   {path: 'user/:userId/website/:websiteId/page/:pageId/widget/new', component: WidgetChooserComponent},
//   {path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: WidgetEditComponent},
//   ];

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'default', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'user/:uid', component: ProfileComponent },
  { path: 'user', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user/website', component: WebsiteListComponent, canActivate: [AuthGuard] },
  { path: 'user/website/new', component: WebsiteNewComponent, canActivate: [AuthGuard] },
  { path: 'user/website/:wid', component: WebsiteEditComponent, canActivate: [AuthGuard] },
  { path: 'user/website/:wid/page', component: PageListComponent, canActivate: [AuthGuard] },
  { path: 'user/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthGuard] },
  { path: 'user/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthGuard] },
  { path: 'user/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthGuard] },
  { path: 'user/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthGuard] },
  { path: 'user/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthGuard] },
  { path: 'user/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent,canActivate: [AuthGuard] }
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
