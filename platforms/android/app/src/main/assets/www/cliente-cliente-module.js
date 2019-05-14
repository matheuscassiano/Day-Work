(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cliente-cliente-module"],{

/***/ "./src/app/cliente/cliente.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cliente/cliente.module.ts ***!
  \*******************************************/
/*! exports provided: ClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePageModule", function() { return ClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente.page */ "./src/app/cliente/cliente.page.ts");







var routes = [
    {
        path: '',
        component: _cliente_page__WEBPACK_IMPORTED_MODULE_6__["ClientePage"]
    }
];
var ClientePageModule = /** @class */ (function () {
    function ClientePageModule() {
    }
    ClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ClientePage"]]
        })
    ], ClientePageModule);
    return ClientePageModule;
}());



/***/ }),

/***/ "./src/app/cliente/cliente.page.html":
/*!*******************************************!*\
  !*** ./src/app/cliente/cliente.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{pageColor}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cliente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<h3 class=\"ion-padding-start\">O que você deseja?</h3>\n\t<ion-item>\n\t\t<ion-label>Qual serviço:</ion-label>\n\t\t<ion-input [(ngModel)]=\"servico\" name=\"servico\" type=\"text\"></ion-input>\n\t</ion-item>\n\n\t<ion-item>\n\t\t<ion-label>Quanto deseja pagar:</ion-label>\n\t\t<ion-input [(ngModel)]=\"valor\" name=\"valor\" type=\"number\"></ion-input>\n\t</ion-item>\n\n\t<ion-item>\n\t\t<ion-label>Forma de pagamento:</ion-label>\n\t\t<ion-select [(ngModel)]=\"pagamento\" name=\"pagamento\" placeholder=\"Selecione\">\n\t\t    <ion-select-option>Dinheiro</ion-select-option>\n\t\t    <ion-select-option>Cartão de Credito</ion-select-option>\n\t\t    <ion-select-option>Transferencia Bancaria</ion-select-option>\n\t    </ion-select>\n\t</ion-item>\n\n\t<ion-item lines=\"none\">\n\t\t<ion-label>Informações adicionais:</ion-label>\n\t</ion-item>\n\t<ion-item>\n\t\t<ion-textarea rows=\"8\"></ion-textarea>\n\t</ion-item>\n\n\t<div>\n\t\t<ion-item lines=\"none\" padding-top>\n\t\t\t<ion-button (click)=\"goServicos(servico, valor, pagamento)\" type=\"submit\" size=\"default\" color=\"success\">Enviar</ion-button>\n\t\t</ion-item>\n\t</div>\n\n\t<ion-router-outlet main></ion-router-outlet>\t\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cliente/cliente.page.scss":
/*!*******************************************!*\
  !*** ./src/app/cliente/cliente.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGUvY2xpZW50ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cliente/cliente.page.ts":
/*!*****************************************!*\
  !*** ./src/app/cliente/cliente.page.ts ***!
  \*****************************************/
/*! exports provided: ClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientePage", function() { return ClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var ClientePage = /** @class */ (function () {
    function ClientePage(navCtrl, alertController, localNotifications, storage) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.localNotifications = localNotifications;
        this.storage = storage;
    }
    ClientePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('color').then(function (val) {
            console.log('Your color is', val);
            _this.pageColor = val;
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////
    ClientePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alertDanger',
                            header: 'Atenção',
                            subHeader: 'Campo em branco',
                            message: 'Por favor, preencha todos os campos corretamente.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/, alert.present()];
                }
            });
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////
    ClientePage.prototype.notificacao = function () {
        this.localNotifications.schedule({
            id: 1,
            title: 'Surpresa!!!',
            text: 'Alguem está interessado em seu anuncio',
        });
    };
    ClientePage.prototype.goServicos = function (servico, valor, pagamento) {
        if (servico == null || valor == null || pagamento == null) {
            this.presentAlert();
        }
        else {
            this.navCtrl.navigateForward('/servicos-enviados');
            this.notificacao();
        }
    };
    ClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cliente',
            template: __webpack_require__(/*! ./cliente.page.html */ "./src/app/cliente/cliente.page.html"),
            styles: [__webpack_require__(/*! ./cliente.page.scss */ "./src/app/cliente/cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], ClientePage);
    return ClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=cliente-cliente-module.js.map