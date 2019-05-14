(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tornar-se-servidor-tornar-se-servidor-module"],{

/***/ "./src/app/tornar-se-servidor/tornar-se-servidor.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tornar-se-servidor/tornar-se-servidor.module.ts ***!
  \*****************************************************************/
/*! exports provided: TornarSeServidorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TornarSeServidorPageModule", function() { return TornarSeServidorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tornar_se_servidor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tornar-se-servidor.page */ "./src/app/tornar-se-servidor/tornar-se-servidor.page.ts");







var routes = [
    {
        path: '',
        component: _tornar_se_servidor_page__WEBPACK_IMPORTED_MODULE_6__["TornarSeServidorPage"]
    }
];
var TornarSeServidorPageModule = /** @class */ (function () {
    function TornarSeServidorPageModule() {
    }
    TornarSeServidorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tornar_se_servidor_page__WEBPACK_IMPORTED_MODULE_6__["TornarSeServidorPage"]]
        })
    ], TornarSeServidorPageModule);
    return TornarSeServidorPageModule;
}());



/***/ }),

/***/ "./src/app/tornar-se-servidor/tornar-se-servidor.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/tornar-se-servidor/tornar-se-servidor.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{pageColor}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Tornar-se um servidor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t  <ion-item>\n\t    <ion-label>Como me tornar um servirdor?</ion-label>\n\t  </ion-item>\n\t  <p class=\"ion-text-justify ion-padding-horizontal\">\n\t  \tPara ser um prestador de serviço é necessario estar cadastrado no aplicativo e atender aos Termos e Condições (citados logo abaixo), e oferecer propostas aos anuncios do demais clientes e usuários.\n\t  </p>\n\n\t  <ion-item>\n\t    <ion-label>Termos e Condições?</ion-label>\n\t  </ion-item>\n\t  <p class=\"ion-text-justify ion-padding-horizontal\">\n\t  \t<b>1.</b>\tO Prestador de serviço não deve ofender de modo algum o cliente que solicitou qualquer serviço em nosso aplicativo, tal ato ocasionará um banimento temporario ou permanente do usuário.<br><br>\n\n\t  \t<b>2.</b>\tO Prestador de serviço deve comprir com quais quer requisitos que o cliente tenha imposto, caso ele aceite realizar o que foi proposto no anuncio.<br><br>\n\n\t  \t<b>3.</b>\tDeve-se também tomar o maximo de cuidado possivel para não cair em golpes e em tentativas de sequestro, como prestador de serviço você terá que ser bem calteloso.\n\t  </p>\n\n\t   <ion-item lines=\"none\">\n\t  \t<ion-label position=\"stacked\">O quanto esta pagina fui util para você</ion-label>\n\t    <ion-range color=\"{{pageColor}}\" min=\"21\" max=\"71\" step=\"5\" snaps=\"true\"></ion-range>\n\t    <ion-button expand=\"block\" size=\"default\">Enviar nota</ion-button>\n\t  </ion-item>\n\t</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tornar-se-servidor/tornar-se-servidor.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/tornar-se-servidor/tornar-se-servidor.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvcm5hci1zZS1zZXJ2aWRvci90b3JuYXItc2Utc2Vydmlkb3IucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tornar-se-servidor/tornar-se-servidor.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/tornar-se-servidor/tornar-se-servidor.page.ts ***!
  \***************************************************************/
/*! exports provided: TornarSeServidorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TornarSeServidorPage", function() { return TornarSeServidorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var TornarSeServidorPage = /** @class */ (function () {
    function TornarSeServidorPage(storage) {
        this.storage = storage;
    }
    TornarSeServidorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('color').then(function (val) {
            console.log('Your color is', val);
            _this.pageColor = val;
        });
    };
    TornarSeServidorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tornar-se-servidor',
            template: __webpack_require__(/*! ./tornar-se-servidor.page.html */ "./src/app/tornar-se-servidor/tornar-se-servidor.page.html"),
            styles: [__webpack_require__(/*! ./tornar-se-servidor.page.scss */ "./src/app/tornar-se-servidor/tornar-se-servidor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], TornarSeServidorPage);
    return TornarSeServidorPage;
}());



/***/ })

}]);
//# sourceMappingURL=tornar-se-servidor-tornar-se-servidor-module.js.map