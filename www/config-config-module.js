(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module"],{

/***/ "./src/app/config/config.module.ts":
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/*! exports provided: ConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.page */ "./src/app/config/config.page.ts");







var routes = [
    {
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]
    }
];
var ConfigPageModule = /** @class */ (function () {
    function ConfigPageModule() {
    }
    ConfigPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]]
        })
    ], ConfigPageModule);
    return ConfigPageModule;
}());



/***/ }),

/***/ "./src/app/config/config.page.html":
/*!*****************************************!*\
  !*** ./src/app/config/config.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{pageColor}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Configurações</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"center\">\n          <ion-avatar>\n            <img src=\"/assets/img/Usuario.jpg\">\n          </ion-avatar>\n          <ion-card-title>Josh Gomes</ion-card-title>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div>\n    <ion-item class=\"ion-margin-top\">\n      <ion-label>Nome:</ion-label>\n      <div class=\"input\">\n      <ion-input type=\"text\" placeholder=\"Josh Gomes\" value=\"Josh Gomes\"></ion-input>\n    </div>\n    </ion-item>\n\n    <ion-item class=\"ion-margin-top\">\n      <ion-label>E-mail:</ion-label>\n      <div class=\"input\">\n        <ion-input type=\"email\" placeholder=\"nome@email.com\" value=\"joshgomes@gmail.com\"></ion-input>\n      </div>\n    </ion-item>\n    \n    <ion-item class=\"ion-margin-top\">\n      <ion-label>Telefone:</ion-label>\n    <div class=\"input\">\n      <ion-input type=\"tel\" placeholder=\"82988789635\" value=\"82988789635\"></ion-input>\n      </div>\n    </ion-item>\n    \n    <ion-item class=\"ion-margin-top\">\n      <ion-label>Senha:</ion-label>\n      <div class=\"input\">\n        <ion-input type=\"password\" placeholder=\"********\" value=\"********\"></ion-input>\n      </div>\n      </ion-item>\n  </div>\n\n  <ion-item class=\"ion-margin-top\">\n    <ion-label>Sexo:</ion-label>\n    <ion-select [(ngModel)]=\"sexo\" name=\"sexo\" placeholder=\"Selecione\" value=\"Masculino\">\n      <ion-select-option>Masculino</ion-select-option>\n      <ion-select-option>Feminino</ion-select-option>\n      <ion-select-option>Outro</ion-select-option>\n    </ion-select>\n  </ion-item>\n  \n  <ion-item class=\"ion-margin-top\">\n    <ion-label>Sua especialidade:</ion-label>\n    <ion-select [(ngModel)]=\"cargo\" name=\"cargo\" placeholder=\"Selecione\" value=\"Professor\">\n      <ion-select-option>Professor</ion-select-option>\n      <ion-select-option>Programador</ion-select-option>\n      <ion-select-option>Administrador</ion-select-option>\n      <ion-select-option>Engenheiro</ion-select-option>\n      <ion-select-option>Outro...</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item class=\"ion-margin-top\">\n    <ion-label>Cores:</ion-label>\n    <ion-select [(ngModel)]=\"cor\" name=\"cor\" placeholder=\"Cor\">\n      <ion-select-option>Vermelho</ion-select-option>\n      <ion-select-option>Preto</ion-select-option>\n      <ion-select-option>Amarelo</ion-select-option>\n      <ion-select-option>Roxo</ion-select-option>\n      <ion-select-option>Azul</ion-select-option>\n    </ion-select>\n  </ion-item>\n  \n</ion-content>\n<ion-footer>\n  <ion-button (click)=\"myColor(cor)\" color=\"success\" class=\"ion-margin-bottom\" expand=\"block\" padding>Salvar</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/config/config.page.scss":
/*!*****************************************!*\
  !*** ./src/app/config/config.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  background-image: url(\"/assets/img/capa.jpg\");\n  background-position: center;\n  background-size: 100%; }\n  ion-grid .center {\n    text-align: center;\n    --color: white; }\n  ion-grid .center ion-avatar {\n      width: 75px;\n      height: 75px;\n      display: block;\n      margin-top: 16px;\n      margin-right: auto;\n      margin-bottom: 5px;\n      margin-left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2pldG9zL0RheVdvcmsvc3JjL2FwcC9jb25maWcvY29uZmlnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDZDQUE2QztFQUM3QywyQkFBMkI7RUFDM0IscUJBQXFCLEVBQUE7RUFIdEI7SUFNRSxrQkFBa0I7SUFDbEIsY0FBUSxFQUFBO0VBUFY7TUFVRyxXQUFXO01BQ1gsWUFBWTtNQUNaLGNBQWM7TUFDZCxnQkFBZ0I7TUFDYixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ3JCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29uZmlnL2NvbmZpZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9jYXBhLmpwZycpO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblxuXHQuY2VudGVye1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQtLWNvbG9yOiB3aGl0ZTtcblxuXHRcdGlvbi1hdmF0YXJ7XG5cdFx0XHR3aWR0aDogNzVweDtcblx0XHRcdGhlaWdodDogNzVweDtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHQgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRcdCAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHR9XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/config/config.page.ts":
/*!***************************************!*\
  !*** ./src/app/config/config.page.ts ***!
  \***************************************/
/*! exports provided: ConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var ConfigPage = /** @class */ (function () {
    function ConfigPage(conf, storage) {
        this.conf = conf;
        this.storage = storage;
    }
    ConfigPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('color').then(function (val) {
            _this.pageColor = val;
        });
    };
    ConfigPage.prototype.myColor = function (cor) {
        var _this = this;
        if (cor == 'Vermelho') {
            this.storage.remove('color');
            this.storage.set('color', 'danger');
        }
        if (cor == 'Preto') {
            this.storage.remove('color');
            this.storage.set('color', 'dark');
        }
        if (cor == 'Amarelo') {
            this.storage.remove('color');
            this.storage.set('color', 'warning');
        }
        if (cor == 'Roxo') {
            this.storage.remove('color');
            this.storage.set('color', 'tertiary');
        }
        if (cor == 'Azul') {
            this.storage.remove('color');
            this.storage.set('color', 'primary');
        }
        this.storage.get('color').then(function (val) {
            console.log('Your color is', val);
            _this.pageColor = val;
            window.location.reload();
        });
        return this.pageColor;
    };
    ConfigPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.page.html */ "./src/app/config/config.page.html"),
            providers: [
                _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
            ],
            styles: [__webpack_require__(/*! ./config.page.scss */ "./src/app/config/config.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], ConfigPage);
    return ConfigPage;
}());



/***/ })

}]);
//# sourceMappingURL=config-config-module.js.map