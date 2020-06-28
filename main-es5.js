(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Timer -->\n<div class=\"timer\">\n    <app-timer style=\"position: absolute;transform: translate(-50%,-50%);left: 50%;top: 50%;\"></app-timer>\n</div>\n\n<!-- Content -->\n<div class=\"content\">\n    <app-content></app-content>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/content/content.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content/content.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/timer/timer.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/timer/timer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"balloonspec white\">\n        <div class=\"star-red\"></div>\n        <div class=\"face\">\n            <div class=\"eye\"></div>\n            <div class=\"mouth happy\"></div>\n        </div>\n        <div class=\"triangle\"></div>\n        <div class=\"string\"></div>\n    </div>\n\n    <div class=\"balloonspec red\">\n        <div class=\"star\"></div>\n        <div class=\"face\">\n            <div class=\"eye\"></div>\n            <div class=\"mouth happy\"></div>\n        </div>\n        <div class=\"triangle\"></div>\n        <div class=\"string\"></div>\n    </div>\n\n    <div class=\"balloonspec yellow\">\n        <div class=\"star\"></div>\n        <div class=\"face\">\n            <div class=\"eye\"></div>\n            <div class=\"mouth happy\"></div>\n        </div>\n        <div class=\"triangle\"></div>\n        <div class=\"string\"></div>\n    </div>\n\n    <div class=\"balloonspec blue\">\n        <div class=\"star\"></div>\n        <div class=\"face\">\n            <div class=\"eye\"></div>\n            <div class=\"mouth happy\"></div>\n        </div>\n        <div class=\"triangle\"></div>\n        <div class=\"string\"></div>\n    </div>\n    <div id=\"timer\">\n        <div class=\"days\">\n            <div class=\"numbers\">{{ days }}</div>days</div>\n        <div class=\"hours\">\n            <div class=\"numbers\">{{ hours }}</div>hours</div>\n        <div class=\"minutes\">\n            <div class=\"numbers\">{{ minutes }}</div>minutes</div>\n        <div class=\"seconds\">\n            <div class=\"numbers\">{{ seconds }}</div>seconds</div>\n    </div>\n    <h1>27 july 2020</h1>\n    <div class=\"balloon\" style=\"zoom: 50%;\">\n        <div><span>J</span>\n        </div>\n        <div><span>A</span>\n        </div>\n        <div><span>N</span>\n        </div>\n        <div><span>A</span>\n        </div>\n        <div><span>N</span>\n        </div>\n        <div><span>I</span>\n        </div>\n    </div>\n</div>"

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'Surprise';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/content.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/index.js!./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/content/content.component.scss")]
        })
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/timer/timer.component.scss":
/*!********************************************!*\
  !*** ./src/app/timer/timer.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:900\");\n@charset \"UTF-8\";\n.container {\n  position: relative;\n  overflow: hidden;\n  width: 650px;\n  height: 480px;\n}\nh1 {\n  font-family: \"Lato\", sans-serif;\n  text-align: center;\n  margin-top: 2em;\n  font-size: 1em;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  color: #F6F4F3;\n}\n#timer {\n  color: #F6F4F3;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: \"Lato\", sans-serif;\n  font-size: 0.7em;\n  letter-spacing: 5px;\n  margin-top: 25%;\n}\n.days,\n.hours,\n.minutes,\n.seconds {\n  display: inline-block;\n  padding: 20px;\n  width: 100px;\n  border-radius: 5px;\n}\n.days {\n  background: #EF2F3C;\n}\n.hours {\n  background: #F6F4F3;\n  color: #183059;\n}\n.minutes {\n  background: #276FBF;\n}\n.seconds {\n  background: #F0A202;\n}\n.numbers {\n  font-family: \"Montserrat\", sans-serif;\n  color: #183059;\n  font-size: 4em;\n}\n.white {\n  position: absolute;\n  background: #F6F4F3;\n  height: 85px;\n  width: 75px;\n  left: 30%;\n  top: 2%;\n}\n.white .triangle {\n  border-bottom: 14px solid #F6F4F3;\n}\n.white .string {\n  background: #F6F4F3;\n  border: 1px solid #F6F4F3;\n}\n.red {\n  position: absolute;\n  background: #EF2F3C;\n  left: 12%;\n  top: 9%;\n  height: 65px;\n  width: 70px;\n}\n.red .triangle {\n  border-bottom: 14px solid #EF2F3C;\n}\n.red .string {\n  background: #EF2F3C;\n  border: 1px solid #EF2F3C;\n}\n.yellow {\n  position: absolute;\n  background: #F0A202;\n  left: 78%;\n  top: 9%;\n  height: 65px;\n  width: 70px;\n}\n.yellow .triangle {\n  border-bottom: 14px solid #F0A202;\n}\n.yellow .string {\n  background: #F0A202;\n  border: 1px solid #F0A202;\n}\n.blue {\n  position: absolute;\n  background: #276FBF;\n  height: 80px;\n  width: 80px;\n  left: 60%;\n  top: 5%;\n}\n.blue .triangle {\n  border-bottom: 14px solid #276FBF;\n}\n.blue .string {\n  background: #276FBF;\n  border: 1px solid #276FBF;\n}\n.balloonspec {\n  border: 1px solid #000;\n  border-radius: 50% 50% 50% 50%/40% 40% 60% 60%;\n  z-index: 2;\n}\n.eye {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  top: 40%;\n  left: 22%;\n  background: #000;\n  border-radius: 50%;\n}\n.eye:after {\n  content: \"\";\n  left: 35px;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #000;\n  position: absolute;\n}\n.mouth {\n  position: absolute;\n  top: 45%;\n  left: 43%;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.happy {\n  border: 2px solid;\n  border-color: transparent #000 #000 transparent;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.triangle {\n  position: absolute;\n  left: 40%;\n  bottom: -10%;\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n.string {\n  position: absolute;\n  height: 70px;\n  width: 1px;\n  left: 48%;\n  top: 100%;\n  z-index: -1;\n}\n.star {\n  width: 20px;\n  height: 20px;\n  background: #F6F4F3;\n  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n}\n.star-red {\n  width: 30px;\n  height: 30px;\n  margin-left: 51px;\n  margin-top: -5px;\n  background: #EF2F3C;\n  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n}\nfooter {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  text-transform: uppercase;\n  padding: 10px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 0.7em;\n}\nfooter p {\n  letter-spacing: 3px;\n  color: #EF2F3C;\n}\nfooter a {\n  color: #F6F4F3;\n  text-decoration: none;\n}\nfooter a:hover {\n  color: #276FBF;\n}\n.balloon {\n  font-family: \"Lato\", sans-serif;\n  font-size: 1em;\n  width: 738px;\n  margin: 0 auto;\n  padding-top: 30px;\n  position: relative;\n}\n.balloon > div {\n  width: 104px;\n  height: 140px;\n  background: rgba(182, 15, 97, 0.9);\n  border-radius: 0;\n  border-radius: 80% 80% 80% 80%;\n  margin: 0 auto;\n  position: absolute;\n  padding: 10px;\n  box-shadow: inset 17px 7px 10px rgba(182, 15, 97, 0.9);\n  -webkit-transform-origin: bottom center;\n}\n.balloon > div:nth-child(1) {\n  background: rgba(182, 15, 97, 0.9);\n  left: 0;\n  box-shadow: inset 10px 10px 10px rgba(135, 11, 72, 0.9);\n  -webkit-animation: balloon1 6s ease-in-out infinite;\n  animation: balloon1 6s ease-in-out infinite;\n}\n.balloon > div:nth-child(1):before {\n  color: rgba(182, 15, 97, 0.9);\n}\n.balloon > div:nth-child(2) {\n  background: rgba(242, 112, 45, 0.9);\n  left: 120px;\n  box-shadow: inset 10px 10px 10px rgba(222, 85, 14, 0.9);\n  -webkit-animation: balloon2 6s ease-in-out infinite;\n  animation: balloon2 6s ease-in-out infinite;\n}\n.balloon > div:nth-child(2):before {\n  color: rgba(242, 112, 45, 0.9);\n}\n.balloon > div:nth-child(3) {\n  background: rgba(45, 181, 167, 0.9);\n  left: 240px;\n  box-shadow: inset 10px 10px 10px rgba(35, 140, 129, 0.9);\n  -webkit-animation: balloon4 6s ease-in-out infinite;\n  animation: balloon4 6s ease-in-out infinite;\n}\n.balloon > div:nth-child(3):before {\n  color: rgba(45, 181, 167, 0.9);\n}\n.balloon > div:nth-child(4) {\n  background: rgba(190, 61, 244, 0.9);\n  left: 360px;\n  box-shadow: inset 10px 10px 10px rgba(173, 14, 240, 0.9);\n  -webkit-animation: balloon1 5s ease-in-out infinite;\n  animation: balloon1 5s ease-in-out infinite;\n}\n.balloon > div:nth-child(4):before {\n  color: rgba(190, 61, 244, 0.9);\n}\n.balloon > div:nth-child(5) {\n  background: rgba(180, 224, 67, 0.9);\n  left: 480px;\n  box-shadow: inset 10px 10px 10px rgba(158, 206, 34, 0.9);\n  -webkit-animation: balloon3 5s ease-in-out infinite;\n  animation: balloon3 5s ease-in-out infinite;\n}\n.balloon > div:nth-child(5):before {\n  color: rgba(180, 224, 67, 0.9);\n}\n.balloon > div:nth-child(6) {\n  background: rgba(242, 194, 58, 0.9);\n  left: 600px;\n  box-shadow: inset 10px 10px 10px rgba(234, 177, 15, 0.9);\n  -webkit-animation: balloon2 3s ease-in-out infinite;\n  animation: balloon2 3s ease-in-out infinite;\n}\n.balloon > div:nth-child(6):before {\n  color: rgba(242, 194, 58, 0.9);\n}\n.balloon > div:before {\n  color: rgba(182, 15, 97, 0.9);\n  position: absolute;\n  bottom: -11px;\n  left: 52px;\n  content: \"▲\";\n  font-size: 1em;\n}\nspan {\n  font-size: 4.8em;\n  color: white;\n  position: relative;\n  top: 30px;\n  left: 50%;\n  margin-left: -27px;\n}\n/*BALLOON 1 4*/\n@-webkit-keyframes balloon1 {\n  0%, 100% {\n    -webkit-transform: translateY(0) rotate(-6deg);\n  }\n  50% {\n    -webkit-transform: translateY(-20px) rotate(8deg);\n  }\n}\n@keyframes balloon1 {\n  0%, 100% {\n    -webkit-transform: translateY(0) rotate(-6deg);\n            transform: translateY(0) rotate(-6deg);\n  }\n  50% {\n    -webkit-transform: translateY(-20px) rotate(8deg);\n            transform: translateY(-20px) rotate(8deg);\n  }\n}\n/* BAllOON 2 5*/\n@-webkit-keyframes balloon2 {\n  0%, 100% {\n    -webkit-transform: translateY(0) rotate(6eg);\n  }\n  50% {\n    -webkit-transform: translateY(-30px) rotate(-8deg);\n  }\n}\n@keyframes balloon2 {\n  0%, 100% {\n    -webkit-transform: translateY(0) rotate(6deg);\n            transform: translateY(0) rotate(6deg);\n  }\n  50% {\n    -webkit-transform: translateY(-30px) rotate(-8deg);\n            transform: translateY(-30px) rotate(-8deg);\n  }\n}\n/* BAllOON 0*/\n@-webkit-keyframes balloon3 {\n  0%, 100% {\n    -webkit-transform: translate(0, -10px) rotate(6eg);\n  }\n  50% {\n    -webkit-transform: translate(-20px, 30px) rotate(-8deg);\n  }\n}\n@keyframes balloon3 {\n  0%, 100% {\n    -webkit-transform: translate(0, -10px) rotate(6eg);\n            transform: translate(0, -10px) rotate(6eg);\n  }\n  50% {\n    -webkit-transform: translate(-20px, 30px) rotate(-8deg);\n            transform: translate(-20px, 30px) rotate(-8deg);\n  }\n}\n/* BAllOON 3*/\n@-webkit-keyframes balloon4 {\n  0%, 100% {\n    -webkit-transform: translate(10px, -10px) rotate(-8eg);\n  }\n  50% {\n    -webkit-transform: translate(-15px, 20px) rotate(10deg);\n  }\n}\n@keyframes balloon4 {\n  0%, 100% {\n    -webkit-transform: translate(10px, -10px) rotate(-8eg);\n            transform: translate(10px, -10px) rotate(-8eg);\n  }\n  50% {\n    -webkit-transform: translate(-15px, 10px) rotate(10deg);\n            transform: translate(-15px, 10px) rotate(10deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXIvRzpcXEJEQVlcXFN1cnByaXNlL3NyY1xcYXBwXFx0aW1lclxcdGltZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSxrRkFBQTtBQ0FSLGdCQUFnQjtBRG9CaEI7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNqQko7QURvQkE7RUFDSSwrQkEzQkc7RUE0Qkgsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQTVCSTtBQ1dSO0FEb0JBO0VBQ0ksY0FoQ0k7RUFpQ0osa0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQXhDRztFQXlDSCxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2pCSjtBRG9CQTs7OztFQUlJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2pCSjtBRG9CQTtFQUNJLG1CQXJERTtBQ29DTjtBRG9CQTtFQUNJLG1CQXhESTtFQXlESixjQXZERztBQ3NDUDtBRG9CQTtFQUNJLG1CQTVERztBQzJDUDtBRG9CQTtFQUNJLG1CQTlESztBQzZDVDtBRHFCQTtFQUNJLHFDQXpFRTtFQTBFRixjQXJFRztFQXNFSCxjQUFBO0FDbkJKO0FEc0JBO0VBQ0ksa0JBQUE7RUFDQSxtQkE3RUk7RUE4RUosWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ25CSjtBRG9CSTtFQUNJLGlDQUFBO0FDbEJSO0FEb0JJO0VBQ0ksbUJBdEZBO0VBdUZBLHlCQUFBO0FDbEJSO0FEc0JBO0VBQ0ksa0JBQUE7RUFDQSxtQkE5RkU7RUErRkYsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ25CSjtBRG9CSTtFQUNJLGlDQUFBO0FDbEJSO0FEb0JJO0VBQ0ksbUJBdkdGO0VBd0dFLHlCQUFBO0FDbEJSO0FEc0JBO0VBQ0ksa0JBQUE7RUFDQSxtQkExR0s7RUEyR0wsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ25CSjtBRG9CSTtFQUNJLGlDQUFBO0FDbEJSO0FEb0JJO0VBQ0ksbUJBbkhDO0VBb0hELHlCQUFBO0FDbEJSO0FEc0JBO0VBQ0ksa0JBQUE7RUFDQSxtQkE1SEc7RUE2SEgsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ25CSjtBRG9CSTtFQUNJLGlDQUFBO0FDbEJSO0FEb0JJO0VBQ0ksbUJBcklEO0VBc0lDLHlCQUFBO0FDbEJSO0FEc0JBO0VBQ0ksc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLFVBQUE7QUNuQko7QURzQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbkJKO0FEb0JJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2xCUjtBRHNCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDbkJKO0FEc0JBO0VBQ0ksaUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNuQko7QURzQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0FDbkJKO0FEc0JBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ25CSjtBRHNCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBek1JO0VBME1KLGtIQXRNRztFQXVNSCwwR0F2TUc7QUNvTFA7QURzQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFwTkU7RUFxTkYsa0hBaE5HO0VBaU5ILDBHQWpORztBQzhMUDtBRHNCQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQW5PRztFQW9PSCxnQkFBQTtBQ25CSjtBRG9CSTtFQUNJLG1CQUFBO0VBQ0EsY0FuT0Y7QUNpTk47QURvQkk7RUFDSSxjQXJPQTtFQXNPQSxxQkFBQTtBQ2xCUjtBRG1CUTtFQUNJLGNBdk9MO0FDc05QO0FEc0JBO0VBQ0ksK0JBblBHO0VBb1BILGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNuQko7QURzQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzREFBQTtFQUNBLHVDQUFBO0FDbkJKO0FEc0JBO0VBQ0ksa0NBQUE7RUFDQSxPQUFBO0VBQ0EsdURBQUE7RUFDQSxtREFBQTtFQUdBLDJDQUFBO0FDbkJKO0FEc0JBO0VBQ0ksNkJBQUE7QUNuQko7QURzQkE7RUFDSSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSx1REFBQTtFQUNBLG1EQUFBO0VBR0EsMkNBQUE7QUNuQko7QURzQkE7RUFDSSw4QkFBQTtBQ25CSjtBRHNCQTtFQUNJLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLHdEQUFBO0VBQ0EsbURBQUE7RUFHQSwyQ0FBQTtBQ25CSjtBRHNCQTtFQUNJLDhCQUFBO0FDbkJKO0FEc0JBO0VBQ0ksbUNBQUE7RUFDQSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSxtREFBQTtFQUdBLDJDQUFBO0FDbkJKO0FEc0JBO0VBQ0ksOEJBQUE7QUNuQko7QURzQkE7RUFDSSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSx3REFBQTtFQUNBLG1EQUFBO0VBR0EsMkNBQUE7QUNuQko7QURzQkE7RUFDSSw4QkFBQTtBQ25CSjtBRHNCQTtFQUNJLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLHdEQUFBO0VBQ0EsbURBQUE7RUFHQSwyQ0FBQTtBQ25CSjtBRHNCQTtFQUNJLDhCQUFBO0FDbkJKO0FEc0JBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNuQko7QURzQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNuQko7QUR1QkEsY0FBQTtBQUVBO0VBQ0k7SUFFSSw4Q0FBQTtFQ3RCTjtFRHdCRTtJQUNJLGlEQUFBO0VDdEJOO0FBQ0Y7QUQ2Q0E7RUFDSTtJQUVJLDhDQUFBO1lBQUEsc0NBQUE7RUM1Qk47RUQ4QkU7SUFDSSxpREFBQTtZQUFBLHlDQUFBO0VDNUJOO0FBQ0Y7QURnQ0EsZUFBQTtBQUVBO0VBQ0k7SUFFSSw0Q0FBQTtFQ2hDTjtFRGtDRTtJQUNJLGtEQUFBO0VDaENOO0FBQ0Y7QUR1REE7RUFDSTtJQUVJLDZDQUFBO1lBQUEscUNBQUE7RUN0Q047RUR3Q0U7SUFDSSxrREFBQTtZQUFBLDBDQUFBO0VDdENOO0FBQ0Y7QUQwQ0EsYUFBQTtBQUVBO0VBQ0k7SUFFSSxrREFBQTtFQzFDTjtFRDRDRTtJQUNJLHVEQUFBO0VDMUNOO0FBQ0Y7QURpRUE7RUFDSTtJQUVJLGtEQUFBO1lBQUEsMENBQUE7RUNoRE47RURrREU7SUFDSSx1REFBQTtZQUFBLCtDQUFBO0VDaEROO0FBQ0Y7QURvREEsYUFBQTtBQUVBO0VBQ0k7SUFFSSxzREFBQTtFQ3BETjtFRHNERTtJQUNJLHVEQUFBO0VDcEROO0FBQ0Y7QUQyRUE7RUFDSTtJQUVJLHNEQUFBO1lBQUEsOENBQUE7RUMxRE47RUQ0REU7SUFDSSx1REFBQTtZQUFBLCtDQUFBO0VDMUROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aW1lci90aW1lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE1vbnRzZXJyYXQ6OTAwJyk7XHJcbiRmb250OiAnTGF0bycsXHJcbnNhbnMtc2VyaWY7XHJcbiRiaWc6ICdNb250c2VycmF0Jyxcclxuc2Fucy1zZXJpZjtcclxuJHJlZDogI0VGMkYzQztcclxuJHdoaXRlOiAjRjZGNEYzO1xyXG4kYmx1ZTogIzI3NkZCRjtcclxuJGRhcms6ICMxODMwNTk7XHJcbiR5ZWxsb3c6ICNGMEEyMDI7XHJcbiRzdGFyOiBwb2x5Z29uKDUwJSAwJSxcclxuNjElIDM1JSxcclxuOTglIDM1JSxcclxuNjglIDU3JSxcclxuNzklIDkxJSxcclxuNTAlIDcwJSxcclxuMjElIDkxJSxcclxuMzIlIDU3JSxcclxuMiUgMzUlLFxyXG4zOSUgMzUlKTtcclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgaGVpZ2h0OiA0ODBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbn1cclxuXHJcbiN0aW1lciB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxuXHJcbi5kYXlzLFxyXG4uaG91cnMsXHJcbi5taW51dGVzLFxyXG4uc2Vjb25kcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZGF5cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG59XHJcblxyXG4uaG91cnMge1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgY29sb3I6ICRkYXJrO1xyXG59XHJcblxyXG4ubWludXRlcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxufVxyXG5cclxuLnNlY29uZHMge1xyXG4gICAgYmFja2dyb3VuZDogJHllbGxvdztcclxuICAgIC5udW1iZXJzIHt9XHJcbn1cclxuXHJcbi5udW1iZXJzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkYmlnO1xyXG4gICAgY29sb3I6ICRkYXJrO1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbn1cclxuXHJcbi53aGl0ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIHRvcDogMiU7XHJcbiAgICAudHJpYW5nbGUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgJHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnN0cmluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgbGVmdDogMTIlO1xyXG4gICAgdG9wOiA5JTtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgLnRyaWFuZ2xlIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkICRyZWQ7XHJcbiAgICB9XHJcbiAgICAuc3RyaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRyZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi55ZWxsb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogJHllbGxvdztcclxuICAgIGxlZnQ6IDc4JTtcclxuICAgIHRvcDogOSU7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIC50cmlhbmdsZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCAkeWVsbG93O1xyXG4gICAgfVxyXG4gICAgLnN0cmluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHllbGxvdztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeWVsbG93O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbGVmdDogNjAlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIC50cmlhbmdsZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCAkYmx1ZTtcclxuICAgIH1cclxuICAgIC5zdHJpbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFsbG9vbnNwZWMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJS8gNDAlIDQwJSA2MCUgNjAlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmV5ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDIyJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBsZWZ0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW91dGgge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBsZWZ0OiA0MyU7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5oYXBweSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwMCAjMDAwIHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4udHJpYW5nbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgYm90dG9tOiAtMTAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zdHJpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGxlZnQ6IDQ4JTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uc3RhciB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiAkc3RhcjtcclxuICAgIGNsaXAtcGF0aDogJHN0YXI7XHJcbn1cclxuXHJcbi5zdGFyLXJlZCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGJhY2tncm91bmQ6ICRyZWQ7XHJcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogJHN0YXI7XHJcbiAgICBjbGlwLXBhdGg6ICRzdGFyO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBwIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWxsb29uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgd2lkdGg6IDczOHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJhbGxvb24+ZGl2IHtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MiwgMTUsIDk3LCAwLjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDgwJSA4MCUgODAlIDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDE3cHggN3B4IDEwcHggcmdiYSgxODIsIDE1LCA5NywgMC45KTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcclxufVxyXG5cclxuLmJhbGxvb24+ZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MiwgMTUsIDk3LCAwLjkpO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMTM1LCAxMSwgNzIsIDAuOSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmFsbG9vbjEgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYmFsbG9vbjEgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAtby1hbmltYXRpb246IGJhbGxvb24xIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBiYWxsb29uMSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmJhbGxvb24+ZGl2Om50aC1jaGlsZCgxKTpiZWZvcmUge1xyXG4gICAgY29sb3I6IHJnYmEoMTgyLCAxNSwgOTcsIDAuOSk7XHJcbn1cclxuXHJcbi5iYWxsb29uPmRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDExMiwgNDUsIDAuOSk7XHJcbiAgICBsZWZ0OiAxMjBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMjIyLCA4NSwgMTQsIDAuOSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmFsbG9vbjIgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYmFsbG9vbjIgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAtby1hbmltYXRpb246IGJhbGxvb24yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBiYWxsb29uMiA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmJhbGxvb24+ZGl2Om50aC1jaGlsZCgyKTpiZWZvcmUge1xyXG4gICAgY29sb3I6IHJnYmEoMjQyLCAxMTIsIDQ1LCAwLjkpO1xyXG59XHJcblxyXG4uYmFsbG9vbj5kaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDUsIDE4MSwgMTY3LCAwLjkpO1xyXG4gICAgbGVmdDogMjQwcHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxMHB4IDEwcHggMTBweCByZ2JhKDM1LCAxNDAsIDEyOSwgMC45KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBiYWxsb29uNCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBiYWxsb29uNCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogYmFsbG9vbjQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGJhbGxvb240IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uYmFsbG9vbj5kaXY6bnRoLWNoaWxkKDMpOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogcmdiYSg0NSwgMTgxLCAxNjcsIDAuOSk7XHJcbn1cclxuXHJcbi5iYWxsb29uPmRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTAsIDYxLCAyNDQsIDAuOSk7XHJcbiAgICBsZWZ0OiAzNjBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMTczLCAxNCwgMjQwLCAwLjkpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJhbGxvb24xIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IGJhbGxvb24xIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBiYWxsb29uMSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogYmFsbG9vbjEgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5iYWxsb29uPmRpdjpudGgtY2hpbGQoNCk6YmVmb3JlIHtcclxuICAgIGNvbG9yOiByZ2JhKDE5MCwgNjEsIDI0NCwgMC45KTtcclxufVxyXG5cclxuLmJhbGxvb24+ZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMjI0LCA2NywgMC45KTtcclxuICAgIGxlZnQ6IDQ4MHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxMHB4IDEwcHggcmdiYSgxNTgsIDIwNiwgMzQsIDAuOSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmFsbG9vbjMgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYmFsbG9vbjMgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAtby1hbmltYXRpb246IGJhbGxvb24zIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBiYWxsb29uMyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmJhbGxvb24+ZGl2Om50aC1jaGlsZCg1KTpiZWZvcmUge1xyXG4gICAgY29sb3I6IHJnYmEoMTgwLCAyMjQsIDY3LCAwLjkpO1xyXG59XHJcblxyXG4uYmFsbG9vbj5kaXY6bnRoLWNoaWxkKDYpIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAxOTQsIDU4LCAwLjkpO1xyXG4gICAgbGVmdDogNjAwcHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxMHB4IDEwcHggMTBweCByZ2JhKDIzNCwgMTc3LCAxNSwgMC45KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBiYWxsb29uMiAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBiYWxsb29uMiAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogYmFsbG9vbjIgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGJhbGxvb24yIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uYmFsbG9vbj5kaXY6bnRoLWNoaWxkKDYpOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNDIsIDE5NCwgNTgsIDAuOSk7XHJcbn1cclxuXHJcbi5iYWxsb29uPmRpdjpiZWZvcmUge1xyXG4gICAgY29sb3I6IHJnYmEoMTgyLCAxNSwgOTcsIDAuOSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xMXB4O1xyXG4gICAgbGVmdDogNTJweDtcclxuICAgIGNvbnRlbnQ6IFwi4payXCI7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDQuOGVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yN3B4O1xyXG59XHJcblxyXG5cclxuLypCQUxMT09OIDEgNCovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbG9vbjEge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTZkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgcm90YXRlKDhkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgYmFsbG9vbjEge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTZkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgcm90YXRlKDhkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIGJhbGxvb24xIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNmRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgcm90YXRlKDhkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJhbGxvb24xIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNmRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgcm90YXRlKDhkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogQkFsbE9PTiAyIDUqL1xyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJhbGxvb24yIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDZlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSByb3RhdGUoLThkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgYmFsbG9vbjIge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNmRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSByb3RhdGUoLThkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIGJhbGxvb24yIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg2ZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSByb3RhdGUoLThkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJhbGxvb24yIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg2ZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSByb3RhdGUoLThkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogQkFsbE9PTiAwKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBiYWxsb29uMyB7XHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpIHJvdGF0ZSg2ZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAzMHB4KSByb3RhdGUoLThkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgYmFsbG9vbjMge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KSByb3RhdGUoNmVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMzBweCkgcm90YXRlKC04ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBiYWxsb29uMyB7XHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KSByb3RhdGUoNmVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIDMwcHgpIHJvdGF0ZSgtOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFsbG9vbjMge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCkgcm90YXRlKDZlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAzMHB4KSByb3RhdGUoLThkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogQkFsbE9PTiAzKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBiYWxsb29uNCB7XHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTEwcHgpIHJvdGF0ZSgtOGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTVweCwgMjBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGJhbGxvb240IHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCkgcm90YXRlKC04ZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNXB4LCAxMHB4KSByb3RhdGUoMTBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIGJhbGxvb240IHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTEwcHgpIHJvdGF0ZSgtOGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1cHgsIDEwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFsbG9vbjQge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCkgcm90YXRlKC04ZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTVweCwgMTBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxufSIsIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMHxNb250c2VycmF0OjkwMFwiKTtcbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA2NTBweDtcbiAgaGVpZ2h0OiA0ODBweDtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgY29sb3I6ICNGNkY0RjM7XG59XG5cbiN0aW1lciB7XG4gIGNvbG9yOiAjRjZGNEYzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogMjUlO1xufVxuXG4uZGF5cyxcbi5ob3Vycyxcbi5taW51dGVzLFxuLnNlY29uZHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZGF5cyB7XG4gIGJhY2tncm91bmQ6ICNFRjJGM0M7XG59XG5cbi5ob3VycyB7XG4gIGJhY2tncm91bmQ6ICNGNkY0RjM7XG4gIGNvbG9yOiAjMTgzMDU5O1xufVxuXG4ubWludXRlcyB7XG4gIGJhY2tncm91bmQ6ICMyNzZGQkY7XG59XG5cbi5zZWNvbmRzIHtcbiAgYmFja2dyb3VuZDogI0YwQTIwMjtcbn1cbi5udW1iZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzE4MzA1OTtcbiAgZm9udC1zaXplOiA0ZW07XG59XG5cbi53aGl0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0Y2RjRGMztcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogNzVweDtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDIlO1xufVxuLndoaXRlIC50cmlhbmdsZSB7XG4gIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgI0Y2RjRGMztcbn1cbi53aGl0ZSAuc3RyaW5nIHtcbiAgYmFja2dyb3VuZDogI0Y2RjRGMztcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y2RjRGMztcbn1cblxuLnJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0VGMkYzQztcbiAgbGVmdDogMTIlO1xuICB0b3A6IDklO1xuICBoZWlnaHQ6IDY1cHg7XG4gIHdpZHRoOiA3MHB4O1xufVxuLnJlZCAudHJpYW5nbGUge1xuICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkICNFRjJGM0M7XG59XG4ucmVkIC5zdHJpbmcge1xuICBiYWNrZ3JvdW5kOiAjRUYyRjNDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUYyRjNDO1xufVxuXG4ueWVsbG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjRjBBMjAyO1xuICBsZWZ0OiA3OCU7XG4gIHRvcDogOSU7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDcwcHg7XG59XG4ueWVsbG93IC50cmlhbmdsZSB7XG4gIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgI0YwQTIwMjtcbn1cbi55ZWxsb3cgLnN0cmluZyB7XG4gIGJhY2tncm91bmQ6ICNGMEEyMDI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMEEyMDI7XG59XG5cbi5ibHVlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjMjc2RkJGO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBsZWZ0OiA2MCU7XG4gIHRvcDogNSU7XG59XG4uYmx1ZSAudHJpYW5nbGUge1xuICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkICMyNzZGQkY7XG59XG4uYmx1ZSAuc3RyaW5nIHtcbiAgYmFja2dyb3VuZDogIzI3NkZCRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3NkZCRjtcbn1cblxuLmJhbGxvb25zcGVjIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlLzQwJSA0MCUgNjAlIDYwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLmV5ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiAyMiU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5leWU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAzNXB4O1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tb3V0aCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDQzJTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmhhcHB5IHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwMCAjMDAwIHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi50cmlhbmdsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDAlO1xuICBib3R0b206IC0xMCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uc3RyaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxcHg7XG4gIGxlZnQ6IDQ4JTtcbiAgdG9wOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnN0YXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRjZGNEYzO1xuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDYxJSAzNSUsIDk4JSAzNSUsIDY4JSA1NyUsIDc5JSA5MSUsIDUwJSA3MCUsIDIxJSA5MSUsIDMyJSA1NyUsIDIlIDM1JSwgMzklIDM1JSk7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDYxJSAzNSUsIDk4JSAzNSUsIDY4JSA1NyUsIDc5JSA5MSUsIDUwJSA3MCUsIDIxJSA5MSUsIDMyJSA1NyUsIDIlIDM1JSwgMzklIDM1JSk7XG59XG5cbi5zdGFyLXJlZCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kOiAjRUYyRjNDO1xuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDYxJSAzNSUsIDk4JSAzNSUsIDY4JSA1NyUsIDc5JSA5MSUsIDUwJSA3MCUsIDIxJSA5MSUsIDMyJSA1NyUsIDIlIDM1JSwgMzklIDM1JSk7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDYxJSAzNSUsIDk4JSAzNSUsIDY4JSA1NyUsIDc5JSA5MSUsIDUwJSA3MCUsIDIxJSA5MSUsIDMyJSA1NyUsIDIlIDM1JSwgMzklIDM1JSk7XG59XG5cbmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuZm9vdGVyIHAge1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBjb2xvcjogI0VGMkYzQztcbn1cbmZvb3RlciBhIHtcbiAgY29sb3I6ICNGNkY0RjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6ICMyNzZGQkY7XG59XG5cbi5iYWxsb29uIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFlbTtcbiAgd2lkdGg6IDczOHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhbGxvb24gPiBkaXYge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTgyLCAxNSwgOTcsIDAuOSk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDgwJSA4MCUgODAlIDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMTdweCA3cHggMTBweCByZ2JhKDE4MiwgMTUsIDk3LCAwLjkpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG59XG5cbi5iYWxsb29uID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTgyLCAxNSwgOTcsIDAuOSk7XG4gIGxlZnQ6IDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMTM1LCAxMSwgNzIsIDAuOSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBiYWxsb29uMSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJhbGxvb24xIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGJhbGxvb24xIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb246IGJhbGxvb24xIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpudGgtY2hpbGQoMSk6YmVmb3JlIHtcbiAgY29sb3I6IHJnYmEoMTgyLCAxNSwgOTcsIDAuOSk7XG59XG5cbi5iYWxsb29uID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAxMTIsIDQ1LCAwLjkpO1xuICBsZWZ0OiAxMjBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxMHB4IDEwcHggcmdiYSgyMjIsIDg1LCAxNCwgMC45KTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJhbGxvb24yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogYmFsbG9vbjIgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogYmFsbG9vbjIgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYmFsbG9vbjIgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5iYWxsb29uID4gZGl2Om50aC1jaGlsZCgyKTpiZWZvcmUge1xuICBjb2xvcjogcmdiYSgyNDIsIDExMiwgNDUsIDAuOSk7XG59XG5cbi5iYWxsb29uID4gZGl2Om50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDUsIDE4MSwgMTY3LCAwLjkpO1xuICBsZWZ0OiAyNDBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxMHB4IDEwcHggcmdiYSgzNSwgMTQwLCAxMjksIDAuOSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBiYWxsb29uNCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJhbGxvb240IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGJhbGxvb240IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb246IGJhbGxvb240IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpudGgtY2hpbGQoMyk6YmVmb3JlIHtcbiAgY29sb3I6IHJnYmEoNDUsIDE4MSwgMTY3LCAwLjkpO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpudGgtY2hpbGQoNCkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5MCwgNjEsIDI0NCwgMC45KTtcbiAgbGVmdDogMzYwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMTczLCAxNCwgMjQwLCAwLjkpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmFsbG9vbjEgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBiYWxsb29uMSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBiYWxsb29uMSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBiYWxsb29uMSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmJhbGxvb24gPiBkaXY6bnRoLWNoaWxkKDQpOmJlZm9yZSB7XG4gIGNvbG9yOiByZ2JhKDE5MCwgNjEsIDI0NCwgMC45KTtcbn1cblxuLmJhbGxvb24gPiBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxODAsIDIyNCwgNjcsIDAuOSk7XG4gIGxlZnQ6IDQ4MHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAxMHB4IDEwcHggMTBweCByZ2JhKDE1OCwgMjA2LCAzNCwgMC45KTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJhbGxvb24zIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogYmFsbG9vbjMgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogYmFsbG9vbjMgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYmFsbG9vbjMgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5iYWxsb29uID4gZGl2Om50aC1jaGlsZCg1KTpiZWZvcmUge1xuICBjb2xvcjogcmdiYSgxODAsIDIyNCwgNjcsIDAuOSk7XG59XG5cbi5iYWxsb29uID4gZGl2Om50aC1jaGlsZCg2KSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAxOTQsIDU4LCAwLjkpO1xuICBsZWZ0OiA2MDBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxMHB4IDEwcHggcmdiYSgyMzQsIDE3NywgMTUsIDAuOSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBiYWxsb29uMiAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJhbGxvb24yIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGJhbGxvb24yIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb246IGJhbGxvb24yIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpudGgtY2hpbGQoNik6YmVmb3JlIHtcbiAgY29sb3I6IHJnYmEoMjQyLCAxOTQsIDU4LCAwLjkpO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpiZWZvcmUge1xuICBjb2xvcjogcmdiYSgxODIsIDE1LCA5NywgMC45KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xMXB4O1xuICBsZWZ0OiA1MnB4O1xuICBjb250ZW50OiBcIuKWslwiO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogNC44ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4O1xufVxuXG4vKkJBTExPT04gMSA0Ki9cbkAtd2Via2l0LWtleWZyYW1lcyBiYWxsb29uMSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTZkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpIHJvdGF0ZSg4ZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJhbGxvb24xIHtcbiAgMCUsIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNmRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgcm90YXRlKDhkZWcpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGJhbGxvb24xIHtcbiAgMCUsIDEwMCUge1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTZkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoOGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFsbG9vbjEge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNmRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpIHJvdGF0ZSg4ZGVnKTtcbiAgfVxufVxuLyogQkFsbE9PTiAyIDUqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGJhbGxvb24yIHtcbiAgMCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg2ZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHJvdGF0ZSgtOGRlZyk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBiYWxsb29uMiB7XG4gIDAlLCAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNmRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCkgcm90YXRlKC04ZGVnKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBiYWxsb29uMiB7XG4gIDAlLCAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDZkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSByb3RhdGUoLThkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhbGxvb24yIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNmRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHJvdGF0ZSgtOGRlZyk7XG4gIH1cbn1cbi8qIEJBbGxPT04gMCovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbG9vbjMge1xuICAwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCkgcm90YXRlKDZlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAzMHB4KSByb3RhdGUoLThkZWcpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYmFsbG9vbjMge1xuICAwJSwgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCkgcm90YXRlKDZlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAzMHB4KSByb3RhdGUoLThkZWcpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGJhbGxvb24zIHtcbiAgMCUsIDEwMCUge1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KSByb3RhdGUoNmVnKTtcbiAgfVxuICA1MCUge1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAzMHB4KSByb3RhdGUoLThkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhbGxvb24zIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KSByb3RhdGUoNmVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAzMHB4KSByb3RhdGUoLThkZWcpO1xuICB9XG59XG4vKiBCQWxsT09OIDMqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGJhbGxvb240IHtcbiAgMCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTEwcHgpIHJvdGF0ZSgtOGVnKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1cHgsIDIwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBiYWxsb29uNCB7XG4gIDAlLCAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC0xMHB4KSByb3RhdGUoLThlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNXB4LCAxMHB4KSByb3RhdGUoMTBkZWcpO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGJhbGxvb240IHtcbiAgMCUsIDEwMCUge1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC0xMHB4KSByb3RhdGUoLThlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTVweCwgMTBweCkgcm90YXRlKDEwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBiYWxsb29uNCB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCkgcm90YXRlKC04ZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1cHgsIDEwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/timer/timer.component.ts":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var year = new Date().getFullYear();
        var bday = new Date(year, 6, 27).getTime();
        // countdown
        setInterval(function () {
            // get today's date
            var today = new Date().getTime();
            // get the difference
            var diff = bday - today;
            // math
            _this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
            _this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            _this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            _this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
        }, 1000);
        var width = screen.width;
        if (width < 650) {
            width = Math.abs(width - 650);
            width = width / 650;
            document.body.style.zoom = (width * 100) + '%';
            var ele = document.getElementsByTagName("app-timer")[0];
            // ele.style.left = "42%";
        }
    };
    TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! raw-loader!./timer.component.html */ "./node_modules/raw-loader/index.js!./src/app/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.scss */ "./src/app/timer/timer.component.scss")]
        })
    ], TimerComponent);
    return TimerComponent;
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

module.exports = __webpack_require__(/*! G:\BDAY\Surprise\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map