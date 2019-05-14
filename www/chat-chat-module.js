(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");







var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.page.html":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{pageColor}}\">\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title class=\"ion-text-center\">ANNA SANTOS</ion-title>\n  \t\t<ion-button slot=\"end\" fill=\"clear\" color=\"light\" shape=\"round\" href=\"tel:+5582987678954\">\n  \t\t\t<ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n  \t\t</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t\n\t<ion-item lines=\"none\">\n\t  <ion-avatar slot=\"start\">\n\t    <img src=\"/assets/img/Anna.png\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Oi, sou Anna e gostaria de me candidatar<br>para professoara particular?</h3>\n\t\t  <p>12:39</p>\n\t\t</ion-label>\n\t</ion-item>\n\n\t<ion-item lines=\"none\" class=\"ion-text-right\">\n\t  <ion-avatar slot=\"end\">\n\t    <img src=\"/assets/img/Usuario.jpg\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Oi, você já teve alguma experiencia<br>como professoara particular?</h3>\n\t  \t<p>12:53</p>\n\t\t</ion-label>\n\t</ion-item>\n\n\t<ion-item lines=\"none\">\n\t  <ion-avatar slot=\"start\">\n\t    <img src=\"/assets/img/Anna.png\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Sim eu tenho</h3>\n\t\t  <p>12:54</p>\n\t\t</ion-label>\n\t</ion-item>\n\n\t<ion-item lines=\"none\" class=\"ion-text-right\">\n\t  <ion-avatar slot=\"end\">\n\t    <img src=\"/assets/img/Usuario.jpg\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Qual seria o horario mais flexível<br>para você?</h3>\n\t\t  <p>12:57</p>\n\t\t</ion-label>\n\t</ion-item>\n\n\t<ion-item lines=\"none\">\n\t  <ion-avatar slot=\"start\">\n\t    <img src=\"/assets/img/Anna.png\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Por volta das 16 horas</h3>\n\t\t  <p>12:57</p>\n\t\t</ion-label>\n\t</ion-item>\n\n<ion-item lines=\"none\" class=\"ion-text-right\">\n\t  <ion-avatar slot=\"end\">\n\t    <img src=\"/assets/img/Usuario.jpg\">\n\t  </ion-avatar>\n\t  <ion-label>\n\t  \t<h3>Tudo certo então</h3>\n\t\t  <p>12:59</p>\n\t\t</ion-label>\n\t</ion-item>\n\n</ion-content>\n<ion-footer>\n\t<ion-input></ion-input>\n\t<ion-button fill=\"clear\">\n\t\t<ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n\t</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin-top: 10px; }\n\nion-input {\n  float: left;\n  width: 78%; }\n\nion-button {\n  float: right;\n  width: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2pldG9zL0RheVdvcmsvc3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWDtFQUNDLFlBQVk7RUFDWixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG5cdG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1pbnB1dHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHdpZHRoOiA3OCU7XG59XG5cbmlvbi1idXR0b257XG5cdGZsb2F0OiByaWdodDtcblx0d2lkdGg6IDIwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var ChatPage = /** @class */ (function () {
    function ChatPage(storage) {
        this.storage = storage;
    }
    ChatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('color').then(function (val) {
            console.log('Your color is', val);
            _this.pageColor = val;
        });
    };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.page.html */ "./src/app/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map