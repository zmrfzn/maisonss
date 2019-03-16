(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n  <!-- start banner Area -->\n  <section class=\"banner-area relative\" id=\"home\">\n    <div class=\"overlay overlay-bg\"></div>\n    <div class=\"container\">\n      <div class=\"row fullscreen d-flex justify-content-center align-items-center\">\n        <div class=\"banner-content col-lg-9 col-md-12 justify-content-center \">\n          <h1>\n            Precise concept design <br>\n            for stylish living\n          </h1>\n          <p class=\"text-white mx-auto\">\n            If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You\n            may see some for as low as $.17 each. You may be saying to yourself.\n          </p>\n          <a href=\"#\" class=\"primary-btn header-btn text-uppercase mt-10\">Get Started</a>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- End banner Area -->\n\n  <!-- Start service Area -->\n  <section class=\"service-area section-gap\" id=\"service\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-12 pb-50 header-text text-center\">\n          <h1 class=\"mb-10\">What we offer to our clients</h1>\n          <p>\n            Who are in extremely love with eco friendly system..\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"single-service\">\n            <a href=\"#\">\n              <h4>Interior Design</h4>\n            </a>\n            <p>\n              Sony laptops are among the most well known laptops on today’s market. Sony is a name that over time has\n              established itself as creating a solid product.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-service\">\n            <a href=\"#\">\n              <h4>Architecture Design</h4>\n            </a>\n            <p>\n              Computer users and programmers have become so accustomed to using Windows, even for the changing\n              capabilities and the appearances of the graphical.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-service\">\n            <a href=\"#\">\n              <h4>Concept Design</h4>\n            </a>\n            <p>\n              Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought\n              that you could record sound.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- End service Area -->\n\n  <!-- Start gallery Area -->\n  <section class=\"gallery-area pb-120\">\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <div class=\"col-md-12 pb-40 header-text text-center\">\n          <h1 class=\"pb-10\">Our Recent Works may impress you</h1>\n          <p>\n            Who are in extremely love with eco friendly system.\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <div class=\"single-gallery\">\n            <div class=\"content\">\n              <a href=\"#\" target=\"_blank\">\n                <div class=\"content-overlay\"></div>\n                <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g1.jpg\" alt=\"\">\n                <div class=\"content-details fadeIn-bottom\">\n                  <h3 class=\"content-title mx-auto\">Lavendar ambient interior</h3>\n                  <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-gallery\">\n            <div class=\"content\">\n              <a href=\"#\" target=\"_blank\">\n                <div class=\"content-overlay\"></div>\n                <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g2.jpg\" alt=\"\">\n                <div class=\"content-details fadeIn-bottom\">\n                  <h3 class=\"content-title mx-auto\">Ambient interior</h3>\n                  <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-gallery\">\n            <div class=\"content\">\n              <a href=\"#\" target=\"_blank\">\n                <div class=\"content-overlay\"></div>\n                <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g3.jpg\" alt=\"\">\n                <div class=\"content-details fadeIn-bottom\">\n                  <h3 class=\"content-title mx-auto\">Ambient interior</h3>\n                  <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-8\">\n          <div class=\"single-gallery\">\n            <div class=\"content\">\n              <a href=\"#\" target=\"_blank\">\n                <div class=\"content-overlay\"></div>\n                <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g4.jpg\" alt=\"\">\n                <div class=\"content-details fadeIn-bottom\">\n                  <h3 class=\"content-title mx-auto\">Lavendar ambient interior</h3>\n                  <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- End gallery Area -->\n\n  <!-- Start feature Area -->\n  <section class=\"feature-area section-gap\">\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <div class=\"col-md-12 pb-40 header-text text-center\">\n          <h1 class=\"pb-10 text-white\">Some Features that Made us Unique</h1>\n          <p class=\"text-white\">\n            Who are in extremely love with eco friendly system.\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"single-feature\">\n            <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n              <span class=\"lnr lnr-user\"></span>\n              <h4>Expert Technicians</h4>\n            </a>\n            <p>\n              Computer users and programmers have become so accustomed to using Windows, even for the changing.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"single-feature\">\n            <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n              <span class=\"lnr lnr-license\"></span>\n              <h4>Professional Service</h4>\n            </a>\n            <p>\n              Finding the perfect learning tool for Flash is a daunting task to any novice web developer. One can find\n              help.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"single-feature\">\n            <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n              <span class=\"lnr lnr-phone\"></span>\n              <h4>Great Support</h4>\n            </a>\n            <p>\n              While most people enjoy casino ambling, sports betting, lottery and bingo playing for the fun and\n              excitement.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"single-feature\">\n            <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n              <span class=\"lnr lnr-rocket\"></span>\n              <h4>Technical Skills</h4>\n            </a>\n            <p>\n              “The moment you think of buying a Web Hosting Plan, you know one thing – So many choices, which one to\n              choose.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"single-feature\">\n            <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n              <span class=\"lnr lnr-diamond\"></span>\n              <h4>Highly Recomended</h4>\n            </a>\n            <p>\n              Many conventional colleges and universities are now offering online DVD repair courses, which are the\n              exact same.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"single-feature\">\n            <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n              <span class=\"lnr lnr-bubble\"></span>\n              <h4>Positive Reviews</h4>\n            </a>\n            <p>\n              So you have your new digital camera and clicking away to glory anything and everything in sight. Now you\n              want.\n            </p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n  <!-- End feature Area -->\n\n  <!-- Start testimonial Area -->\n  <section class=\"testimonial-area pt-120\">\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <div class=\"menu-content pb-70 col-lg-8\">\n          <div class=\"title text-center\">\n            <h1 class=\"mb-10\">Testimonial from our Clients</h1>\n            <p>Who are in extremely love with eco friendly system.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"active-testimonial-carusel\">\n          <div class=\"single-testimonial item d-flex flex-row\">\n            <div class=\"thumb\">\n              <img class=\"img-fluid\" src=\"assets/img/elements/user1.png\" alt=\"\">\n            </div>\n            <div class=\"desc\">\n              <p>\n                Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner,\n                speaker, projector, hardware.\n              </p>\n              <h4 mt-30>Mark Alviro Wiens</h4>\n              <div class=\"star\">\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"single-testimonial item d-flex flex-row\">\n            <div class=\"thumb\">\n              <img class=\"img-fluid\" src=\"assets/img/elements/user2.png\" alt=\"\">\n            </div>\n            <div class=\"desc\">\n              <p>\n                Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of\n                argument pertaining to\n              </p>\n              <h4 mt-30>Lina Harrington</h4>\n              <div class=\"star\">\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star\"></span>\n                <span class=\"fa fa-star\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"single-testimonial item d-flex flex-row\">\n            <div class=\"thumb\">\n              <img class=\"img-fluid\" src=\"assets/img/elements/user1.png\" alt=\"\">\n            </div>\n            <div class=\"desc\">\n              <p>\n                Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner,\n                speaker, projector, hardware.\n              </p>\n              <h4 mt-30>Mark Alviro Wiens</h4>\n              <div class=\"star\">\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"single-testimonial item d-flex flex-row\">\n            <div class=\"thumb\">\n              <img class=\"img-fluid\" src=\"assets/img/elements/user2.png\" alt=\"\">\n            </div>\n            <div class=\"desc\">\n              <p>\n                Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of\n                argument pertaining to\n              </p>\n              <h4 mt-30>Lina Harrington</h4>\n              <div class=\"star\">\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star\"></span>\n                <span class=\"fa fa-star\"></span>\n                <span class=\"fa fa-star\"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- End testimonial Area -->\n\n  <!-- Start callto-action Area -->\n  <section class=\"callto-action-area pt-120\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"callto-action-wrap col-lg-12 relative section-gap\">\n          <div class=\"content\">\n            <h1>\n              Looking for a <br>\n              quality and affordable interior design?\n            </h1>\n            <p class=\"mx-auto\">\n              inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards\n              especially in the workplace.\n            </p>\n            <a href=\"#\" class=\"primary-btn text-uppercase\">Request quote now</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- End callto-action Area -->\n\n  <!-- Start blog Area -->\n  <section class=\"blog-area section-gap\">\n    <div class=\"container\">\n      <div class=\"row d-flex justify-content-center\">\n        <div class=\"menu-content pb-60 col-lg-9\">\n          <div class=\"title text-center\">\n            <h1 class=\"mb-10\">Ongoing Exhibitions from the scratch</h1>\n            <p>Who are in extremely love with eco friendly system.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"active-blog-carusel\">\n          <div class=\"single-blog-post item\">\n            <div class=\"thumb\">\n              <img class=\"img-fluid\" src=\"assets/img/b1.jpg\" alt=\"\">\n            </div>\n            <div class=\"details\">\n              <div class=\"tags\">\n                <ul>\n                  <li>\n                    <a href=\"#\">Travel</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Life Style</a>\n                  </li>\n                </ul>\n              </div>\n              <a href=\"#\">\n                <h4 class=\"title\">Low Cost Advertising</h4>\n              </a>\n              <p>\n                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n              </p>\n              <h6 class=\"date\">31st January,2018</h6>\n            </div>\n          </div>\n          <div class=\"single-blog-post item\">\n            <div class=\"thumb\">\n              <img class=\"img-fluid\" src=\"assets/img/b2.jpg\" alt=\"\">\n            </div>\n            <div class=\"details\">\n              <div class=\"tags\">\n                <ul>\n                  <li>\n                    <a href=\"#\">Travel</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Life Style</a>\n                  </li>\n                </ul>\n              </div>\n              <a href=\"#\">\n                <h4 class=\"title\">Creative Outdoor Ads</h4>\n              </a>\n              <p>\n                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n              </p>\n              <h6 class=\"date\">31st January,2018</h6>\n            </div>\n          </div>\n          <div class=\"single-blog-post item\">\n            <div class=\"thumb\">\n              <img class=\"img-fluid\" src=\"assets/img/b3.jpg\" alt=\"\">\n            </div>\n            <div class=\"details\">\n              <div class=\"tags\">\n                <ul>\n                  <li>\n                    <a href=\"#\">Travel</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Life Style</a>\n                  </li>\n                </ul>\n              </div>\n              <a href=\"#\">\n                <h4 class=\"title\">It's Classified How To Utilize Free</h4>\n              </a>\n              <p>\n                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n              </p>\n              <h6 class=\"date\">31st January,2018</h6>\n            </div>\n          </div>\n          <div class=\"single-blog-post item\">\n            <div class=\"thumb\">\n              <img class=\"img-fluid\" src=\"assets/img/b1.jpg\" alt=\"\">\n            </div>\n            <div class=\"details\">\n              <div class=\"tags\">\n                <ul>\n                  <li>\n                    <a href=\"#\">Travel</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Life Style</a>\n                  </li>\n                </ul>\n              </div>\n              <a href=\"#\">\n                <h4 class=\"title\">Low Cost Advertising</h4>\n              </a>\n              <p>\n                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n              </p>\n              <h6 class=\"date\">31st January,2018</h6>\n            </div>\n          </div>\n          <div class=\"single-blog-post item\">\n            <div class=\"thumb\">\n              <img class=\"img-fluid\" src=\"assets/img/b2.jpg\" alt=\"\">\n            </div>\n            <div class=\"details\">\n              <div class=\"tags\">\n                <ul>\n                  <li>\n                    <a href=\"#\">Travel</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Life Style</a>\n                  </li>\n                </ul>\n              </div>\n              <a href=\"#\">\n                <h4 class=\"title\">Creative Outdoor Ads</h4>\n              </a>\n              <p>\n                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n              </p>\n              <h6 class=\"date\">31st January,2018</h6>\n            </div>\n          </div>\n          <div class=\"single-blog-post item\">\n            <div class=\"thumb\">\n              <img class=\"img-fluid\" src=\"assets/img/b3.jpg\" alt=\"\">\n            </div>\n            <div class=\"details\">\n              <div class=\"tags\">\n                <ul>\n                  <li>\n                    <a href=\"#\">Travel</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Life Style</a>\n                  </li>\n                </ul>\n              </div>\n              <a href=\"#\">\n                <h4 class=\"title\">It's Classified How To Utilize Free</h4>\n              </a>\n              <p>\n                Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n              </p>\n              <h6 class=\"date\">31st January,2018</h6>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- End blog Area -->\n\n  <!-- Start brands Area -->\n  <section class=\"brands-area pb-60 pt-60\">\n    <div class=\"container no-padding\">\n      <div class=\"brand-wrap\">\n        <div class=\"row align-items-center active-brand-carusel justify-content-start no-gutters\">\n          <div class=\"col single-brand\">\n            <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l1.png\" alt=\"\"></a>\n          </div>\n          <div class=\"col single-brand\">\n            <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l2.png\" alt=\"\"></a>\n          </div>\n          <div class=\"col single-brand\">\n            <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l3.png\" alt=\"\"></a>\n          </div>\n          <div class=\"col single-brand\">\n            <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l4.png\" alt=\"\"></a>\n          </div>\n          <div class=\"col single-brand\">\n            <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l5.png\" alt=\"\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- End brands Area -->\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-maisonss';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
/* harmony import */ var _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/services/services.component */ "./src/app/components/pages/services/services.component.ts");
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
/* harmony import */ var _components_pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/projects/projects.component */ "./src/app/components/pages/projects/projects.component.ts");
/* harmony import */ var _components_pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/project-details/project-details.component */ "./src/app/components/pages/project-details/project-details.component.ts");












var appRoutes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
    { path: 'services', component: _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"] },
    { path: 'about-us', component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'contact-us', component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
    { path: 'projects', component: _components_pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"] },
    { path: 'project-info', component: _components_pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_11__["ProjectDetailsComponent"] },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    }
    // ,
    // { path: '**', component: PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"],
                _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _components_pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                _components_pages_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_11__["ProjectDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true })],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start footer Area -->\n<footer class=\"footer-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 col-md-6 col-sm-6\">\n        <div class=\"single-footer-widget\">\n          <h6>About Us</h6>\n          <p>\n            If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it\n            has that.\n          </p>\n          <p class=\"footer-text\">\n            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n            Copyright &copy;\n            <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made\n            with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\"\n              target=\"_blank\">Colorlib</a>\n            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-5  col-md-6 col-sm-6\">\n        <div class=\"single-footer-widget\">\n          <h6>Newsletter</h6>\n          <p>Stay update with our latest</p>\n          <div class=\"\" id=\"mc_embed_signup\">\n            <form target=\"_blank\" novalidate=\"true\"\n              action=\"https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01\"\n              method=\"get\" class=\"form-inline\">\n              <input class=\"form-control\" name=\"EMAIL\" placeholder=\"Email Address\" onfocus=\"this.placeholder = ''\"\n                onblur=\"this.placeholder = 'Email Address'\" required=\"\" type=\"email\">\n              <button class=\"click-btn btn btn-default\"><i class=\"lnr lnr-arrow-right\" aria-hidden=\"true\"></i></button>\n              <div style=\"position: absolute; left: -5000px;\">\n                <input name=\"b_36c4fd991d266f23781ded980_aefe40901a\" tabindex=\"-1\" value=\"\" type=\"text\">\n              </div>\n              <div class=\"info\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-6 col-sm-6 social-widget\">\n        <div class=\"single-footer-widget\">\n          <h6>Follow Us</h6>\n          <p>Let us be social</p>\n          <div class=\"footer-social d-flex align-items-center\">\n            <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n            <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n            <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n            <a href=\"#\"><i class=\"fa fa-behance\"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/layout/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"header-top\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-sm-6 col-4 header-top-left no-padding\">\n          <a href=\"tel:+953 012 3654 896\">+953 012 3654 896</a>\n          <a href=\"mailto:support@colorlib.com\">support@colorlib.com</a>\n        </div>\n        <div class=\"col-lg-6 col-sm-6 col-8 header-top-right no-padding\">\n          <ul>\n            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-behance\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container main-menu\">\n    <div class=\"row align-items-center justify-content-between d-flex\">\n      <div id=\"logo\">\n        <a routerLink=\"/home\"><img src=\"assets/img/logo.png\" alt=\"\" title=\"\" /></a>\n      </div>\n      <nav id=\"nav-menu-container\">\n        <ul class=\"nav-menu\">\n          <li class=\"menu-active\"><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n          <li><a routerLink=\"/about-us\">About</a></li>\n          <li><a routerLink=\"/services\">Services</a></li>\n          <li><a routerLink=\"projects\">Projects</a></li>\n          <li class=\"menu-has-children\"><a href=\"\">Blog</a>\n            <ul>\n              <li><a href=\"blog-home.html\">Blog Home</a></li>\n              <li><a href=\"blog-single.html\">Blog Single</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-has-children\"><a href=\"\">Pages</a>\n            <ul>\n              <li><a href=\"project-details.html\">Project Details</a></li>\n              <li><a href=\"elements.html\">Elements</a></li>\n              <li class=\"menu-has-children\"><a href=\"\">Level 2 </a>\n                <ul>\n                  <li><a href=\"#\">Item One</a></li>\n                  <li><a href=\"#\">Item Two</a></li>\n                </ul>\n              </li>\n            </ul>\n          </li>\n          <li><a routerLink=\"contact-us\">Contact</a></li>\n        </ul>\n      </nav><!-- #nav-menu-container -->\n    </div>\n  </div>\n</header><!-- #header -->"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/layout/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\n<section class=\"banner-area relative\" id=\"home\">\n  <div class=\"overlay overlay-bg\"></div>\n  <div class=\"container\">\n    <div class=\"row fullscreen d-flex justify-content-center align-items-center\">\n      <div class=\"banner-content col-lg-9 col-md-12 justify-content-center \">\n        <h1>\n          Precise concept design <br>\n          for stylish living\n        </h1>\n        <p class=\"text-white mx-auto\">\n          If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You\n          may see some for as low as $.17 each. You may be saying to yourself.\n        </p>\n        <a href=\"#\" class=\"primary-btn header-btn text-uppercase mt-10\">Get Started</a>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End banner Area -->\n\n<!-- Start service Area -->\n<section class=\"service-area section-gap\" id=\"service\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-12 pb-50 header-text text-center\">\n        <h1 class=\"mb-10\">What we offer to our clients</h1>\n        <p>\n          Who are in extremely love with eco friendly system..\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"single-service\">\n          <a href=\"#\">\n            <h4>Interior Design</h4>\n          </a>\n          <p>\n            Sony laptops are among the most well known laptops on today’s market. Sony is a name that over time has\n            established itself as creating a solid product.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-service\">\n          <a href=\"#\">\n            <h4>Architecture Design</h4>\n          </a>\n          <p>\n            Computer users and programmers have become so accustomed to using Windows, even for the changing\n            capabilities and the appearances of the graphical.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-service\">\n          <a href=\"#\">\n            <h4>Concept Design</h4>\n          </a>\n          <p>\n            Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought\n            that you could record sound.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End service Area -->\n\n<!-- Start gallery Area -->\n<section class=\"gallery-area pb-120\">\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-12 pb-40 header-text text-center\">\n        <h1 class=\"pb-10\">Our Recent Works may impress you</h1>\n        <p>\n          Who are in extremely love with eco friendly system.\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <div class=\"single-gallery\">\n          <div class=\"content\">\n            <a href=\"#\" target=\"_blank\">\n              <div class=\"content-overlay\"></div>\n              <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g1.jpg\" alt=\"\">\n              <div class=\"content-details fadeIn-bottom\">\n                <h3 class=\"content-title mx-auto\">Lavendar ambient interior</h3>\n                <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-gallery\">\n          <div class=\"content\">\n            <a href=\"#\" target=\"_blank\">\n              <div class=\"content-overlay\"></div>\n              <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g2.jpg\" alt=\"\">\n              <div class=\"content-details fadeIn-bottom\">\n                <h3 class=\"content-title mx-auto\">Ambient interior</h3>\n                <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-gallery\">\n          <div class=\"content\">\n            <a href=\"#\" target=\"_blank\">\n              <div class=\"content-overlay\"></div>\n              <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g3.jpg\" alt=\"\">\n              <div class=\"content-details fadeIn-bottom\">\n                <h3 class=\"content-title mx-auto\">Ambient interior</h3>\n                <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8\">\n        <div class=\"single-gallery\">\n          <div class=\"content\">\n            <a href=\"#\" target=\"_blank\">\n              <div class=\"content-overlay\"></div>\n              <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g4.jpg\" alt=\"\">\n              <div class=\"content-details fadeIn-bottom\">\n                <h3 class=\"content-title mx-auto\">Lavendar ambient interior</h3>\n                <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End gallery Area -->\n\n<!-- Start feature Area -->\n<section class=\"feature-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-12 pb-40 header-text text-center\">\n        <h1 class=\"pb-10 text-white\">Some Features that Made us Unique</h1>\n        <p class=\"text-white\">\n          Who are in extremely love with eco friendly system.\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-user\"></span>\n            <h4>Expert Technicians</h4>\n          </a>\n          <p>\n            Computer users and programmers have become so accustomed to using Windows, even for the changing.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-license\"></span>\n            <h4>Professional Service</h4>\n          </a>\n          <p>\n            Finding the perfect learning tool for Flash is a daunting task to any novice web developer. One can find\n            help.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-phone\"></span>\n            <h4>Great Support</h4>\n          </a>\n          <p>\n            While most people enjoy casino ambling, sports betting, lottery and bingo playing for the fun and\n            excitement.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-rocket\"></span>\n            <h4>Technical Skills</h4>\n          </a>\n          <p>\n            “The moment you think of buying a Web Hosting Plan, you know one thing – So many choices, which one to\n            choose.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-diamond\"></span>\n            <h4>Highly Recomended</h4>\n          </a>\n          <p>\n            Many conventional colleges and universities are now offering online DVD repair courses, which are the\n            exact same.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-bubble\"></span>\n            <h4>Positive Reviews</h4>\n          </a>\n          <p>\n            So you have your new digital camera and clicking away to glory anything and everything in sight. Now you\n            want.\n          </p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n<!-- End feature Area -->\n\n<!-- Start testimonial Area -->\n<section class=\"testimonial-area pt-120\">\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"menu-content pb-70 col-lg-8\">\n        <div class=\"title text-center\">\n          <h1 class=\"mb-10\">Testimonial from our Clients</h1>\n          <p>Who are in extremely love with eco friendly system.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"active-testimonial-carusel\">\n        <div class=\"single-testimonial item d-flex flex-row\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/elements/user1.png\" alt=\"\">\n          </div>\n          <div class=\"desc\">\n            <p>\n              Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner,\n              speaker, projector, hardware.\n            </p>\n            <h4 mt-30>Mark Alviro Wiens</h4>\n            <div class=\"star\">\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"single-testimonial item d-flex flex-row\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/elements/user2.png\" alt=\"\">\n          </div>\n          <div class=\"desc\">\n            <p>\n              Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of\n              argument pertaining to\n            </p>\n            <h4 mt-30>Lina Harrington</h4>\n            <div class=\"star\">\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"single-testimonial item d-flex flex-row\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/elements/user1.png\" alt=\"\">\n          </div>\n          <div class=\"desc\">\n            <p>\n              Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner,\n              speaker, projector, hardware.\n            </p>\n            <h4 mt-30>Mark Alviro Wiens</h4>\n            <div class=\"star\">\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"single-testimonial item d-flex flex-row\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/elements/user2.png\" alt=\"\">\n          </div>\n          <div class=\"desc\">\n            <p>\n              Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of\n              argument pertaining to\n            </p>\n            <h4 mt-30>Lina Harrington</h4>\n            <div class=\"star\">\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n              <span class=\"fa fa-star\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End testimonial Area -->\n\n<!-- Start callto-action Area -->\n<section class=\"callto-action-area pt-120\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"callto-action-wrap col-lg-12 relative section-gap\">\n        <div class=\"content\">\n          <h1>\n            Looking for a <br>\n            quality and affordable interior design?\n          </h1>\n          <p class=\"mx-auto\">\n            inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards\n            especially in the workplace.\n          </p>\n          <a href=\"#\" class=\"primary-btn text-uppercase\">Request quote now</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End callto-action Area -->\n\n<!-- Start blog Area -->\n<section class=\"blog-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"menu-content pb-60 col-lg-9\">\n        <div class=\"title text-center\">\n          <h1 class=\"mb-10\">Ongoing Exhibitions from the scratch</h1>\n          <p>Who are in extremely love with eco friendly system.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"active-blog-carusel\">\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b1.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">Low Cost Advertising</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b2.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">Creative Outdoor Ads</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b3.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">It's Classified How To Utilize Free</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b1.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">Low Cost Advertising</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b2.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">Creative Outdoor Ads</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b3.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">It's Classified How To Utilize Free</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End blog Area -->\n\n<!-- Start brands Area -->\n<section class=\"brands-area pb-60 pt-60\">\n  <div class=\"container no-padding\">\n    <div class=\"brand-wrap\">\n      <div class=\"row align-items-center active-brand-carusel justify-content-start no-gutters\">\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l1.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l2.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l3.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l4.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l5.png\" alt=\"\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End brands Area -->"

/***/ }),

/***/ "./src/app/components/layout/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/layout/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/layout/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/layout/layout.module.ts ***!
  \****************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/layout/home/home.component.ts");







var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: [],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/components/pages/about/about.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/about/about.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\n<section class=\"banner-area relative\" id=\"home\">\n  <div class=\"overlay overlay-bg\"></div>\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center justify-content-center\">\n      <div class=\"about-content col-lg-12\">\n        <h1 class=\"text-white\">\n          About Us\n        </h1>\n        <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a\n            href=\"about.html\"> About Us</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End banner Area -->\n\n<!-- Start about-video Area -->\n<section class=\"about-video-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-6 about-video-left\">\n        <h6 class=\"text-uppercase\">Brand new app to blow your mind</h6>\n        <h1>\n          We’ve made a life <br>\n          that will change you\n        </h1>\n        <p>\n          <span>We are here to listen from you deliver exellence</span>\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim.\n        </p>\n        <a class=\"primary-btn mt-30\" href=\"#\">Get Started Now</a>\n      </div>\n      <div class=\"col-lg-6 about-video-right justify-content-center align-items-center d-flex relative\">\n        <div class=\"overlay overlay-bg\"></div>\n        <a class=\"play-btn\" href=\"https://www.youtube.com/watch?v=ARA0AxrnHdM\"><img class=\"img-fluid mx-auto\"\n            src=\"assets/img/play-btn.png\" alt=\"\"></a>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End about-video Area -->\n\n<!-- Start feature Area -->\n<section class=\"feature-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-12 pb-40 header-text text-center\">\n        <h1 class=\"pb-10 text-white\">Some Features that Made us Unique</h1>\n        <p class=\"text-white\">\n          Who are in extremely love with eco friendly system.\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-user\"></span>\n            <h4>Expert Technicians</h4>\n          </a>\n          <p>\n            Computer users and programmers have become so accustomed to using Windows, even for the changing.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-license\"></span>\n            <h4>Professional Service</h4>\n          </a>\n          <p>\n            Finding the perfect learning tool for Flash is a daunting task to any novice web developer. One can find\n            help.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-phone\"></span>\n            <h4>Great Support</h4>\n          </a>\n          <p>\n            While most people enjoy casino ambling, sports betting, lottery and bingo playing for the fun and\n            excitement.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-rocket\"></span>\n            <h4>Technical Skills</h4>\n          </a>\n          <p>\n            “The moment you think of buying a Web Hosting Plan, you know one thing – So many choices, which one to\n            choose.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-diamond\"></span>\n            <h4>Highly Recomended</h4>\n          </a>\n          <p>\n            Many conventional colleges and universities are now offering online DVD repair courses, which are the exact\n            same.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-bubble\"></span>\n            <h4>Positive Reviews</h4>\n          </a>\n          <p>\n            So you have your new digital camera and clicking away to glory anything and everything in sight. Now you\n            want.\n          </p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n<!-- End feature Area -->\n\n<!-- Start testimonial Area -->\n<section class=\"testimonial-area pt-120\">\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"menu-content pb-70 col-lg-8\">\n        <div class=\"title text-center\">\n          <h1 class=\"mb-10\">Testimonial from our Clients</h1>\n          <p>Who are in extremely love with eco friendly system.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"active-testimonial-carusel\">\n        <div class=\"single-testimonial item d-flex flex-row\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/elements/user1.png\" alt=\"\">\n          </div>\n          <div class=\"desc\">\n            <p>\n              Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner,\n              speaker, projector, hardware.\n            </p>\n            <h4 mt-30>Mark Alviro Wiens</h4>\n            <div class=\"star\">\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"single-testimonial item d-flex flex-row\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/elements/user2.png\" alt=\"\">\n          </div>\n          <div class=\"desc\">\n            <p>\n              Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of\n              argument pertaining to\n            </p>\n            <h4 mt-30>Lina Harrington</h4>\n            <div class=\"star\">\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"single-testimonial item d-flex flex-row\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/elements/user1.png\" alt=\"\">\n          </div>\n          <div class=\"desc\">\n            <p>\n              Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner,\n              speaker, projector, hardware.\n            </p>\n            <h4 mt-30>Mark Alviro Wiens</h4>\n            <div class=\"star\">\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"single-testimonial item d-flex flex-row\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/elements/user2.png\" alt=\"\">\n          </div>\n          <div class=\"desc\">\n            <p>\n              Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of\n              argument pertaining to\n            </p>\n            <h4 mt-30>Lina Harrington</h4>\n            <div class=\"star\">\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n              <span class=\"fa fa-star\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End testimonial Area -->\n\n<!-- Start callto-action Area -->\n<section class=\"callto-action-area pt-120\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"callto-action-wrap col-lg-12 relative section-gap\">\n        <div class=\"content\">\n          <h1>\n            Looking for a <br>\n            quality and affordable interior design?\n          </h1>\n          <p class=\"mx-auto\">\n            inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards\n            especially in the workplace.\n          </p>\n          <a href=\"#\" class=\"primary-btn text-uppercase\">Request quote now</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End callto-action Area -->\n\n<!-- Start blog Area -->\n<section class=\"blog-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"menu-content pb-60 col-lg-9\">\n        <div class=\"title text-center\">\n          <h1 class=\"mb-10\">Ongoing Exhibitions from the scratch</h1>\n          <p>Who are in extremely love with eco friendly system.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"active-blog-carusel\">\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b1.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">Low Cost Advertising</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b2.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">Creative Outdoor Ads</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b3.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">It's Classified How To Utilize Free</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b1.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">Low Cost Advertising</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b2.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">Creative Outdoor Ads</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n        <div class=\"single-blog-post item\">\n          <div class=\"thumb\">\n            <img class=\"img-fluid\" src=\"assets/img/b3.jpg\" alt=\"\">\n          </div>\n          <div class=\"details\">\n            <div class=\"tags\">\n              <ul>\n                <li>\n                  <a href=\"#\">Travel</a>\n                </li>\n                <li>\n                  <a href=\"#\">Life Style</a>\n                </li>\n              </ul>\n            </div>\n            <a href=\"#\">\n              <h4 class=\"title\">It's Classified How To Utilize Free</h4>\n            </a>\n            <p>\n              Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer.\n            </p>\n            <h6 class=\"date\">31st January,2018</h6>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End blog Area -->\n\n<!-- Start brands Area -->\n<section class=\"brands-area pb-60 pt-60\">\n  <div class=\"container no-padding\">\n    <div class=\"brand-wrap\">\n      <div class=\"row align-items-center active-brand-carusel justify-content-start no-gutters\">\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l1.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l2.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l3.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l4.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l5.png\" alt=\"\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End brands Area -->"

/***/ }),

/***/ "./src/app/components/pages/about/about.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/pages/about/about.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/contact/contact.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\n<section class=\"banner-area relative\" id=\"home\">\n  <div class=\"overlay overlay-bg\"></div>\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center justify-content-center\">\n      <div class=\"about-content col-lg-12\">\n        <h1 class=\"text-white\">\n          Contact Us\n        </h1>\n        <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a\n            href=\"contact.html\"> Contact Us</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End banner Area -->\n\n<!-- Start contact-page Area -->\n<section class=\"contact-page-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"map-wrap\" style=\"width:100%; height: 445px;\" id=\"map\"></div>\n      <div class=\"col-lg-4 d-flex flex-column address-wrap\">\n        <div class=\"single-contact-address d-flex flex-row\">\n          <div class=\"icon\">\n            <span class=\"lnr lnr-home\"></span>\n          </div>\n          <div class=\"contact-details\">\n            <h5>Binghamton, New York</h5>\n            <p>\n              4343 Hinkle Deegan Lake Road\n            </p>\n          </div>\n        </div>\n        <div class=\"single-contact-address d-flex flex-row\">\n          <div class=\"icon\">\n            <span class=\"lnr lnr-phone-handset\"></span>\n          </div>\n          <div class=\"contact-details\">\n            <h5>00 (958) 9865 562</h5>\n            <p>Mon to Fri 9am to 6 pm</p>\n          </div>\n        </div>\n        <div class=\"single-contact-address d-flex flex-row\">\n          <div class=\"icon\">\n            <span class=\"lnr lnr-envelope\"></span>\n          </div>\n          <div class=\"contact-details\">\n            <h5>support@colorlib.com</h5>\n            <p>Send us your query anytime!</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8\">\n        <form class=\"form-area \" id=\"myForm\" action=\"mail.php\" method=\"post\" class=\"contact-form text-right\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 form-group\">\n              <input name=\"name\" placeholder=\"Enter your name\" onfocus=\"this.placeholder = ''\"\n                onblur=\"this.placeholder = 'Enter your name'\" class=\"common-input mb-20 form-control\" required=\"\"\n                type=\"text\">\n\n              <input name=\"email\" placeholder=\"Enter email address\"\n                pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$\" onfocus=\"this.placeholder = ''\"\n                onblur=\"this.placeholder = 'Enter email address'\" class=\"common-input mb-20 form-control\" required=\"\"\n                type=\"email\">\n\n              <input name=\"subject\" placeholder=\"Enter your subject\" onfocus=\"this.placeholder = ''\"\n                onblur=\"this.placeholder = 'Enter your subject'\" class=\"common-input mb-20 form-control\" required=\"\"\n                type=\"text\">\n            </div>\n            <div class=\"col-lg-6 form-group\">\n              <textarea class=\"common-textarea form-control\" name=\"message\" placeholder=\"Messege\"\n                onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Messege'\" required=\"\"></textarea>\n            </div>\n            <div class=\"col-lg-12\">\n              <div class=\"alert-msg\" style=\"text-align: left;\"></div>\n              <button class=\"genric-btn primary circle\" style=\"float: right;\">Send Message</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End contact-page Area -->"

/***/ }),

/***/ "./src/app/components/pages/contact/contact.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/pages/contact/contact.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/project-details/project-details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/project-details/project-details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\n<section class=\"banner-area relative\" id=\"home\">\n  <div class=\"overlay overlay-bg\"></div>\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center justify-content-center\">\n      <div class=\"about-content col-lg-12\">\n        <h1 class=\"text-white\">\n          Project Details\n        </h1>\n        <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a\n            href=\"projects-details.html\"> Project Details</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End banner Area -->\n\n<!-- Start project-details Area -->\n<section class=\"project-details-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-6 project-details-left\">\n        <img class=\"assets/img-fluid\" src=\"assets/img/project-details.jpg\" alt=\"\">\n      </div>\n      <div class=\"col-lg-6 project-details-right\">\n        <h3 class=\"pb-20\">Lavendar ambient interior</h3>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.\n        </p>\n        <div class=\"details-info d-flex flex-row\">\n          <ul class=\"names\">\n            <li>Rating </li>\n            <li>Client </li>\n            <li>Website </li>\n            <li>Completed </li>\n          </ul>\n          <ul class=\"desc\">\n            <li>\n              <div class=\"star\">\n                : <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star checked\"></span>\n                <span class=\"fa fa-star\"></span>\n              </div>\n            </li>\n            <li>: Envato</li>\n            <li>: Themeforest.net</li>\n            <li>: 17 Aug 1028</li>\n          </ul>\n        </div>\n        <div class=\"social-links mt-30\">\n          <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n          <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n          <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n          <a href=\"#\"><i class=\"fa fa-behance\"></i></a>\n          <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n        </div>\n      </div>\n      <div class=\"col-lg-12 project-desc mt-60\">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit.\n          <br>\n          <br>\n          Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n          sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error\n          sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore\n          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non\n          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End project-details Area -->\n\n<!-- Start brands Area -->\n<section class=\"brands-area pb-60 pt-60\">\n  <div class=\"container no-padding\">\n    <div class=\"brand-wrap\">\n      <div class=\"row align-items-center active-brand-carusel justify-content-start no-gutters\">\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l1.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l2.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l3.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l4.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l5.png\" alt=\"\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End brands Area -->"

/***/ }),

/***/ "./src/app/components/pages/project-details/project-details.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/project-details/project-details.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pages/project-details/project-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/project-details/project-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent() {
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/components/pages/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.scss */ "./src/app/components/pages/project-details/project-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/projects/projects.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/projects/projects.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\n<section class=\"banner-area relative\" id=\"home\">\n  <div class=\"overlay overlay-bg\"></div>\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center justify-content-center\">\n      <div class=\"about-content col-lg-12\">\n        <h1 class=\"text-white\">\n          Projects\n        </h1>\n        <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a\n            href=\"projects.html\"> Projects</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End banner Area -->\n\n<!-- Start gallery Area -->\n<section class=\"gallery-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-12 pb-40 header-text text-center\">\n        <h1 class=\"pb-10\">Our Recent Works may impress you</h1>\n        <p>\n          Who are in extremely love with eco friendly system.\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <div class=\"single-gallery\">\n          <div class=\"content\">\n            <a href=\"#\" target=\"_blank\">\n              <div class=\"content-overlay\"></div>\n              <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g1.jpg\" alt=\"\">\n              <div class=\"content-details fadeIn-bottom\">\n                <h3 class=\"content-title mx-auto\">Lavendar ambient interior</h3>\n                <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-gallery\">\n          <div class=\"content\">\n            <a href=\"#\" target=\"_blank\">\n              <div class=\"content-overlay\"></div>\n              <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g2.jpg\" alt=\"\">\n              <div class=\"content-details fadeIn-bottom\">\n                <h3 class=\"content-title mx-auto\">Ambient interior</h3>\n                <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-gallery\">\n          <div class=\"content\">\n            <a href=\"#\" target=\"_blank\">\n              <div class=\"content-overlay\"></div>\n              <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g3.jpg\" alt=\"\">\n              <div class=\"content-details fadeIn-bottom\">\n                <h3 class=\"content-title mx-auto\">Ambient interior</h3>\n                <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8\">\n        <div class=\"single-gallery\">\n          <div class=\"content\">\n            <a href=\"#\" target=\"_blank\">\n              <div class=\"content-overlay\"></div>\n              <img class=\"content-image img-fluid d-block mx-auto\" src=\"assets/img/g4.jpg\" alt=\"\">\n              <div class=\"content-details fadeIn-bottom\">\n                <h3 class=\"content-title mx-auto\">Lavendar ambient interior</h3>\n                <a href=\"project-details.html\" class=\"primary-btn text-uppercase mt-20\">More Details</a>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End gallery Area -->\n\n<!-- Start brands Area -->\n<section class=\"brands-area pb-60 pt-60\">\n  <div class=\"container no-padding\">\n    <div class=\"brand-wrap\">\n      <div class=\"row align-items-center active-brand-carusel justify-content-start no-gutters\">\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l1.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l2.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l3.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l4.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l5.png\" alt=\"\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End brands Area -->"

/***/ }),

/***/ "./src/app/components/pages/projects/projects.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/projects/projects.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/pages/projects/projects.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/services/services.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/services/services.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\n<section class=\"banner-area relative\" id=\"home\">\n  <div class=\"overlay overlay-bg\"></div>\n  <div class=\"container\">\n    <div class=\"row d-flex align-items-center justify-content-center\">\n      <div class=\"about-content col-lg-12\">\n        <h1 class=\"text-white\">\n          Services\n        </h1>\n        <p class=\"text-white link-nav\"><a href=\"index.html\">Home </a> <span class=\"lnr lnr-arrow-right\"></span> <a\n            href=\"services.html\"> Services</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End banner Area -->\n\n<!-- Start service Area -->\n<section class=\"service-area section-gap\" id=\"service\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-12 pb-50 header-text text-center\">\n        <h1 class=\"mb-10\">What we offer to our clients</h1>\n        <p>\n          Who are in extremely love with eco friendly system..\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"single-service\">\n          <a href=\"#\">\n            <h4>Interior Design</h4>\n          </a>\n          <p>\n            Sony laptops are among the most well known laptops on today’s market. Sony is a name that over time has\n            established itself as creating a solid product.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-service\">\n          <a href=\"#\">\n            <h4>Architecture Design</h4>\n          </a>\n          <p>\n            Computer users and programmers have become so accustomed to using Windows, even for the changing\n            capabilities and the appearances of the graphical.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-service\">\n          <a href=\"#\">\n            <h4>Concept Design</h4>\n          </a>\n          <p>\n            Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that\n            you could record sound.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End service Area -->\n\n<!-- Start feature Area -->\n<section class=\"feature-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-md-12 pb-40 header-text text-center\">\n        <h1 class=\"pb-10 text-white\">Some Features that Made us Unique</h1>\n        <p class=\"text-white\">\n          Who are in extremely love with eco friendly system.\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-user\"></span>\n            <h4>Expert Technicians</h4>\n          </a>\n          <p>\n            Computer users and programmers have become so accustomed to using Windows, even for the changing.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-license\"></span>\n            <h4>Professional Service</h4>\n          </a>\n          <p>\n            Finding the perfect learning tool for Flash is a daunting task to any novice web developer. One can find\n            help.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-phone\"></span>\n            <h4>Great Support</h4>\n          </a>\n          <p>\n            While most people enjoy casino ambling, sports betting, lottery and bingo playing for the fun and\n            excitement.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-rocket\"></span>\n            <h4>Technical Skills</h4>\n          </a>\n          <p>\n            “The moment you think of buying a Web Hosting Plan, you know one thing – So many choices, which one to\n            choose.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-diamond\"></span>\n            <h4>Highly Recomended</h4>\n          </a>\n          <p>\n            Many conventional colleges and universities are now offering online DVD repair courses, which are the exact\n            same.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-feature\">\n          <a href=\"#\" class=\"title d-flex flex-row align-items-center\">\n            <span class=\"lnr lnr-bubble\"></span>\n            <h4>Positive Reviews</h4>\n          </a>\n          <p>\n            So you have your new digital camera and clicking away to glory anything and everything in sight. Now you\n            want.\n          </p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n<!-- End feature Area -->\n\n<!-- Start callto-action Area -->\n<section class=\"callto-action-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"callto-action-wrap col-lg-12 relative section-gap\">\n        <div class=\"content\">\n          <h1>\n            Looking for a <br>\n            quality and affordable interior design?\n          </h1>\n          <p class=\"mx-auto\">\n            inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards\n            especially in the workplace.\n          </p>\n          <a href=\"#\" class=\"primary-btn text-uppercase\">Request quote now</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End callto-action Area -->\n\n<!-- Start brands Area -->\n<section class=\"brands-area pb-60 pt-60\">\n  <div class=\"container no-padding\">\n    <div class=\"brand-wrap\">\n      <div class=\"row align-items-center active-brand-carusel justify-content-start no-gutters\">\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l1.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l2.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l3.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l4.png\" alt=\"\"></a>\n        </div>\n        <div class=\"col single-brand\">\n          <a href=\"#\"><img class=\"mx-auto\" src=\"assets/img/l5.png\" alt=\"\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End brands Area -->"

/***/ }),

/***/ "./src/app/components/pages/services/services.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/services/services.component.ts ***!
  \*****************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/pages/services/services.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zameer/workspace/amy/maisonss/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map