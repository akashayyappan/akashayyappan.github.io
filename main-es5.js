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

module.exports = "<div class=\"container\">\n    <div class=\"balloonspec white\">\n        <div class=\"star-red\"></div>\n        <div class=\"face\">\n            <div class=\"eye blink1\"></div>\n            <div class=\"mouth happy\"></div>\n        </div>\n        <div class=\"triangle\"></div>\n        <div class=\"string\"></div>\n    </div>\n\n    <div class=\"balloonspec red\">\n        <div class=\"star\"></div>\n        <div class=\"face\">\n            <div class=\"eye blink2\"></div>\n            <div class=\"mouth happy\"></div>\n        </div>\n        <div class=\"triangle\"></div>\n        <div class=\"string\"></div>\n    </div>\n\n    <div class=\"balloonspec yellow\">\n        <div class=\"star\"></div>\n        <div class=\"face\">\n            <div class=\"eye blink3\"></div>\n            <div class=\"mouth happy\"></div>\n        </div>\n        <div class=\"triangle\"></div>\n        <div class=\"string\"></div>\n    </div>\n\n    <div class=\"balloonspec blue\">\n        <div class=\"star\"></div>\n        <div class=\"face\">\n            <div class=\"eye blink4\"></div>\n            <div class=\"mouth happy\"></div>\n        </div>\n        <div class=\"triangle\"></div>\n        <div class=\"string\"></div>\n    </div>\n    <div id=\"timer\">\n        <div class=\"days\">\n            <div class=\"numbers\">{{ days }}</div>days\n        </div>\n        <div class=\"hours\">\n            <div class=\"numbers\">{{ hours }}</div>hours\n        </div>\n        <div class=\"minutes\">\n            <div class=\"numbers\">{{ minutes }}</div>minutes\n        </div>\n        <div class=\"seconds\">\n            <div class=\"numbers\">{{ seconds }}</div>seconds\n        </div>\n    </div>\n    <h1>27 july 2020</h1>\n    <div class=\"balloon\" style=\"zoom: 50%;\">\n        <div><span>J</span>\n        </div>\n        <div><span>A</span>\n        </div>\n        <div><span>N</span>\n        </div>\n        <div><span>A</span>\n        </div>\n        <div><span>N</span>\n        </div>\n        <div><span>I</span>\n        </div>\n    </div>\n    <footer>With ❤️ from your bestie</footer>\n</div>"

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

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:900\");\n@charset \"UTF-8\";\n.container {\n  position: relative;\n  overflow: hidden;\n  width: 650px;\n  height: 480px;\n  z-index: 1000;\n}\nh1 {\n  font-family: \"Lato\", sans-serif;\n  text-align: center;\n  margin-top: 2em;\n  font-size: 1em;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  color: #F6F4F3;\n}\n#timer {\n  color: #F6F4F3;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: \"Lato\", sans-serif;\n  font-size: 0.7em;\n  letter-spacing: 5px;\n  margin-top: 25%;\n}\n.days,\n.hours,\n.minutes,\n.seconds {\n  display: inline-block;\n  padding: 20px;\n  width: 100px;\n  border-radius: 5px;\n}\n.days {\n  background: #EF2F3C;\n}\n.hours {\n  background: #F6F4F3;\n  color: #183059;\n}\n.minutes {\n  background: #276FBF;\n}\n.seconds {\n  background: #F0A202;\n}\n.numbers {\n  font-family: \"Montserrat\", sans-serif;\n  color: #183059;\n  font-size: 4em;\n}\n.white {\n  position: absolute;\n  background: #F6F4F3;\n  height: 85px;\n  width: 75px;\n  left: 30%;\n  top: 2%;\n}\n.white .triangle {\n  border-bottom: 14px solid #F6F4F3;\n}\n.white .string {\n  background: #F6F4F3;\n  border: 1px solid #F6F4F3;\n}\n.red {\n  position: absolute;\n  background: #EF2F3C;\n  left: 12%;\n  top: 9%;\n  height: 65px;\n  width: 70px;\n}\n.red .triangle {\n  border-bottom: 14px solid #EF2F3C;\n}\n.red .string {\n  background: #EF2F3C;\n  border: 1px solid #EF2F3C;\n}\n.yellow {\n  position: absolute;\n  background: #F0A202;\n  left: 78%;\n  top: 9%;\n  height: 65px;\n  width: 70px;\n}\n.yellow .triangle {\n  border-bottom: 14px solid #F0A202;\n}\n.yellow .string {\n  background: #F0A202;\n  border: 1px solid #F0A202;\n}\n.blue {\n  position: absolute;\n  background: #276FBF;\n  height: 80px;\n  width: 80px;\n  left: 60%;\n  top: 5%;\n}\n.blue .triangle {\n  border-bottom: 14px solid #276FBF;\n}\n.blue .string {\n  background: #276FBF;\n  border: 1px solid #276FBF;\n}\n.balloonspec {\n  border: 1px solid #000;\n  border-radius: 50% 50% 50% 50%/40% 40% 60% 60%;\n  z-index: 2;\n}\n.eye {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  top: 40%;\n  left: 22%;\n  background: #000;\n  border-radius: 50%;\n}\n.eye:after {\n  content: \"\";\n  left: 35px;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #000;\n  position: absolute;\n}\n.blink1,\n.blink1::after {\n  -webkit-animation: eyeframes 1.5s infinite;\n          animation: eyeframes 1.5s infinite;\n}\n.blink2,\n.blink2::after {\n  -webkit-animation: eyeframes 3s infinite;\n          animation: eyeframes 3s infinite;\n}\n.blink3,\n.blink3::after {\n  -webkit-animation: eyeframes 2.5s infinite;\n          animation: eyeframes 2.5s infinite;\n}\n.blink4,\n.blink4::after {\n  -webkit-animation: eyeframes 2s infinite;\n          animation: eyeframes 2s infinite;\n}\n@-webkit-keyframes eyeframes {\n  0%, 95% {\n    height: 7px;\n  }\n  100% {\n    height: 1px;\n  }\n}\n@keyframes eyeframes {\n  0%, 95% {\n    height: 7px;\n  }\n  100% {\n    height: 1px;\n  }\n}\n.mouth {\n  position: absolute;\n  top: 45%;\n  left: 43%;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.happy {\n  border: 2px solid;\n  border-color: transparent #000 #000 transparent;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.triangle {\n  position: absolute;\n  left: 40%;\n  bottom: -10%;\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n.string {\n  position: absolute;\n  height: 70px;\n  width: 1px;\n  left: 48%;\n  top: 100%;\n  z-index: -1;\n}\n.star {\n  width: 20px;\n  height: 20px;\n  background: #F6F4F3;\n  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n}\n.star-red {\n  width: 30px;\n  height: 30px;\n  margin-left: 51px;\n  margin-top: -5px;\n  background: #EF2F3C;\n  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n}\nfooter {\n  position: absolute;\n  bottom: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  left: 50%;\n  color: white;\n  text-transform: uppercase;\n  padding: 10px;\n  font-family: \"Lato\", sans-serif;\n  font-size: 0.7em;\n}\n.balloon {\n  font-family: \"Lato\", sans-serif;\n  font-size: 1em;\n  width: 738px;\n  margin: 0 auto;\n  padding-top: 30px;\n  position: relative;\n}\n.balloon > div {\n  width: 104px;\n  height: 140px;\n  background: rgba(182, 15, 97, 0.9);\n  border-radius: 0;\n  border-radius: 80% 80% 80% 80%;\n  margin: 0 auto;\n  position: absolute;\n  padding: 10px;\n  box-shadow: inset 17px 7px 10px rgba(182, 15, 97, 0.9);\n  -webkit-transform-origin: bottom center;\n}\n.balloon > div:nth-child(1) {\n  background: rgba(182, 15, 97, 0.9);\n  left: 0;\n  box-shadow: inset 10px 10px 10px rgba(135, 11, 72, 0.9);\n  -webkit-animation: balloon1 6s ease-in-out infinite;\n  animation: balloon1 6s ease-in-out infinite;\n}\n.balloon > div:nth-child(1):before {\n  color: rgba(182, 15, 97, 0.9);\n}\n.balloon > div:nth-child(2) {\n  background: rgba(242, 112, 45, 0.9);\n  left: 120px;\n  box-shadow: inset 10px 10px 10px rgba(222, 85, 14, 0.9);\n  -webkit-animation: balloon2 6s ease-in-out infinite;\n  animation: balloon2 6s ease-in-out infinite;\n}\n.balloon > div:nth-child(2):before {\n  color: rgba(242, 112, 45, 0.9);\n}\n.balloon > div:nth-child(3) {\n  background: rgba(45, 181, 167, 0.9);\n  left: 240px;\n  box-shadow: inset 10px 10px 10px rgba(35, 140, 129, 0.9);\n  -webkit-animation: balloon4 6s ease-in-out infinite;\n  animation: balloon4 6s ease-in-out infinite;\n}\n.balloon > div:nth-child(3):before {\n  color: rgba(45, 181, 167, 0.9);\n}\n.balloon > div:nth-child(4) {\n  background: rgba(190, 61, 244, 0.9);\n  left: 360px;\n  box-shadow: inset 10px 10px 10px rgba(173, 14, 240, 0.9);\n  -webkit-animation: balloon1 5s ease-in-out infinite;\n  animation: balloon1 5s ease-in-out infinite;\n}\n.balloon > div:nth-child(4):before {\n  color: rgba(190, 61, 244, 0.9);\n}\n.balloon > div:nth-child(5) {\n  background: rgba(180, 224, 67, 0.9);\n  left: 480px;\n  box-shadow: inset 10px 10px 10px rgba(158, 206, 34, 0.9);\n  -webkit-animation: balloon3 5s ease-in-out infinite;\n  animation: balloon3 5s ease-in-out infinite;\n}\n.balloon > div:nth-child(5):before {\n  color: rgba(180, 224, 67, 0.9);\n}\n.balloon > div:nth-child(6) {\n  background: rgba(242, 194, 58, 0.9);\n  left: 600px;\n  box-shadow: inset 10px 10px 10px rgba(234, 177, 15, 0.9);\n  -webkit-animation: balloon2 3s ease-in-out infinite;\n  animation: balloon2 3s ease-in-out infinite;\n}\n.balloon > div:nth-child(6):before {\n  color: rgba(242, 194, 58, 0.9);\n}\n.balloon > div:before {\n  color: rgba(182, 15, 97, 0.9);\n  position: absolute;\n  bottom: -11px;\n  left: 52px;\n  content: \"▲\";\n  font-size: 1em;\n}\nspan {\n  font-size: 4.8em;\n  color: white;\n  position: relative;\n  top: 30px;\n  left: 50%;\n  margin-left: -27px;\n}\n/*BALLOON 1 4*/\n@-webkit-keyframes balloon1 {\n  0%, 100% {\n    -webkit-transform: translateY(0) rotate(-6deg);\n  }\n  50% {\n    -webkit-transform: translateY(-20px) rotate(8deg);\n  }\n}\n@keyframes balloon1 {\n  0%, 100% {\n    -webkit-transform: translateY(0) rotate(-6deg);\n            transform: translateY(0) rotate(-6deg);\n  }\n  50% {\n    -webkit-transform: translateY(-20px) rotate(8deg);\n            transform: translateY(-20px) rotate(8deg);\n  }\n}\n/* BAllOON 2 5*/\n@-webkit-keyframes balloon2 {\n  0%, 100% {\n    -webkit-transform: translateY(0) rotate(6eg);\n  }\n  50% {\n    -webkit-transform: translateY(-30px) rotate(-8deg);\n  }\n}\n@keyframes balloon2 {\n  0%, 100% {\n    -webkit-transform: translateY(0) rotate(6deg);\n            transform: translateY(0) rotate(6deg);\n  }\n  50% {\n    -webkit-transform: translateY(-30px) rotate(-8deg);\n            transform: translateY(-30px) rotate(-8deg);\n  }\n}\n/* BAllOON 0*/\n@-webkit-keyframes balloon3 {\n  0%, 100% {\n    -webkit-transform: translate(0, -10px) rotate(6eg);\n  }\n  50% {\n    -webkit-transform: translate(-20px, 30px) rotate(-8deg);\n  }\n}\n@keyframes balloon3 {\n  0%, 100% {\n    -webkit-transform: translate(0, -10px) rotate(6eg);\n            transform: translate(0, -10px) rotate(6eg);\n  }\n  50% {\n    -webkit-transform: translate(-20px, 30px) rotate(-8deg);\n            transform: translate(-20px, 30px) rotate(-8deg);\n  }\n}\n/* BAllOON 3*/\n@-webkit-keyframes balloon4 {\n  0%, 100% {\n    -webkit-transform: translate(10px, -10px) rotate(-8eg);\n  }\n  50% {\n    -webkit-transform: translate(-15px, 20px) rotate(10deg);\n  }\n}\n@keyframes balloon4 {\n  0%, 100% {\n    -webkit-transform: translate(10px, -10px) rotate(-8eg);\n            transform: translate(10px, -10px) rotate(-8eg);\n  }\n  50% {\n    -webkit-transform: translate(-15px, 10px) rotate(10deg);\n            transform: translate(-15px, 10px) rotate(10deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXIvRzpcXEJEQVlcXFN1cnByaXNlL3NyY1xcYXBwXFx0aW1lclxcdGltZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSxrRkFBQTtBQ0FSLGdCQUFnQjtBRG9CaEI7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDakJKO0FEb0JBO0VBQ0ksK0JBNUJHO0VBNkJILGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0E3Qkk7QUNZUjtBRG9CQTtFQUNJLGNBakNJO0VBa0NKLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkF6Q0c7RUEwQ0gsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNqQko7QURvQkE7Ozs7RUFJSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNqQko7QURvQkE7RUFDSSxtQkF0REU7QUNxQ047QURvQkE7RUFDSSxtQkF6REk7RUEwREosY0F4REc7QUN1Q1A7QURvQkE7RUFDSSxtQkE3REc7QUM0Q1A7QURvQkE7RUFDSSxtQkEvREs7QUM4Q1Q7QURxQkE7RUFDSSxxQ0ExRUU7RUEyRUYsY0F0RUc7RUF1RUgsY0FBQTtBQ25CSjtBRHNCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBOUVJO0VBK0VKLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUNuQko7QURvQkk7RUFDSSxpQ0FBQTtBQ2xCUjtBRG9CSTtFQUNJLG1CQXZGQTtFQXdGQSx5QkFBQTtBQ2xCUjtBRHNCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBL0ZFO0VBZ0dGLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNuQko7QURvQkk7RUFDSSxpQ0FBQTtBQ2xCUjtBRG9CSTtFQUNJLG1CQXhHRjtFQXlHRSx5QkFB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LHNEQUFBO1lBQUEsOENBQUE7RUM1RE47RUQ4REU7SUFDSSx1REFBQTtZQUFBLCtDQUFBO0VDNUROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aW1lci90aW1lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE1vbnRzZXJyYXQ6OTAwJyk7XHJcbiRmb250OiAnTGF0bycsXHJcbnNhbnMtc2VyaWY7XHJcbiRiaWc6ICdNb250c2VycmF0Jyxcclxuc2Fucy1zZXJpZjtcclxuJHJlZDogI0VGMkYzQztcclxuJHdoaXRlOiAjRjZGNEYzO1xyXG4kYmx1ZTogIzI3NkZCRjtcclxuJGRhcms6ICMxODMwNTk7XHJcbiR5ZWxsb3c6ICNGMEEyMDI7XHJcbiRzdGFyOiBwb2x5Z29uKDUwJSAwJSxcclxuNjElIDM1JSxcclxuOTglIDM1JSxcclxuNjglIDU3JSxcclxuNzklIDkxJSxcclxuNTAlIDcwJSxcclxuMjElIDkxJSxcclxuMzIlIDU3JSxcclxuMiUgMzUlLFxyXG4zOSUgMzUlKTtcclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgaGVpZ2h0OiA0ODBweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG59XHJcblxyXG4jdGltZXIge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjUlO1xyXG59XHJcblxyXG4uZGF5cyxcclxuLmhvdXJzLFxyXG4ubWludXRlcyxcclxuLnNlY29uZHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmRheXMge1xyXG4gICAgYmFja2dyb3VuZDogJHJlZDtcclxufVxyXG5cclxuLmhvdXJzIHtcclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIGNvbG9yOiAkZGFyaztcclxufVxyXG5cclxuLm1pbnV0ZXMge1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbn1cclxuXHJcbi5zZWNvbmRzIHtcclxuICAgIGJhY2tncm91bmQ6ICR5ZWxsb3c7XHJcbiAgICAubnVtYmVycyB7fVxyXG59XHJcblxyXG4ubnVtYmVycyB7XHJcbiAgICBmb250LWZhbWlseTogJGJpZztcclxuICAgIGNvbG9yOiAkZGFyaztcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG59XHJcblxyXG4ud2hpdGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICB0b3A6IDIlO1xyXG4gICAgLnRyaWFuZ2xlIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkICR3aGl0ZTtcclxuICAgIH1cclxuICAgIC5zdHJpbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogJHJlZDtcclxuICAgIGxlZnQ6IDEyJTtcclxuICAgIHRvcDogOSU7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIC50cmlhbmdsZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCAkcmVkO1xyXG4gICAgfVxyXG4gICAgLnN0cmluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHJlZDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4ueWVsbG93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICR5ZWxsb3c7XHJcbiAgICBsZWZ0OiA3OCU7XHJcbiAgICB0b3A6IDklO1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICAudHJpYW5nbGUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgJHllbGxvdztcclxuICAgIH1cclxuICAgIC5zdHJpbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR5ZWxsb3c7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHllbGxvdztcclxuICAgIH1cclxufVxyXG5cclxuLmJsdWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGxlZnQ6IDYwJTtcclxuICAgIHRvcDogNSU7XHJcbiAgICAudHJpYW5nbGUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgJGJsdWU7XHJcbiAgICB9XHJcbiAgICAuc3RyaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmJhbGxvb25zcGVjIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCUvIDQwJSA0MCUgNjAlIDYwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5leWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiAyMiU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgbGVmdDogMzVweDtcclxuICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgIGhlaWdodDogN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmJsaW5rMSxcclxuLmJsaW5rMTo6YWZ0ZXIge1xyXG4gICAgYW5pbWF0aW9uOiBleWVmcmFtZXMgMS41cyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmJsaW5rMixcclxuLmJsaW5rMjo6YWZ0ZXIge1xyXG4gICAgYW5pbWF0aW9uOiBleWVmcmFtZXMgM3MgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5ibGluazMsXHJcbi5ibGluazM6OmFmdGVyIHtcclxuICAgIGFuaW1hdGlvbjogZXllZnJhbWVzIDIuNXMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5ibGluazQsXHJcbi5ibGluazQ6OmFmdGVyIHtcclxuICAgIGFuaW1hdGlvbjogZXllZnJhbWVzIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGV5ZWZyYW1lcyB7XHJcbiAgICAwJSxcclxuICAgIDk1JSB7XHJcbiAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1vdXRoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgbGVmdDogNDMlO1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uaGFwcHkge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMwMDAgIzAwMCB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLnRyaWFuZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIGJvdHRvbTogLTEwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc3RyaW5nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBsZWZ0OiA0OCU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnN0YXIge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogJHN0YXI7XHJcbiAgICBjbGlwLXBhdGg6ICRzdGFyO1xyXG59XHJcblxyXG4uc3Rhci1yZWQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTFweDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6ICRzdGFyO1xyXG4gICAgY2xpcC1wYXRoOiAkc3RhcjtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG5cclxuLmJhbGxvb24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB3aWR0aDogNzM4cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFsbG9vbj5kaXYge1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgyLCAxNSwgOTcsIDAuOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogODAlIDgwJSA4MCUgODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTdweCA3cHggMTBweCByZ2JhKDE4MiwgMTUsIDk3LCAwLjkpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xyXG59XHJcblxyXG4uYmFsbG9vbj5kaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgyLCAxNSwgOTcsIDAuOSk7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxMHB4IDEwcHggcmdiYSgxMzUsIDExLCA3MiwgMC45KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBiYWxsb29uMSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBiYWxsb29uMSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogYmFsbG9vbjEgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGJhbGxvb24xIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uYmFsbG9vbj5kaXY6bnRoLWNoaWxkKDEpOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogcmdiYSgxODIsIDE1LCA5NywgMC45KTtcclxufVxyXG5cclxuLmJhbGxvb24+ZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMTEyLCA0NSwgMC45KTtcclxuICAgIGxlZnQ6IDEyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxMHB4IDEwcHggcmdiYSgyMjIsIDg1LCAxNCwgMC45KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBiYWxsb29uMiA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBiYWxsb29uMiA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogYmFsbG9vbjIgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGJhbGxvb24yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uYmFsbG9vbj5kaXY6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNDIsIDExMiwgNDUsIDAuOSk7XHJcbn1cclxuXHJcbi5iYWxsb29uPmRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg0NSwgMTgxLCAxNjcsIDAuOSk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMzUsIDE0MCwgMTI5LCAwLjkpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJhbGxvb240IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IGJhbGxvb240IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBiYWxsb29uNCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogYmFsbG9vbjQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5iYWxsb29uPmRpdjpudGgtY2hpbGQoMyk6YmVmb3JlIHtcclxuICAgIGNvbG9yOiByZ2JhKDQ1LCAxODEsIDE2NywgMC45KTtcclxufVxyXG5cclxuLmJhbGxvb24+ZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5MCwgNjEsIDI0NCwgMC45KTtcclxuICAgIGxlZnQ6IDM2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxMHB4IDEwcHggcmdiYSgxNzMsIDE0LCAyNDAsIDAuOSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmFsbG9vbjEgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogYmFsbG9vbjEgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAtby1hbmltYXRpb246IGJhbGxvb24xIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBiYWxsb29uMSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmJhbGxvb24+ZGl2Om50aC1jaGlsZCg0KTpiZWZvcmUge1xyXG4gICAgY29sb3I6IHJnYmEoMTkwLCA2MSwgMjQ0LCAwLjkpO1xyXG59XHJcblxyXG4uYmFsbG9vbj5kaXY6bnRoLWNoaWxkKDUpIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAyMjQsIDY3LCAwLjkpO1xyXG4gICAgbGVmdDogNDgwcHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxMHB4IDEwcHggMTBweCByZ2JhKDE1OCwgMjA2LCAzNCwgMC45KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBiYWxsb29uMyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBiYWxsb29uMyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogYmFsbG9vbjMgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGJhbGxvb24zIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uYmFsbG9vbj5kaXY6bnRoLWNoaWxkKDUpOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogcmdiYSgxODAsIDIyNCwgNjcsIDAuOSk7XHJcbn1cclxuXHJcbi5iYWxsb29uPmRpdjpudGgtY2hpbGQoNikge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDE5NCwgNTgsIDAuOSk7XHJcbiAgICBsZWZ0OiA2MDBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMjM0LCAxNzcsIDE1LCAwLjkpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJhbGxvb24yIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IGJhbGxvb24yIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBiYWxsb29uMiAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogYmFsbG9vbjIgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5iYWxsb29uPmRpdjpudGgtY2hpbGQoNik6YmVmb3JlIHtcclxuICAgIGNvbG9yOiByZ2JhKDI0MiwgMTk0LCA1OCwgMC45KTtcclxufVxyXG5cclxuLmJhbGxvb24+ZGl2OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogcmdiYSgxODIsIDE1LCA5NywgMC45KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTExcHg7XHJcbiAgICBsZWZ0OiA1MnB4O1xyXG4gICAgY29udGVudDogXCLilrJcIjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogNC44ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI3cHg7XHJcbn1cclxuXHJcblxyXG4vKkJBTExPT04gMSA0Ki9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBiYWxsb29uMSB7XHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNmRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBiYWxsb29uMSB7XHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNmRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgYmFsbG9vbjEge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC02ZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFsbG9vbjEge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC02ZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBCQWxsT09OIDIgNSovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbG9vbjIge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNmVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHJvdGF0ZSgtOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBiYWxsb29uMiB7XHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg2ZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHJvdGF0ZSgtOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgYmFsbG9vbjIge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDZkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHJvdGF0ZSgtOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFsbG9vbjIge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDZkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHJvdGF0ZSgtOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBCQWxsT09OIDAqL1xyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJhbGxvb24zIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCkgcm90YXRlKDZlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIDMwcHgpIHJvdGF0ZSgtOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBiYWxsb29uMyB7XHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpIHJvdGF0ZSg2ZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAzMHB4KSByb3RhdGUoLThkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIGJhbGxvb24zIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpIHJvdGF0ZSg2ZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMzBweCkgcm90YXRlKC04ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBiYWxsb29uMyB7XHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KSByb3RhdGUoNmVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIDMwcHgpIHJvdGF0ZSgtOGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBCQWxsT09OIDMqL1xyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJhbGxvb240IHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCkgcm90YXRlKC04ZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNXB4LCAyMHB4KSByb3RhdGUoMTBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgYmFsbG9vbjQge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC0xMHB4KSByb3RhdGUoLThlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1cHgsIDEwcHgpIHJvdGF0ZSgxMGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgYmFsbG9vbjQge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCkgcm90YXRlKC04ZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTVweCwgMTBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBiYWxsb29uNCB7XHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC0xMHB4KSByb3RhdGUoLThlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNXB4LCAxMHB4KSByb3RhdGUoMTBkZWcpO1xyXG4gICAgfVxyXG59IiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE1vbnRzZXJyYXQ6OTAwXCIpO1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDY1MHB4O1xuICBoZWlnaHQ6IDQ4MHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICBjb2xvcjogI0Y2RjRGMztcbn1cblxuI3RpbWVyIHtcbiAgY29sb3I6ICNGNkY0RjM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICBtYXJnaW4tdG9wOiAyNSU7XG59XG5cbi5kYXlzLFxuLmhvdXJzLFxuLm1pbnV0ZXMsXG4uc2Vjb25kcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kYXlzIHtcbiAgYmFja2dyb3VuZDogI0VGMkYzQztcbn1cblxuLmhvdXJzIHtcbiAgYmFja2dyb3VuZDogI0Y2RjRGMztcbiAgY29sb3I6ICMxODMwNTk7XG59XG5cbi5taW51dGVzIHtcbiAgYmFja2dyb3VuZDogIzI3NkZCRjtcbn1cblxuLnNlY29uZHMge1xuICBiYWNrZ3JvdW5kOiAjRjBBMjAyO1xufVxuLm51bWJlcnMge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMTgzMDU5O1xuICBmb250LXNpemU6IDRlbTtcbn1cblxuLndoaXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjRjZGNEYzO1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiA3NXB4O1xuICBsZWZ0OiAzMCU7XG4gIHRvcDogMiU7XG59XG4ud2hpdGUgLnRyaWFuZ2xlIHtcbiAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCAjRjZGNEYzO1xufVxuLndoaXRlIC5zdHJpbmcge1xuICBiYWNrZ3JvdW5kOiAjRjZGNEYzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjZGNEYzO1xufVxuXG4ucmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjRUYyRjNDO1xuICBsZWZ0OiAxMiU7XG4gIHRvcDogOSU7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDcwcHg7XG59XG4ucmVkIC50cmlhbmdsZSB7XG4gIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgI0VGMkYzQztcbn1cbi5yZWQgLnN0cmluZyB7XG4gIGJhY2tncm91bmQ6ICNFRjJGM0M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFRjJGM0M7XG59XG5cbi55ZWxsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNGMEEyMDI7XG4gIGxlZnQ6IDc4JTtcbiAgdG9wOiA5JTtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogNzBweDtcbn1cbi55ZWxsb3cgLnRyaWFuZ2xlIHtcbiAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCAjRjBBMjAyO1xufVxuLnllbGxvdyAuc3RyaW5nIHtcbiAgYmFja2dyb3VuZDogI0YwQTIwMjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0YwQTIwMjtcbn1cblxuLmJsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMyNzZGQkY7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGxlZnQ6IDYwJTtcbiAgdG9wOiA1JTtcbn1cbi5ibHVlIC50cmlhbmdsZSB7XG4gIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgIzI3NkZCRjtcbn1cbi5ibHVlIC5zdHJpbmcge1xuICBiYWNrZ3JvdW5kOiAjMjc2RkJGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjc2RkJGO1xufVxuXG4uYmFsbG9vbnNwZWMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCUvNDAlIDQwJSA2MCUgNjAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uZXllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDIyJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmV5ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDM1cHg7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJsaW5rMSxcbi5ibGluazE6OmFmdGVyIHtcbiAgYW5pbWF0aW9uOiBleWVmcmFtZXMgMS41cyBpbmZpbml0ZTtcbn1cblxuLmJsaW5rMixcbi5ibGluazI6OmFmdGVyIHtcbiAgYW5pbWF0aW9uOiBleWVmcmFtZXMgM3MgaW5maW5pdGU7XG59XG5cbi5ibGluazMsXG4uYmxpbmszOjphZnRlciB7XG4gIGFuaW1hdGlvbjogZXllZnJhbWVzIDIuNXMgaW5maW5pdGU7XG59XG5cbi5ibGluazQsXG4uYmxpbms0OjphZnRlciB7XG4gIGFuaW1hdGlvbjogZXllZnJhbWVzIDJzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGV5ZWZyYW1lcyB7XG4gIDAlLCA5NSUge1xuICAgIGhlaWdodDogN3B4O1xuICB9XG4gIDEwMCUge1xuICAgIGhlaWdodDogMXB4O1xuICB9XG59XG4ubW91dGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiA0MyU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5oYXBweSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMwMDAgIzAwMCB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4udHJpYW5nbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwJTtcbiAgYm90dG9tOiAtMTAlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnN0cmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMXB4O1xuICBsZWZ0OiA0OCU7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5zdGFyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI0Y2RjRGMztcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCA2MSUgMzUlLCA5OCUgMzUlLCA2OCUgNTclLCA3OSUgOTElLCA1MCUgNzAlLCAyMSUgOTElLCAzMiUgNTclLCAyJSAzNSUsIDM5JSAzNSUpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCA2MSUgMzUlLCA5OCUgMzUlLCA2OCUgNTclLCA3OSUgOTElLCA1MCUgNzAlLCAyMSUgOTElLCAzMiUgNTclLCAyJSAzNSUsIDM5JSAzNSUpO1xufVxuXG4uc3Rhci1yZWQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogNTFweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYmFja2dyb3VuZDogI0VGMkYzQztcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCA2MSUgMzUlLCA5OCUgMzUlLCA2OCUgNTclLCA3OSUgOTElLCA1MCUgNzAlLCAyMSUgOTElLCAzMiUgNTclLCAyJSAzNSUsIDM5JSAzNSUpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCA2MSUgMzUlLCA5OCUgMzUlLCA2OCUgNTclLCA3OSUgOTElLCA1MCUgNzAlLCAyMSUgOTElLCAzMiUgNTclLCAyJSAzNSUsIDM5JSAzNSUpO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBsZWZ0OiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4uYmFsbG9vbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdpZHRoOiA3MzhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iYWxsb29uID4gZGl2IHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MiwgMTUsIDk3LCAwLjkpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmFkaXVzOiA4MCUgODAlIDgwJSA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDE3cHggN3B4IDEwcHggcmdiYSgxODIsIDE1LCA5NywgMC45KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MiwgMTUsIDk3LCAwLjkpO1xuICBsZWZ0OiAwO1xuICBib3gtc2hhZG93OiBpbnNldCAxMHB4IDEwcHggMTBweCByZ2JhKDEzNSwgMTEsIDcyLCAwLjkpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmFsbG9vbjEgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBiYWxsb29uMSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBiYWxsb29uMSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBiYWxsb29uMSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmJhbGxvb24gPiBkaXY6bnRoLWNoaWxkKDEpOmJlZm9yZSB7XG4gIGNvbG9yOiByZ2JhKDE4MiwgMTUsIDk3LCAwLjkpO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMTEyLCA0NSwgMC45KTtcbiAgbGVmdDogMTIwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMjIyLCA4NSwgMTQsIDAuOSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBiYWxsb29uMiA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJhbGxvb24yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGJhbGxvb24yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb246IGJhbGxvb24yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpudGgtY2hpbGQoMik6YmVmb3JlIHtcbiAgY29sb3I6IHJnYmEoMjQyLCAxMTIsIDQ1LCAwLjkpO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpudGgtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCAxODEsIDE2NywgMC45KTtcbiAgbGVmdDogMjQwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMzUsIDE0MCwgMTI5LCAwLjkpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmFsbG9vbjQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBiYWxsb29uNCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBiYWxsb29uNCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBiYWxsb29uNCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmJhbGxvb24gPiBkaXY6bnRoLWNoaWxkKDMpOmJlZm9yZSB7XG4gIGNvbG9yOiByZ2JhKDQ1LCAxODEsIDE2NywgMC45KTtcbn1cblxuLmJhbGxvb24gPiBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTAsIDYxLCAyNDQsIDAuOSk7XG4gIGxlZnQ6IDM2MHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAxMHB4IDEwcHggMTBweCByZ2JhKDE3MywgMTQsIDI0MCwgMC45KTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJhbGxvb24xIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogYmFsbG9vbjEgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogYmFsbG9vbjEgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYmFsbG9vbjEgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5iYWxsb29uID4gZGl2Om50aC1jaGlsZCg0KTpiZWZvcmUge1xuICBjb2xvcjogcmdiYSgxOTAsIDYxLCAyNDQsIDAuOSk7XG59XG5cbi5iYWxsb29uID4gZGl2Om50aC1jaGlsZCg1KSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAyMjQsIDY3LCAwLjkpO1xuICBsZWZ0OiA0ODBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxMHB4IDEwcHggcmdiYSgxNTgsIDIwNiwgMzQsIDAuOSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBiYWxsb29uMyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJhbGxvb24zIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGJhbGxvb24zIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb246IGJhbGxvb24zIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpudGgtY2hpbGQoNSk6YmVmb3JlIHtcbiAgY29sb3I6IHJnYmEoMTgwLCAyMjQsIDY3LCAwLjkpO1xufVxuXG4uYmFsbG9vbiA+IGRpdjpudGgtY2hpbGQoNikge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMTk0LCA1OCwgMC45KTtcbiAgbGVmdDogNjAwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxMHB4IHJnYmEoMjM0LCAxNzcsIDE1LCAwLjkpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmFsbG9vbjIgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBiYWxsb29uMiAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBiYWxsb29uMiAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBiYWxsb29uMiAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmJhbGxvb24gPiBkaXY6bnRoLWNoaWxkKDYpOmJlZm9yZSB7XG4gIGNvbG9yOiByZ2JhKDI0MiwgMTk0LCA1OCwgMC45KTtcbn1cblxuLmJhbGxvb24gPiBkaXY6YmVmb3JlIHtcbiAgY29sb3I6IHJnYmEoMTgyLCAxNSwgOTcsIDAuOSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTFweDtcbiAgbGVmdDogNTJweDtcbiAgY29udGVudDogXCLilrJcIjtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDQuOGVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjdweDtcbn1cblxuLypCQUxMT09OIDEgNCovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbG9vbjEge1xuICAwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC02ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoOGRlZyk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBiYWxsb29uMSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTZkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpIHJvdGF0ZSg4ZGVnKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBiYWxsb29uMSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC02ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgcm90YXRlKDhkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhbGxvb24xIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTZkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoOGRlZyk7XG4gIH1cbn1cbi8qIEJBbGxPT04gMiA1Ki9cbkAtd2Via2l0LWtleWZyYW1lcyBiYWxsb29uMiB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNmVnKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSByb3RhdGUoLThkZWcpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYmFsbG9vbjIge1xuICAwJSwgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDZkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpIHJvdGF0ZSgtOGRlZyk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYmFsbG9vbjIge1xuICAwJSwgMTAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg2ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCkgcm90YXRlKC04ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBiYWxsb29uMiB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDZkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KSByb3RhdGUoLThkZWcpO1xuICB9XG59XG4vKiBCQWxsT09OIDAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGJhbGxvb24zIHtcbiAgMCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpIHJvdGF0ZSg2ZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMzBweCkgcm90YXRlKC04ZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJhbGxvb24zIHtcbiAgMCUsIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpIHJvdGF0ZSg2ZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMzBweCkgcm90YXRlKC04ZGVnKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBiYWxsb29uMyB7XG4gIDAlLCAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCkgcm90YXRlKDZlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMzBweCkgcm90YXRlKC04ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBiYWxsb29uMyB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCkgcm90YXRlKDZlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMzBweCkgcm90YXRlKC04ZGVnKTtcbiAgfVxufVxuLyogQkFsbE9PTiAzKi9cbkAtd2Via2l0LWtleWZyYW1lcyBiYWxsb29uNCB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC0xMHB4KSByb3RhdGUoLThlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNXB4LCAyMHB4KSByb3RhdGUoMTBkZWcpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYmFsbG9vbjQge1xuICAwJSwgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCkgcm90YXRlKC04ZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTVweCwgMTBweCkgcm90YXRlKDEwZGVnKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBiYWxsb29uNCB7XG4gIDAlLCAxMDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCkgcm90YXRlKC04ZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1cHgsIDEwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFsbG9vbjQge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTEwcHgpIHJvdGF0ZSgtOGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNXB4LCAxMHB4KSByb3RhdGUoMTBkZWcpO1xuICB9XG59Il19 */"

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
        this.width = screen.width;
        if (this.width < 650) {
            this.width = Math.abs(this.width - 650);
            this.width = this.width / 650;
            document.body.style.zoom = ((1 - this.width) * 100) + '%';
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