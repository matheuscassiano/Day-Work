(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-prestador-chat-prestador-module"],{

/***/ "./src/app/chat-prestador/chat-prestador.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/chat-prestador/chat-prestador.module.ts ***!
  \*********************************************************/
/*! exports provided: ChatPrestadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPrestadorPageModule", function() { return ChatPrestadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_prestador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-prestador.page */ "./src/app/chat-prestador/chat-prestador.page.ts");







var routes = [
    {
        path: '',
        component: _chat_prestador_page__WEBPACK_IMPORTED_MODULE_6__["ChatPrestadorPage"]
    }
];
var ChatPrestadorPageModule = /** @class */ (function () {
    function ChatPrestadorPageModule() {
    }
    ChatPrestadorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_prestador_page__WEBPACK_IMPORTED_MODULE_6__["ChatPrestadorPage"]]
        })
    ], ChatPrestadorPageModule);
    return ChatPrestadorPageModule;
}());



/***/ }),

/***/ "./src/app/chat-prestador/chat-prestador.page.html":
/*!*********************************************************!*\
  !*** ./src/app/chat-prestador/chat-prestador.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{pageColor}}\">\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title class=\"ion-text-center\">ANNA SANTOS</ion-title>\n  \t\t<ion-button slot=\"end\" fill=\"clear\" color=\"light\" shape=\"round\" href=\"tel:+5582987678954\">\n  \t\t\t<ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n  \t\t</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t\n\t<ion-item lines=\"none\" class=\"ion-text-right\">\n\t  <ion-avatar slot=\"end\">\n\t    <img src=\"/assets/img/Usuario.jpg\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Oi Anna, gostaria de me candidatar<br>para professor</h3>\n\t\t  <p>14:39</p>\n\t\t</ion-label>\n\t</ion-item>\n\n\t<ion-item lines=\"none\">\n\t  <ion-avatar slot=\"start\">\n\t    <img src=\"/assets/img/Anna.png\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Oi, você já teve alguma experiencia<br>como professoar particular?</h3>\n\t  \t<p>16:41</p>\n\t\t</ion-label>\n\t</ion-item>\n\n\t<ion-item lines=\"none\" class=\"ion-text-right\">\n\t  <ion-avatar slot=\"end\">\n\t    <img src=\"/assets/img/Usuario.jpg\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Sim eu tenho</h3>\n\t\t  <p>16:42</p>\n\t\t</ion-label>\n\t</ion-item>\n\n\t<ion-item lines=\"none\">\n\t  <ion-avatar slot=\"start\">\n\t    <img src=\"/assets/img/Anna.png\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Qual seria o horario mais flexível<br>para você?</h3>\n\t\t  <p>16:47</p>\n\t\t</ion-label>\n\t</ion-item>\n\n\t<ion-item lines=\"none\" class=\"ion-text-right\">\n\t  <ion-avatar slot=\"end\">\n\t    <img src=\"/assets/img/Usuario.jpg\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Por volta das 16 horas</h3>\n\t\t  <p>16:49</p>\n\t\t</ion-label>\n\t</ion-item>\n\n<ion-item lines=\"none\">\n\t  <ion-avatar slot=\"start\">\n\t    <img src=\"/assets/img/Anna.png\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Tudo certo então</h3>\n\t\t  <p>16:50</p>\n\t\t</ion-label>\n\t</ion-item>\n\n</ion-content>\n<ion-footer>\n\t<ion-input></ion-input>\n\t<ion-button fill=\"clear\">\n\t\t<ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n\t</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/chat-prestador/chat-prestador.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/chat-prestador/chat-prestador.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin-top: 10px; }\n\nion-input {\n  float: left;\n  width: 78%; }\n\nion-button {\n  float: right;\n  width: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2pldG9zL0RheVdvcmsvc3JjL2FwcC9jaGF0LXByZXN0YWRvci9jaGF0LXByZXN0YWRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdYO0VBQ0MsWUFBWTtFQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQtcHJlc3RhZG9yL2NoYXQtcHJlc3RhZG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24taW5wdXR7XG5cdGZsb2F0OiBsZWZ0O1xuXHR3aWR0aDogNzglO1xufVxuXG5pb24tYnV0dG9ue1xuXHRmbG9hdDogcmlnaHQ7XG5cdHdpZHRoOiAyMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/chat-prestador/chat-prestador.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/chat-prestador/chat-prestador.page.ts ***!
  \*******************************************************/
/*! exports provided: ChatPrestadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPrestadorPage", function() { return ChatPrestadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var ChatPrestadorPage = /** @class */ (function () {
    function ChatPrestadorPage(navCtrl, alertController, storage) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.storage = storage;
    }
    ChatPrestadorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentAlert();
        this.storage.get('color').then(function (val) {
            console.log('Your color is', val);
            _this.pageColor = val;
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////
    ChatPrestadorPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alertDanger',
                            header: 'Parabéns',
                            subHeader: 'Solicitação concluida',
                            message: 'Sua solicitação para se candidatar a vaga do anuncio foi aprovada.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/, alert.present()];
                }
            });
        });
    };
    ChatPrestadorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-chat-prestador',
            template: __webpack_require__(/*! ./chat-prestador.page.html */ "./src/app/chat-prestador/chat-prestador.page.html"),
            styles: [__webpack_require__(/*! ./chat-prestador.page.scss */ "./src/app/chat-prestador/chat-prestador.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], ChatPrestadorPage);
    return ChatPrestadorPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-prestador-chat-prestador-module.js.map