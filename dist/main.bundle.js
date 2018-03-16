webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/login\">Login</a>\n<a routerLink=\"/register\">Register</a>\n<a routerLink=\"/profile/:userId\">Profile</a>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sortable_directive__ = __webpack_require__("../../../../../src/app/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { QuillEditorModule } from 'ngx-quill-editor';
























// import { LoginComponent } from './views/users/login/login.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            // Declare components here
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_21__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__["a" /* QuillEditorModule */]
            ],
            // Client Side services here
            providers: [__WEBPACK_IMPORTED_MODULE_22__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__["a" /* WidgetService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/**
 * Created by sesha on 7/26/17.
 */













var APP_ROUTES = [
    // {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile/:userId', component: __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:userId/website', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:userId/website/:websiteId', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/new', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Edit Page\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updatePage(updatedPage)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"updatedPage.name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Page Name\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input [(ngModel)]=\"updatedPage.title\" type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Page Title\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n    <a (click)=\"deletePage()\" class=\"btn btn-block btn-danger\">Delete</a>\n  </form>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/profile/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(userService, pageService, websiteService, activatedRoute, router) {
        this.userService = userService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params.pageId).subscribe(function (page) {
                if (page.websiteId === params.websiteId) {
                    _this.websiteService.findWebsitesById(page.websiteId).subscribe(function (website) {
                        if (website.developId === params.userId) {
                            _this.userId = params.userId;
                            _this.pageId = params.pageId;
                            _this.websiteId = params.websiteId;
                            _this.updatedPage = page;
                        }
                        else {
                            // throw error message
                            console.log("User ID deos not match");
                        }
                    });
                }
                else {
                    // throw error message
                    console.log("Website ID does not match");
                }
            });
        });
    };
    PageEditComponent.prototype.updatePage = function (page) {
        var _this = this;
        if (page.name.trim() == "") {
            console.log("Name cannot be empty.");
            return;
        }
        if (page.title.trim() == "") {
            console.log("Title cannot be empty.");
            return;
        }
        this.pageService.updatePage(this.pageId, page).subscribe(function (page) {
            _this.updatedPage = page;
            var url = '/user/' + _this.userId + '/website/' + _this.websiteId + '/page';
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId).subscribe(function (page) {
            var url = '/user/' + _this.userId + '/website/' + _this.websiteId + '/page';
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default navbar-fixed-top\">\n   <div class=\"container-fluid row\">\n\n     <div class=\"navbar-text pull-left\">\n       <a routerLink=\"/profile/{{userId}}/website\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n       </a>\n     </div>\n     <div class=\"navbar-text pull-right\">\n       <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-plus\">\n          </span>\n       </a>\n     </div>\n     <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n       Pages\n     </a>\n   </div>\n </nav>\n\n <div class=\"contain-fluid\">\n   <div class=\"col-xs-4 hidden-xs\">\n     <div *ngFor=\"let page of pages\">\n       <ul class=\"list-group cl-list-group-borderless\">\n         <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n         <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n         <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n         <!--</li>-->\n       </ul>\n     </div>\n   </div>\n </div>\n\n <nav class=\"navbar navbar-default navbar-fixed-bottom\">\n   <div class=\"container-fluid row\">\n     <div class=\"pull-right navbar-text\">\n       <a routerLink=\"/profile/{{userId}}\" class=\"cl-icon-padding\">\n         <span class=\"glyphicon glyphicon-user\"></span>\n       </a>\n     </div>\n   </div>\n </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, websiteService, activatedRoute) {
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsitesById(params.websiteId).subscribe(function (website) {
                if (website.developId === params.userId) {
                    _this.websiteId = params.websiteId;
                    _this.userId = params.userId;
                    _this.pageService.findPageByWebsiteId(_this.websiteId).subscribe(function (pages) {
                        _this.pages = pages;
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    console.log("User ID does not match.");
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n\n      <div class=\"navbar-text pull-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a class=\"cl-icon-padding cl-text-black\" (click)=\"createPage(newPage)\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n        </a>\n      </div>\n      <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n        New Page\n      </a>\n    </div>\n  </nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"newPage.name\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"newPage.title\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, websiteService, userService, activatedRoute, router) {
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsitesById(params.websiteId).subscribe(function (website) {
                if (website.developId === params.userId) {
                    _this.websiteId = params.websiteId;
                    _this.userId = params.userId;
                }
                else {
                    console.log("User ID does not match.");
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    PageNewComponent.prototype.createPage = function (page) {
        var _this = this;
        if (page.name.trim() == "") {
            console.log("Name cannot be empty.");
            return;
        }
        if (page.title.trim() == "") {
            console.log("Title cannot be empty.");
            return;
        }
        this.pageService.createPage(this.websiteId, page).subscribe(function (page) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page";
            _this.router.navigate([url]);
        });
    };
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid cl-body-padding\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login(username, password)\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"username\" type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n    <!-- <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span> -->\n\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n    <!-- <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span> -->\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <!-- <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div> -->\n  </form>\n  <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        if (username.trim() == "") {
            this.errorMsg = 'Username cannot be empty';
            this.errorFlag = true;
        }
        if (password.trim() == "") {
            this.errorMsg = 'Password cannot be empty';
            this.errorFlag = true;
        }
        if (!this.errorFlag) {
            this.userService.findUserByCredentials(username, password)
                .subscribe(function (user) {
                _this.errorFlag = false;
                _this.router.navigate(['/profile', user._id]);
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = error;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-primary\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"navbar-brand text-white font-weight-bold\">\n    Profile\n  </div>\n  <a class=\"navbar-brand btn pull-right\" (click)=\"updateUser(user)\">\n    <span class=\"glyphicon glyphicon-ok text-white\"></span>\n  </a>\n</nav>\n<div class=\"container cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\" type=\"text\" id=\"username\" placeholder=\"jannunzi\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" placeholder=\"jannunzi@gmail.com\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\" type=\"text\" id=\"firstName\" placeholder=\"Jose\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\" type=\"text\" id=\"lastName\" placeholder=\"Annunziato\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <a routerLink=\"/profile/{{user._id}}/website\" class=\"btn btn-primary btn-block\">Websites</a>\n    </div>\n    <div class=\"form-group\">\n      <a (click)=\"deleteUser()\" class=\"btn btn-warning btn-block\">Delete User</a>\n    </div>\n    <div class=\"form-group\">\n      <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">Logout</a>\n    </div>\n  </form>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-primary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/profile/{{user._id}}\">\n    <i class=\"glyphicon glyphicon-user text-white\"></i>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            return _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMessage = error.toString();
            });
        });
    };
    ProfileComponent.prototype.updateUser = function (updatedUser) {
        var _this = this;
        this.userService.updateUser(this.userId, updatedUser).subscribe(function (user) {
            _this.errorFlag = false;
            _this.user = user;
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMessage = error;
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.userId).subscribe(function (user) {
            var url = '/login';
            _this.router.navigate([url]);
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMessage = error;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid cl-body-padding\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register(username, password, verifyPassword)\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"username\" type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n    <!--<span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">-->\n      <!--Please enter username!-->\n    <!--</span>-->\n\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n    <!--<span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">-->\n      <!--Please enter password!-->\n    <!--</span>-->\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"verifyPassword\" type=\"password\" name=\"verifyPassword\" placeholder=\"verify password\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"/>\n    </div>\n    <!--<span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">-->\n      <!--Please enter verify password!-->\n    <!--</span>-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\">Register</button>-->\n    <!--</div>-->\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary btn-block\">Register</button>\n    </div>\n    <div class=\"form-group\">\n      <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, password, verifyPassword) {
        var _this = this;
        this.errorFlag = false;
        if (username.trim() == "") {
            this.errorMsg = 'Username cannot be empty';
            this.errorFlag = true;
        }
        if (password.trim() == "") {
            this.errorMsg = 'Password cannot be empty';
            this.errorFlag = true;
        }
        if (this.password != this.verifyPassword) {
            this.errorMsg = 'Password and Verify Password do not match.';
            this.errorFlag = true;
        }
        if (!this.errorFlag) {
            this.user.username = this.username;
            this.user.password = this.password;
            this.userService.createUser(this.user).subscribe(function (user) {
                _this.errorFlag = false;
                _this.router.navigate(['/profile', user._id]);
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = error;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 hidden-xs\">\n        <div class=\"container-fluid\">\n<p class=\"navbar-text pull-left\">\n  <a routerLink=\"/profile/{{userId}}/website\" class=\"navbar-link cl-text-white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n</p>\n<a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n  Websites\n</a>\n<a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n  <span class=\"glyphicon glyphicon-plus\"></span>\n</a>\n</div>\n</div>\n<div class=\"col-xs-8\">\n  <div class=\"container-fluid\">\n    <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n      Edit Websites\n    </a>\n    <a (click)=\"updateWebsite(updatedWebsite)\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</div>\n</div>\n</nav>\n\n<div class=\"contain-fluid\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <div *ngFor=\"let website of websites\">\n      <ul class=\"list-group cl-list-group-borderless\">\n        <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n        <!--</li>-->\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-xs-8 borders\">\n    <form>\n      <div class=\"form-group cl-8-top\">\n        <label for=\"website-name\">Website Name</label>\n        <input [(ngModel)]=\"updatedWebsite.name\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Blogger\" [ngModelOptions]=\"{standalone: true}\"/>\n      </div>\n      <div class=\"form-group cl-8-top\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea [(ngModel)]=\"updatedWebsite.description\" id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Blog is a blog-publishing service.\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n      </div>\n      <a (click)=\"deleteWebsite()\" class=\"btn btn-danger btn-block cl-8-top\">Delete</a>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
        this.updatedWebsite = { _id: "", name: "", developId: "", description: "" };
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsitesById(params.websiteId).subscribe(function (website) {
                _this.websiteId = website._id;
                _this.updatedWebsite = website;
                _this.userId = website.developId;
                console.log(_this.updatedWebsite.name);
            }, function (error) {
                // this is the place to put an error message
            });
            _this.websiteService.findWebsitesByUser(params.userId).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) {
                // this is the place to put an error message
            });
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function (website) {
        var _this = this;
        if (website.name.trim() != "" && website.description.trim() != "") {
            this.websiteService.updateWebsite(this.websiteId, website).subscribe(function (website) {
                _this.updatedWebsite = website;
                var url = '/profile/' + _this.userId + '/website';
                _this.router.navigate([url]);
            }, function (error) {
                // This is the place to put an error message
            });
        }
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        if (this.websiteId.trim() != "") {
            this.websiteService.deleteWebsite(this.websiteId).subscribe(function (website) {
                var url = '/profile/' + _this.userId + '/website';
                _this.router.navigate([url]);
            }, function (error) {
                // Place error message;
            });
        }
    };
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n    <div class=\"container-fluid\">\n<p class=\"navbar-text pull-left\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link cl-text-white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n</p>\n<a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"#\">\n  Websites\n</a>\n<a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n  <span class=\"glyphicon glyphicon-plus\"></span>\n</a>\n</div>\n</nav>\n\n<div class=\"container\">\n  <div *ngFor=\"let website of websites\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n      <!--</li>-->\n    </ul>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            return _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 hidden-xs\">\n        <div class=\"container-fluid\">\n<p class=\"navbar-text pull-left\">\n  <a routerLink=\"/profile/{{userId}}/website\" class=\"navbar-link cl-text-white\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n</p>\n<a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n  Websites\n</a>\n<a href=\"#\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n  <span class=\"glyphicon glyphicon-plus\"></span>\n</a>\n</div>\n</div>\n<div class=\"col-xs-8\">\n  <div class=\"container-fluid\">\n    <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n      New Websites\n    </a>\n    <a (click)=\"createWebsite(newWebsite)\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</div>\n</div>\n</nav>\n\n<div class=\"contain-fluid\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <div *ngFor=\"let website of websites\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <!--<li class=\"list-group-item cl-list-item-borderless\">-->\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n      <!--</li>-->\n    </ul>\n    </div>\n  </div>\n\n  <div class=\"col-xs-8 borders\">\n    <form>\n      <div class=\"form-group cl-8-top\">\n        <label for=\"website-name\">Name</label>\n        <input [(ngModel)]=\"newWebsite.name\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Name\" [ngModelOptions]=\"{standalone: true}\"/>\n      </div>\n      <div class=\"form-group cl-8-top\">\n        <label for=\"website-description\">Description</label>\n        <textarea [(ngModel)]=\"newWebsite.description\" id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function (website) {
        var _this = this;
        if (website.name.trim() != "" && website.description.trim() != "") {
            this.websiteService.createWebsite(this.userId, website).subscribe(function (website) {
                var url = '/profile/' + _this.userId + '/website';
                _this.router.navigate([url]);
            }, function (error) {
                // Place an error message here
            });
        }
    };
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n\n      <div class=\"navbar-text pull-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n        </a>\n      </div>\n\n      <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n        Choose Widget\n      </a>\n    </div>\n  </nav>\n\n<div class=\"container-fluid cl-body-padding\">\n  <div class=\"extra-padding\">\n    <a class=\"btn extra-left-padding\" (click)=\"createWidget('HEADER')\">Header</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"extra-left-padding\" routerLink=\"./\">Label</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"btn extra-left-padding\" (click)=\"createWidget('HTML')\">HTML</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"btn extra-left-padding\" (click)=\"createWidget('TEXT')\">Text Input</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"extra-left-padding\" routerLink=\"./\">Link</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"extra-left-padding\" routerLink=\"./\">Button</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"btn extra-left-padding\" (click)=\"createWidget('IMAGE')\">Image</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"btn extra-left-padding\" (click)=\"createWidget('YOUTUBE')\">YouTube</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"extra-left-padding\" routerLink=\"./\">Data Table</a>\n  </div>\n  <div class=\"extra-padding\">\n    <a class=\"extra-left-padding\" routerLink=\"./\">Repeater</a>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"/profile/{{userId}}\"class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, userService, websiteService, pageService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.userService = userService;
        this.websiteService = websiteService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params.pageId).subscribe(function (page) {
                if (page.websiteId === params.websiteId) {
                    _this.websiteService.findWebsitesById(page.websiteId).subscribe(function (website) {
                        if (website.developId === params.userId) {
                            _this.userId = params.userId;
                            _this.websiteId = params.websiteId;
                            _this.pageId = params.pageId;
                        }
                        else {
                            console.log("User ID does not match.");
                        }
                    });
                }
                else {
                    console.log("Website ID does not match.");
                }
            });
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (widgetType) {
        var _this = this;
        var newWidget = {
            _id: "", widgetType: widgetType, name: 'name', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget/" + widget._id;
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADER'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(pageService, widgetService, websiteService, activatedRoute) {
        this.pageService = pageService;
        this.widgetService = widgetService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.widgetId).subscribe(function (widget) {
                if (widget.pageId === params.pageId) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.websiteId) {
                            _this.websiteService.findWebsitesById(page.websiteId).subscribe(function (website) {
                                if (website.developId === params.userId) {
                                    _this.userId = params.userId;
                                    _this.websiteId = params.websiteId;
                                    _this.pageId = params.pageId;
                                    _this.widgetId = params.widgetId;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n      <div class=\"navbar-text pull-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n        </a>\n      </div>\n      <div class=\"navbar-text pull-right\">\n        <a (click)=\"updateWidget(widget)\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n        </a>\n      </div>\n      <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n        Widget Edit\n      </a>\n    </div>\n  </nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input [(ngModel)] = \"widget.text\" type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input [(ngModel)] = \"widget.size\" type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder=\"3\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  </form>\n  <a (click)=\"deleteWidget()\" class=\"btn btn-danger  btn-block\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"/profile/{{userId}}\"class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router, pageService, websiteService) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.widget = {
            _id: "", widgetType: "", name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.widgetId).subscribe(function (widget) {
                if (widget.pageId === params.pageId) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.websiteId) {
                            _this.websiteService.findWebsitesById(page.websiteId).subscribe(function (website) {
                                if (website.developId === params.userId) {
                                    _this.userId = params.userId;
                                    _this.websiteId = params.websiteId;
                                    _this.pageId = params.pageId;
                                    _this.widgetId = params.widgetId;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function (widget) {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, widget).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widget Edit\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updateWidget(widget)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">HTML</label>\n      <!-- <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" name=\"text\" placeholder=\"Text\"> -->\n      <quill-editor [(ngModel)]=\"widget.text\" id=\"text\"></quill-editor>\n    </div>\n  </form>\n  <a (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/profile/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // properties
        this.widget = {
            _id: "", widgetType: "", name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.widgetId).subscribe(function (widget) {
                if (widget.pageId === params.pageId) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.websiteId) {
                            _this.websiteService.findWebsitesById(page.websiteId).subscribe(function (website) {
                                if (website.developId === params.userId) {
                                    _this.userId = params.userId;
                                    _this.websiteId = params.websiteId;
                                    _this.pageId = params.pageId;
                                    _this.widgetId = params.widgetId;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function (widget) {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, widget).subscribe(function (widget) {
            console.log("good");
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-html',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widget Edit\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updateWidget(widget)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\">\n    </div>\n    <!-- <div class=\"form-group\">\n      <label for=\"url\">URL</label>\n      <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" name=\"url\" placeholder=\"Image URL\">\n    </div> -->\n    <div class=\"form-group\">\n      <label for=\"width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" id=\"width\" placeholder=\"100%\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <!-- <div class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <input type=\"file\" class=\"form-control\" name=\"exampleInputFile\">\n    </div> -->\n    <!-- <div class=\"form-group\">\n      <button class=\"btn btn-block btn-primary\">Upload Image</button>\n    </div> -->\n  </form>\n\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <input name=\"myFile\" type=\"file\" class=\"form-control\" />\n    <input name=\"widgetId\" value=\"{{widgetId}}\" style=\"display: none\" />\n    <input name=\"websiteId\" value=\"{{websiteId}}\" style=\"display: none\" />\n    <input name=\"pageId\" value=\"{{pageId}}\" style=\"display: none\" />\n    <input name=\"userId\" value=\"{{userId}}\" style=\"display: none\" />\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    <br/>\n  </form>\n\n  <a (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"navbar-brand pull-right\" routerLink=\"/user/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(pageService, router, widgetService, websiteService, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.widgetService = widgetService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.widgetId).subscribe(function (widget) {
                if (widget.pageId === params.pageId) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.websiteId) {
                            _this.websiteService.findWebsitesById(page.websiteId).subscribe(function (website) {
                                if (website.developId === params.userId) {
                                    _this.userId = params.userId;
                                    _this.websiteId = params.websiteId;
                                    _this.pageId = params.pageId;
                                    _this.widgetId = params.widgetId;
                                    _this.widget = widget;
                                    _this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetImageComponent.prototype.updateWidget = function (widget) {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, widget).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widget Edit\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updateWidget(widget)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"rows\">Rows</label>\n      <input [(ngModel)]=\"widget.rows\" type=\"number\" class=\"form-control\" id=\"rows\" placeholder=\"Size\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"placeholder\">Placeholder</label>\n      <input [(ngModel)]=\"widget.placeholder\" id=\"placeholder\" class=\"form-control\" required/>\n      <p></p>\n      <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\" />\n      <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\" type=\"checkbox\" />\n      </span>\n    </div>\n  </form>\n  <a (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/profile/{{userId}}\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, pageService, websiteService, userService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        // properties
        this.widget = {
            _id: "", widgetType: "", name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.widgetId).subscribe(function (widget) {
                if (widget.pageId === params.pageId) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.websiteId) {
                            _this.websiteService.findWebsitesById(page.websiteId).subscribe(function (website) {
                                if (website.developId === params.userId) {
                                    _this.userId = params.userId;
                                    _this.websiteId = params.websiteId;
                                    _this.pageId = params.pageId;
                                    _this.widgetId = params.widgetId;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetTextComponent.prototype.updateWidget = function (widget) {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, widget).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widget) {
            var url = "/user/" + _this.userId + "/website/" + _this.websiteId + "/page/" + _this.pageId + "/widget";
            _this.router.navigate([url]);
        }, function (error) {
            console.log(error);
        });
    };
    WidgetTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-text',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widget Edit\n  </div>\n  <a class=\"btn navbar-brand pull-right\" (click)=\"updateWidget(widget)\">\n    <span class=\"glyphicon glyphicon-ok text-dark\"></span>\n  </a>\n</nav>\n<div class=\"container-fluid cl-body-padding\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"url\">URL</label>\n      <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"url\" placeholder=\"YouTube URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" id=\"width\" placeholder=\"100%\">\n    </div>\n  </form>\n  <a (click)=\"deleteWidget()\" class=\"btn btn-block btn-danger\">Delete</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-light bg-secondary\">\n  <a class=\"navbar-brand pull-right\" [routerLink]=\"['/profile']\">\n    <span class=\"glyphicon glyphicon-user text-primary\"></span>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(pageService, websiteService, widgetService, activatedRoute, router) {
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params.widgetId).subscribe(function (widget) {
                if (widget.pageId === params.pageId) {
                    _this.pageService.findPageById(widget.pageId).subscribe(function (page) {
                        if (page.websiteId === params.websiteId) {
                            _this.websiteService.findWebsitesById(page.websiteId).subscribe(function (website) {
                                if (website.developId === params.userId) {
                                    _this.userId = params.userId;
                                    _this.websiteId = params.websiteId;
                                    _this.pageId = params.pageId;
                                    _this.widgetId = params.widgetId;
                                    _this.widget = widget;
                                }
                                else {
                                    console.log("User ID does not match.");
                                }
                            });
                        }
                        else {
                            console.log("Website ID does not match.");
                        }
                    });
                }
            });
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function (widget) {
        this.widgetService.updateWidget(widget._id, widget);
        var url = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget";
        this.router.navigate([url]);
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
        var url = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget";
        this.router.navigate([url]);
    };
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-light bg-secondary\">\n  <a class=\"btn navbar-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n    <span class=\"glyphicon glyphicon-chevron-left text-dark\"></span>\n  </a>\n  <div class=\"navbar-brand font-weight-bold\">\n    Widgets\n  </div>\n  <a class=\"btn navbar-brand pull-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n    <span class=\"glyphicon glyphicon-plus text-dark\"></span>\n  </a>\n</nav>\n\n<div id=\"sortable\" class=\"cl-body-padding\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <div *ngFor=\"let widget of widgets\">\n      <div *ngIf=\"widget.widgetType =='HEADER'\">\n        <div class=\"pull-right\">\n          <a routerLink=\"#\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-menu-hamburger cl-widget-toolbar-hamburger\"></span>\n          </a>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n            <span class=\"glyphicon glyphicon-cog cl-widget-toolbar-cog\"></span>\n          </a>\n        </div>\n        <h1>\n          {{widget.text}}\n        </h1>\n      </div>\n\n    <div *ngIf=\"widget.widgetType == 'HTML'\">\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n      <h1>Html name: {{widget.name}}</h1>\n    </div>\n\n    <div *ngIf=\"widget.widgetType == 'TEXT'\">\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/#']\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n      <h1>Text name: {{widget.name}}</h1>\n    </div>\n\n    <div *ngIf=\"widget.widgetType =='IMAGE'\">\n        <div>\n          <a routerLink=\"#\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-menu-hamburger cl-widget-toolbar-hamburger\"></span>\n          </a>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog cl-widget-toolbar-cog\"></span>\n          </a>\n          <img class=\"img-responsive img-rounded cl-widget-images\" src=\"{{widget.url}}\">\n        </div>\n      </div>\n\n      <div *ngIf=\"widget.widgetType =='YOUTUBE'\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe width=\"{{widget.width}}\" height=\"360\" [src]=\"photoURL(widget.url)\" frameborder=\"0\" allowfullscreen></iframe>\n          <a routerLink=\"#\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-menu-hamburger cl-widget-toolbar-hamburger\"></span>\n          </a>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\" class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog cl-widget-toolbar-cog\"></span>\n          </a>\n        </div>\n      </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"/profile/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n\n    <div class=\"pull-left navbar-text\">\n      <a routerLink=\"#\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-play cl-widget-gly-color\"></span>\n      </a>\n      <a routerLink=\"#\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-eye-open cl-widget-gly-color\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(pageService, sanitizer, widgetService, websiteService, activatedRoute) {
        this.pageService = pageService;
        this.sanitizer = sanitizer;
        this.widgetService = widgetService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageService.findPageById(params.pageId).subscribe(function (page) {
                if (page.websiteId === params.websiteId) {
                    _this.websiteService.findWebsitesById(page.websiteId).subscribe(function (website) {
                        if (website.developId === params.userId) {
                            _this.userId = params.userId;
                            _this.websiteId = params.websiteId;
                            _this.pageId = params.pageId;
                            _this.widgetService.findWidgetsByPageId(_this.pageId).subscribe(function (widgets) {
                                _this.widgets = widgets;
                            }, function (error) {
                                console.log(error);
                            });
                        }
                        else {
                            console.log("User ID does not match.");
                        }
                    });
                }
                else {
                    console.log("Website ID does not match.");
                }
            });
        });
    };
    WidgetListComponent.prototype.photoURL = function (url) {
        var embedUrl = url.replace("youtu.be", "youtube.com/embed");
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    };
    // receiving the emitted event
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(function (data) { return console.log(data); });
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { environment } from '../../environments/environment';

var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].baseUrl;
    }
    // pages: Page[] = [
    //   new Page('321', 'Post 1', '456', 'Lorem' ),
    //   new Page('432', 'Post 2', '456', 'Lorem' ),
    //   new Page('543', 'Post 3', '456', 'Lorem' ),
    // ];
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + "/api/website/" + websiteId + "/page";
        return this.http.post(url, page).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var url = this.baseUrl + "/api/website/" + websiteId + "/page";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.put(url, page).map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId;
        return this.http.delete(url).map(function (res) {
            return res.json();
        });
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {environment} from "../../environments/environment";

var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].baseUrl;
    }
    // users: User[] = [
    //   new User('123', 'alice', 'alice', 'Alice', 'Wonder'),
    //   new User('234', 'bob', 'bob', 'Bob', 'Marley'),
    //   new User('345', 'charly', 'charly', 'Charly', 'Garcia'),
    //   new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi'),
    //
    // ];
    UserService.prototype.createUser = function (user) {
        // this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName));
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user).map(function (res) {
            return res.json();
        });
    };
    // createUser2(user: any) {
    //   user._id = Math.random();
    //   this.users.push(user);
    //   return user;
    // }
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url).map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (userName) {
        var url = this.baseUrl + '/api/user?username=' + userName;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    // updateUser(user: User) {
    //   const url = this.baseUrl + '/api/user/' + user._id;
    //   return this.http.put(url, user).map((response: Response) => {
    //     return response.json();
    //   });
    // }
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user).map(function (response) {
            return response.json();
        });
    };
    // deleteUserById(userId: String) {
    //   const url = this.baseUrl + '/api/user/' + userId;
    //   return this.http.delete(url).map(
    //     (res: Response) => {
    //       return res.json();
    //     }
    //   );
    // }
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url).map(function (res) {
            return res.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { environment } from '../../environments/environment';

var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].baseUrl;
    }
    // websites: Website[] = [
    //   new Website('123', 'Facebook', '456', 'Lorem' ),
    //   new Website('234', 'Twitter', '456', 'Lorem' ),
    //   new Website('456', 'Gizmodo', '456', 'Lorem' ),
    //   new Website('890', 'Go', '123', 'Lorem' ),
    //   new Website('567', 'Tic Tac Toe', '123', 'Lorem' ),
    //   new Website('678', 'Checkers', '123', 'Lorem' ),
    //   new Website('789', 'Chess', '234', 'Lorem' ),
    //
    // ];
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesById = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.put(url, website).map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url).map(function (res) {
            return res.json();
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { environment } from '../../environments/environment';

var WidgetService = /** @class */ (function () {
    // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
    // widgets: Widget[] = [
    //   new Widget('123', 'HEADER', '321', '2', 'GIZMODO' ),
    //   new Widget('234', 'HEADER', '321', '2', 'GIZMODO' ),
    //   new Widget('345', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
    //   new Widget('456', 'HTML', '321', '2', '<p>Lorem ipsum</p>' ),
    //   new Widget('567', 'HEADER', '321', '4', 'Lorem ipsum'),
    //   new Widget('678', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtu.be/AM2Ivdi9c4E' ),
    //   new Widget('789', 'HTML', '321', '2', '<p>Lorem ipsum</p>'),
    //
    // ];
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + "/api/page/" + pageId + "/widget";
        return this.http.post(url, widget).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findImage = function (imageName) {
        var url = this.baseUrl + "/api/image/" + imageName;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + "/api/page/" + pageId + "/widget";
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.get(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.put(url, widget).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.delete(url).map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex;
        return this.http.put(url, '').map(function (res) {
            var data = res;
            return data;
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "../../../../../src/app/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        // this will emit an event for the parent
        // component or the directive calling component
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                // console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                // console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'http://webdev-wu-feiyue.herokuapp.com'
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map