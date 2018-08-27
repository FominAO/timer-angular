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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.timer {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between\r\n}\r\n\r\n.timer__label {\r\n    width: 100%;\r\n    height: 10%;\r\n}\r\n\r\n.timer__clocks {\r\n    height: 90%;\r\n    width: 24%;\r\n}\r\n\r\n.number {\r\n    font-size: 80pt;\r\n    position: relative;\r\n    top: -183px;\r\n    left: 83px;\r\n}\r\n\r\nmat-slider {\r\n    width: 300px\r\n}\r\n\r\n.label-container {\r\n    width: 150px;\r\n}\r\n\r\n.launch__button {\r\n    box-shadow: none;\r\n    border: none;\r\n    background-color: #FA5078;\r\n    width: 80px;\r\n    height: 30px;\r\n    margin-right: 15px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.launch__button:hover {\r\n    background-color: rgb(255, 126, 156);\r\n}\r\n\r\n.launch__button:active {\r\n    background-color: rgb(248, 55, 100);\r\n\r\n}\r\n\r\n.current-value {\r\n    flex-grow: 1;\r\n    text-align: right;\r\n}\r\n\r\n.control {\r\n    max-width: 650px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.control label {\r\n    flex-grow: 1;\r\n}\r\n\r\n.picker {\r\n    flex-grow: 2;\r\n}\r\n\r\n.color-change__input, .width-change__input {\r\nwidth: 100%;\r\npadding: 4px 0; \r\nborder-radius: 3px;\r\nbox-shadow: none;\r\nborder: 1px solid rgb(137, 165, 255)\r\n}\r\n\r\n#circle{\r\n  -webkit-transform: translateY(500px) rotate(-90deg) scaleY(-1) translateY(-500px);\r\n          transform: translateY(500px) rotate(-90deg) scaleY(-1) translateY(-500px);\r\n  /* stroke-dasharray: 1512, 1800; */\r\n  transition: 500ms;\r\n}\r\n\r\n.svg-circle {\r\n      transition: 500ms;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\t\t<div class=\"container\">\n<div class=\"timer\">\n  <div class=\"timer__label\"></div>\n  <div class=\"timer__clocks\" *ngFor=\"let clock of clocks; let i = index\">\n    <div class=\"svg-circle-container\">\n          <svg class=\"svg-circle\" appTickDirective [clockCount]=\"clock\" [clockType]=\"i\"  xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 500 500\">\n              <style type=\"text/css\">\n                .st1{fill: #000000; font-family: \"Arial\"; font-size: 250px;}\n                \n              </style>\n            <circle  class=\"circle\" id=\"circle\" cx=\"250\" cy=\"250\" r=\"240\"\n              [(attr.style)]=\"strokedRed\"\n                    fill=\"none\" [(attr.stroke)]=\" '#' + circleColor\" [(attr.stroke-width)]=\"circleStrokeWidth\"/>\n                    <text [attr.transform]=\"textMatr[i]\" class=\"st1\">{{clock}}</text>\n          </svg>\n    </div>\n\n  </div>\n\n</div>\n<div class=\"contol-panel\">\n  <div class=\"control color-change\">\n    <label for=\"color\">Color (#NNN)</label>\n    <div class=\"picker\">\n    <mat-slider min=\"1\" max=\"1665\" step=\"1\" [(value)]=\"circleColor\"></mat-slider>\n    </div>\n    <div class=\"current-value\">#{{circleColor}}</div> \n    <!-- <input class=\"color-change__input\" name=\"color\" type=\"text\" (keyup)=\"changeColor($event.target.value)\"> -->\n  </div>\n  <div class=\"control width-change\">\n      <label for=\"width\">Stroke width</label>\n      <div class=\"picker\">\n      <mat-slider min=\"0\" max=\"21\" step=\"1\" [(value)]=\"circleStrokeWidth\"></mat-slider>\n      </div>\n      <div class=\"current-value\">{{circleStrokeWidth}}</div>\n    </div>\n  <div class=\"control date-change\">\n    <span class=\"label-container\"><label  for=\"date\">Goal date</label></span> \n    <div class=\"picker\">\n    <mat-form-field class=\"example-full-width\" color=\"accent\">\n      <input matInput [min]=\"newDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\" (dateChange)=\"dateChange($event)\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    </div>\n    <div class=\"current-value\">{{customDate | date:middle}}</div>\n  </div>\n  \n    <div class=\"launch\">\n      <button class=\"launch__button\" (click)=\"start(newDate)\">Start</button>\n      <button class=\"launch__button\" (click)=\"stop()\">Stop</button>\n    </div>\n</div>\n    </div>\n</body>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.clocks = [1, 22, 56, 0];
        this.sliderVal = 300;
        this.circleColor = "999";
        this.circleWidth = "300";
        this.circleStrokeWidth = "8";
        this.twoNumberMatr = "matrix(1 0 0 1 120 340)";
        this.oneNumberMatr = "matrix(1 0 0 1 180 340)";
        this.textMatr = ["matrix(1 0 0 1 180 340)", "matrix(1 0 0 1 120 340)", "matrix(1 0 0 1 120 340)", "matrix(1 0 0 1 180 340)"];
    }
    AppComponent.prototype.changeColor = function (e) {
        this.circleColor = "#" + e.toString(16);
    };
    AppComponent.prototype.changeSW = function (e) {
        if (+e < 50) {
            this.circleStrokeWidth = e + "px";
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.currentDate = new Date();
        this.newDate = this.currentDate;
        this.maxDate = new Date(+(this.currentDate) + 8550600000);
        this.customDate = new Date(+(this.currentDate) + 86400000);
    };
    AppComponent.prototype.tick = function () {
        if (this.clocks[3] > 0) {
            this.clocks[3] -= 1;
        }
        else {
            this.clocks[3] = 59;
            if (this.clocks[2] > 0) {
                this.clocks[2] -= 1;
            }
            else {
                this.clocks[2] = 59;
                if (this.clocks[1] > 0) {
                    this.clocks[1] -= 1;
                }
                else {
                    this.clocks[1] = 23;
                    if (this.clocks[0] > 0) {
                        this.clocks[0] -= 1;
                    }
                }
            }
        }
        this.setMatrix();
        // if (this.clocks[2] > 0 && ){
        //   this.clocks[2] -= 1;
        //   this.clocks[3] = 59;
        // } else if (this.clocks[1] > 0) {
        //   this.clocks[1] -= 1
        //   this.clocks[2] = 59
        // } else {
        //   this.clocks[1] = 23
        //   this.clocks[0] += 1
        // }
        // this.strokedRed  = 'stroke-dasharray: ' + this.stroked + ', 1800'
        // for (let i=0; i<4; i++) {
        //   if (i != 0) {
        //   document.getElementsByClassName('circle')[i]['style'] = 'stroke-dasharray: ' + (1512 - Math.round(24.2*this.clocks[i])) + ', 1512'
        //   console.log(document.getElementsByClassName('circle')[i].attributes["style"]) 
        //   } else {
        //     document.getElementsByClassName('circle')[i]['style'] = 'stroke-dasharray: ' + (1512 - Math.round(63*this.clocks[i])) + ', 1512'
        //     console.log(document.getElementsByClassName('circle')[i].attributes["style"]) 
        //   }
        // };
    };
    AppComponent.prototype.start = function (newDate) {
        clearInterval(this.timer);
        var date = Math.floor((+this.customDate - newDate) / 1000);
        this.clocks[3] = date % 60;
        date = Math.floor(date / 60);
        this.clocks[2] = date % 60;
        date = Math.floor(date / 60);
        this.clocks[1] = date % 24;
        date = Math.floor(date / 24);
        this.clocks[0] = date;
        this.timer = setInterval(this.tick.bind(this), 1000);
        // for (let i=0; i<4; i++) {
        //   if (i != 0) {
        //   document.getElementsByClassName('circle')[i]['style'] = 'stroke-dasharray: ' + 25.2*this.clocks[i] + ', 1800'
        //   } else {
        //     document.getElementsByClassName('circle')[i]['style'] = 'stroke-dasharray: ' + 63*this.clocks[i] + ', 1800'
        //   }
        //   console.log(document.getElementsByClassName('circle')[i].attributes["style"]) 
        // };
        // this.textMatr[i] = "matrix(1 0 0 1 "+ "180" +" 340)"
    };
    AppComponent.prototype.stop = function () {
        clearInterval(this.timer);
    };
    AppComponent.prototype.dateChange = function (e) {
        this.customDate = e.value;
    };
    AppComponent.prototype.setMatrix = function () {
        for (var i = 0; i < 4; i++) {
            if (this.clocks[i] < 10) {
                this.textMatr[i] = this.oneNumberMatr;
            }
            else {
                this.textMatr[i] = this.twoNumberMatr;
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ticking_ticking_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticking/ticking.directive */ "./src/app/ticking/ticking.directive.ts");
/* harmony import */ var _tick_directive_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tick-directive.directive */ "./src/app/tick-directive.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _ticking_ticking_directive__WEBPACK_IMPORTED_MODULE_5__["Ticking"],
                _tick_directive_directive__WEBPACK_IMPORTED_MODULE_6__["TickDirectiveDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tick-directive.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/tick-directive.directive.ts ***!
  \*********************************************/
/*! exports provided: TickDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickDirectiveDirective", function() { return TickDirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TickDirectiveDirective = /** @class */ (function () {
    function TickDirectiveDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.strokeDasharray = "0, 1508";
    }
    TickDirectiveDirective.prototype.ngOnInit = function () {
        if (this.clockType != 0) {
            this.strokeDasharray = (1508 - Math.round(25.13 * this.clockCount)) + ', 1508';
        }
        else {
            this.strokeDasharray = (1508 - Math.round(62.83 * this.clockCount)) + ', 1508';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TickDirectiveDirective.prototype, "clockType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TickDirectiveDirective.prototype, "clockCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.strokeDasharray'),
        __metadata("design:type", String)
    ], TickDirectiveDirective.prototype, "strokeDasharray", void 0);
    TickDirectiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appTickDirective]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], TickDirectiveDirective);
    return TickDirectiveDirective;
}());



/***/ }),

/***/ "./src/app/ticking/ticking.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/ticking/ticking.directive.ts ***!
  \**********************************************/
/*! exports provided: Ticking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticking", function() { return Ticking; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ticking = /** @class */ (function () {
    // @Input() tick:string = "1512, 1800";
    // @HostBinding('style.strokeDasharray') strokeDasharray: string;
    function Ticking(elRef) {
        this.elRef = elRef;
    }
    Ticking.prototype.ngOnInit = function () {
        console.log('directive on');
        this.elRef.nativeElement.style.color = "red";
    };
    Ticking = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tiсking]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], Ticking);
    return Ticking;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\practice\timer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map