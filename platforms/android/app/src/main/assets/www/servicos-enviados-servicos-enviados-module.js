(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicos-enviados-servicos-enviados-module"],{

/***/ "./src/app/servicos-enviados/servicos-enviados.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/servicos-enviados/servicos-enviados.module.ts ***!
  \***************************************************************/
/*! exports provided: ServicosEnviadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosEnviadosPageModule", function() { return ServicosEnviadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicos_enviados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicos-enviados.page */ "./src/app/servicos-enviados/servicos-enviados.page.ts");







var routes = [
    {
        path: '',
        component: _servicos_enviados_page__WEBPACK_IMPORTED_MODULE_6__["ServicosEnviadosPage"]
    }
];
var ServicosEnviadosPageModule = /** @class */ (function () {
    function ServicosEnviadosPageModule() {
    }
    ServicosEnviadosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_servicos_enviados_page__WEBPACK_IMPORTED_MODULE_6__["ServicosEnviadosPage"]]
        })
    ], ServicosEnviadosPageModule);
    return ServicosEnviadosPageModule;
}());



/***/ }),

/***/ "./src/app/servicos-enviados/servicos-enviados.page.html":
/*!***************************************************************!*\
  !*** ./src/app/servicos-enviados/servicos-enviados.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{pageColor}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Serviços Enviados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t\t<ion-card (click)=\"goPropostas()\">\n\t\t\t<ion-card-header>\n\t\t\t\t<ion-card-subtitle>\n\t\t\t\t\t<span>R$150,00</span>\n\t\t\t\t\t<span class=\"ion-float-right\">Cartão de Credito</span>\n\t\t\t\t</ion-card-subtitle>\n\t\t    \t<ion-card-title>Professor de Matemática</ion-card-title>\n\t\t  \t</ion-card-header>\n\n\t\t  <ion-card-content class=\"ion-text-justify\">\n\t\t    Por conta de alguns acontecimentos eu estou precisando de um professor de matemática. Ofereço um pagamento mensal de R$150,00 durante um ano.\n\t\t    <ion-item class=\"ion-float-right\" lines=\"none\">\n\t\t    \t<ion-button color=\"dark\" fill=\"clear\">\n\t\t    \t\t<ion-icon slot=\"icon-only\" name=\"ios-more\"></ion-icon>\n\t\t    \t</ion-button>\n\t\t    </ion-item>\n\t\t  </ion-card-content>\n\t\t</ion-card>\n\n\t<ion-router-outlet main></ion-router-outlet>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/servicos-enviados/servicos-enviados.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/servicos-enviados/servicos-enviados.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY29zLWVudmlhZG9zL3NlcnZpY29zLWVudmlhZG9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/servicos-enviados/servicos-enviados.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/servicos-enviados/servicos-enviados.page.ts ***!
  \*************************************************************/
/*! exports provided: ServicosEnviadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosEnviadosPage", function() { return ServicosEnviadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var ServicosEnviadosPage = /** @class */ (function () {
    function ServicosEnviadosPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    ServicosEnviadosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('color').then(function (val) {
            console.log('Your color is', val);
            _this.pageColor = val;
        });
    };
    ServicosEnviadosPage.prototype.goPropostas = function () {
        this.navCtrl.navigateForward('/propostas');
    };
    ServicosEnviadosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-servicos-enviados',
            template: __webpack_require__(/*! ./servicos-enviados.page.html */ "./src/app/servicos-enviados/servicos-enviados.page.html"),
            styles: [__webpack_require__(/*! ./servicos-enviados.page.scss */ "./src/app/servicos-enviados/servicos-enviados.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], ServicosEnviadosPage);
    return ServicosEnviadosPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicos-enviados-servicos-enviados-module.js.map