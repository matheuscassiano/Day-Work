(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contatos-contatos-module"],{

/***/ "./src/app/contatos/contatos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contatos/contatos.module.ts ***!
  \*********************************************/
/*! exports provided: ContatosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosPageModule", function() { return ContatosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contatos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contatos.page */ "./src/app/contatos/contatos.page.ts");







var routes = [
    {
        path: '',
        component: _contatos_page__WEBPACK_IMPORTED_MODULE_6__["ContatosPage"]
    }
];
var ContatosPageModule = /** @class */ (function () {
    function ContatosPageModule() {
    }
    ContatosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contatos_page__WEBPACK_IMPORTED_MODULE_6__["ContatosPage"]]
        })
    ], ContatosPageModule);
    return ContatosPageModule;
}());



/***/ }),

/***/ "./src/app/contatos/contatos.page.html":
/*!*********************************************!*\
  !*** ./src/app/contatos/contatos.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{pageColor}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Contatos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-icon size=\"large\" name=\"logo-facebook\" color=\"primary\"></ion-icon>\n\t<ion-icon size=\"large\" name=\"logo-twitter\" color=\"primary\"></ion-icon>\n\t<ion-icon size=\"large\" name=\"logo-whatsapp\" color=\"success\"></ion-icon>\n\t<ion-icon size=\"large\" name=\"logo-instagram\" color=\"tertiary\"></ion-icon>\n\t<ion-icon size=\"large\" name=\"logo-googleplus\" color=\"danger\"></ion-icon>\n\t<form>\n\t\t<ion-item>\n\t\t\t<ion-label>Seu e-mail: </ion-label>\n\t\t\t<ion-input type=\"text\" placeholder=\"nome@email.com\" name=\"email\" [(ngModel)]=\"email\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label>Titulo: </ion-label>\n\t\t\t<ion-input type=\"text\" placeholder=\"Tenho uma duvida\" name=\"titulo\" [(ngModel)]=\"titulo\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-label class=\"labelTextArea\">Mensagem: </ion-label>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-textarea type=\"text\" rows=\"8\" placeholder=\"Sua mensagem...\" name=\"mensagem\" [(ngModel)]=\"mensagem\"></ion-textarea>\n\t\t</ion-item>\n\t</form>\n</ion-content>\n<div padding>\n\t<ion-button class=\"ion-float-left\" color=\"success\">Enviar</ion-button>\n\t<ion-button class=\"ion-float-right\" type=\"reset\" color=\"danger\" (click)=\"limpar()\">Deletar</ion-button>\n</div>\n"

/***/ }),

/***/ "./src/app/contatos/contatos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/contatos/contatos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  padding: 10px 10px 0 16px; }\n\nion-button {\n  width: 48%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2pldG9zL0RheVdvcmsvc3JjL2FwcC9jb250YXRvcy9jb250YXRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5QkFBeUIsRUFBQTs7QUFHMUI7RUFDQyxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YXRvcy9jb250YXRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcblx0cGFkZGluZzogMTBweCAxMHB4IDAgMTZweDtcbn1cblxuaW9uLWJ1dHRvbntcblx0d2lkdGg6IDQ4JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contatos/contatos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/contatos/contatos.page.ts ***!
  \*******************************************/
/*! exports provided: ContatosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosPage", function() { return ContatosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var ContatosPage = /** @class */ (function () {
    function ContatosPage(storage) {
        this.storage = storage;
    }
    ContatosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('color').then(function (val) {
            _this.pageColor = val;
        });
    };
    ContatosPage.prototype.limpar = function () {
        this.email = "";
        this.titulo = "";
        this.mensagem = "";
    };
    ContatosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contatos',
            template: __webpack_require__(/*! ./contatos.page.html */ "./src/app/contatos/contatos.page.html"),
            styles: [__webpack_require__(/*! ./contatos.page.scss */ "./src/app/contatos/contatos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], ContatosPage);
    return ContatosPage;
}());



/***/ })

}]);
//# sourceMappingURL=contatos-contatos-module.js.map