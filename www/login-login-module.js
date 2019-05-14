(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\t<div class=\"back\">\n\t\t<ion-slides>\n\t\t  <ion-slide>\n\t\t\t<div class=\"slide-inner ion-padding\">\n\t\t\t  <span>Login</span>\n\t  \n\t\t\t  <ion-item class=\"ion-margin-top\">\n\t\t\t  \t<ion-label position=\"stacked\">E-mail</ion-label>\n\t\t\t\t<div class=\"input\">\n\t\t\t\t\t<ion-input type=\"email\" placeholder=\"nome@email.com\"></ion-input>\n\t\t\t  \t</div>\n\t\t\t  </ion-item>\n\t\t\t  <ion-item class=\"ion-margin-top\">\n\t\t\t  \t<ion-label position=\"stacked\">Senha</ion-label>\n\t\t\t\t<div class=\"input\">\n\t\t\t\t\t<ion-input type=\"password\" placeholder=\"********\"></ion-input>\n\t\t\t  \t</div>\n\t\t\t  </ion-item>\n\n\t\t\t  <div>\n\t\t\t\t  <ion-button class=\"social\" size=\"default\" fill=\"clear\">\n\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"logo-google\" color=\"danger\"></ion-icon>\n\t\t\t\t  </ion-button>\n\t\t\t\t  <ion-button class=\"social\" size=\"default\" fill=\"clear\">\n\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"logo-linkedin\" color=\"primary\"></ion-icon>\n\t\t\t\t  </ion-button>\n\t\t\t\t  <ion-button class=\"social\" size=\"default\" fill=\"clear\">\n\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"logo-facebook\" color=\"primary-shade\n\"></ion-icon>\n\t\t\t\t  </ion-button>\n\t\t\t\t  <ion-button class=\"social\" size=\"default\" fill=\"clear\">\n\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"logo-instagram\" color=\"tertiary\"></ion-icon>\n\t\t\t\t  </ion-button>\n\t\t\t\t  <ion-button color=\"dark\" expand=\"block\" (click)=\"login()\">\n\t\t\t\t\tEntrar\n\t\t\t\t  </ion-button>\n\t\t\t  </div>\n\t\t\t  \n\t\t\t  <ion-button color=\"dark\" (click)=\"slideN()\" expand=\"block\">\n\t\t\t\tCadastrar\n\t\t\t  </ion-button>\n\t\t\t</div>\n\t\t  </ion-slide>\n\n\n\t\t  <ion-slide>\n\t\t\t<div class=\"slide-inner ion-padding\">\n\t\t\t  <span>Cadastrar</span>\n\t\t\t  <ion-item class=\"ion-margin-top\">\n\t\t\t  \t<ion-label position=\"stacked\">Nome</ion-label>\n\t\t\t  \t<div class=\"input\">\n\t\t\t\t\t<ion-input type=\"text\" placeholder=\"Josh Gomes\"></ion-input>\n\t\t\t\t</div>\n\t\t\t  </ion-item>\n\n\t\t\t  <ion-item class=\"ion-margin-top\">\n\t\t\t  \t<ion-label position=\"stacked\">E-mail</ion-label>\n\t\t\t\t<div class=\"input\">\n\t\t\t\t\t<ion-input type=\"email\" placeholder=\"nome@email.com\"></ion-input>\n\t\t\t\t</div>\n\t\t\t  </ion-item>\n\t\t\t  \n\t\t\t  <ion-item class=\"ion-margin-top\">\n\t\t\t  \t<ion-label position=\"stacked\">Telefone</ion-label>\n\t\t\t\t<div class=\"input\">\n\t\t\t\t\t<ion-input type=\"tel\" placeholder=\"82988789635\"></ion-input>\n\t\t\t  \t</div>\n\t\t\t  </ion-item>\n\t\t\t  \n\t\t\t  <ion-item class=\"ion-margin-top\">\n\t\t\t  \t<ion-label position=\"stacked\">CPF</ion-label>\n\t\t\t\t<div class=\"input\">\n\t\t\t\t\t<ion-input type=\"number\" placeholder=\"12139674110\"></ion-input>\n\t\t\t  \t</div>\n\t\t\t  </ion-item>\n\t\t\t  \n\t\t\t  <ion-item class=\"ion-margin-top\">\n\t\t\t  \t<ion-label position=\"stacked\">Senha</ion-label>\n\t\t\t\t<div class=\"input\">\n\t\t\t\t\t<ion-input type=\"password\" placeholder=\"********\"></ion-input>\n\t\t\t  \t</div>\n\t\t\t  </ion-item>\n\t\t\t  \n\t\t\t  <ion-button class=\"ion-margin-top\" color=\"dark\" (click)=\"login()\" expand=\"block\">\n\t\t\t\tCadastrar\n\t\t\t  </ion-button>\n\t\t\t  <ion-button color=\"dark\" (click)=\"slideP()\" expand=\"block\">\n\t\t\t\tLogin\n\t\t\t  </ion-button>\n\t\t\t</div>\n\t\t  </ion-slide>\n\t\t</ion-slides>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n  height: 100%; }\n  .back ion-slides {\n    height: 100%; }\n  .back ion-slides .slide-inner {\n      width: 90%;\n      border-radius: 5px; }\n  .back ion-slides .slide-inner .input {\n        width: 100%;\n        margin-top: 5px;\n        border-radius: 5px;\n        padding-left: 15px; }\n  .back ion-slides .slide-inner .login {\n        width: 80%; }\n  .back ion-slides .slide-inner .social {\n        width: 23%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2pldG9zL0RheVdvcmsvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZLEVBQUE7RUFEYjtJQUtFLFlBQVksRUFBQTtFQUxkO01BUUcsVUFBVTtNQUNWLGtCQUFrQixFQUFBO0VBVHJCO1FBY0ksV0FBVztRQUNYLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsa0JBQWtCLEVBQUE7RUFqQnRCO1FBdUJJLFVBQVUsRUFBQTtFQXZCZDtRQTJCSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja3tcblx0aGVpZ2h0OiAxMDAlO1xuLy9cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG5cblx0aW9uLXNsaWRlc3tcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XG5cdFx0LnNsaWRlLWlubmVye1xuXHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHQvL1x0Y29sb3I6ICNmZmY7XG5cdFx0Ly9cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuXG5cdFx0XHQuaW5wdXR7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xuXHRcdC8vXHRcdGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuXHRcdC8vXHRcdC0tY29sb3I6ICMwMDA7XG5cdFx0XHR9XG5cblx0XHRcdC5sb2dpbntcblx0XHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdH1cblxuXHRcdFx0LnNvY2lhbHtcblx0XHRcdFx0d2lkdGg6IDIzJTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.menu.close('menu');
        this.storage.remove('color');
        this.storage.set('color', 'dark');
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.navigateForward('/home');
    };
    LoginPage.prototype.slideN = function () {
        this.slides.slideNext();
    };
    LoginPage.prototype.slideP = function () {
        this.slides.slidePrev();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map