(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicos-servicos-module"],{

/***/ "./src/app/servicos/servicos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/servicos/servicos.module.ts ***!
  \*********************************************/
/*! exports provided: ServicosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosPageModule", function() { return ServicosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicos.page */ "./src/app/servicos/servicos.page.ts");







var routes = [
    {
        path: '',
        component: _servicos_page__WEBPACK_IMPORTED_MODULE_6__["ServicosPage"]
    }
];
var ServicosPageModule = /** @class */ (function () {
    function ServicosPageModule() {
    }
    ServicosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_servicos_page__WEBPACK_IMPORTED_MODULE_6__["ServicosPage"]]
        })
    ], ServicosPageModule);
    return ServicosPageModule;
}());



/***/ }),

/***/ "./src/app/servicos/servicos.page.html":
/*!*********************************************!*\
  !*** ./src/app/servicos/servicos.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{pageColor}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Prestador de Serviços</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-item >\n\t\t<ion-label>Selecione uma foto:</ion-label>\n\t  <div class=\"fileUpload ion-margin-bottom ion-margin-top ion-margin-start\">\n\t    <span button>IMAGEM</span>\n\t    <input type=\"file\" class=\"upload\" />\n\t\t</div>\n\t</ion-item>\n\n  <ion-item class=\"ion-margin-top\">\n    <ion-label>Nome:</ion-label>\n    <div class=\"input\">\n    <ion-input type=\"text\" placeholder=\"Josh Gomes\" value=\"Josh Gomes\"></ion-input>\n  </div>\n  </ion-item>\n\n  <ion-item class=\"ion-margin-top\">\n    <ion-label>Sua especialidade:</ion-label>\n    <ion-select placeholder=\"Selecione\">\n      <ion-select-option>Professor</ion-select-option>\n      <ion-select-option>Programador</ion-select-option>\n      <ion-select-option>Administrador</ion-select-option>\n      <ion-select-option>Engenheiro</ion-select-option>\n      <ion-select-option>Outro...</ion-select-option>\n    </ion-select>\n  </ion-item>\n  \n  <ion-item class=\"ion-margin-top\">\n    <ion-label>Telefone:</ion-label>\n  <div class=\"input\">\n    <ion-input type=\"tel\" placeholder=\"82988789635\" value=\"82988789635\"></ion-input>\n    </div>\n  </ion-item>\n  \n <ion-item class=\"ion-margin-top\">\n    <ion-label>Possui antecedente criminal?</ion-label>\n    <ion-select placeholder=\"Selecione\">\n      <ion-select-option>Sim</ion-select-option>\n      <ion-select-option>Não</ion-select-option>\n   \t</ion-select>\n </ion-item>\n\t<ion-item>\n\t\t<ion-textarea type=\"text\" rows=\"8\" placeholder=\"Sobre antecedentes criminais...\" name=\"mensagem\" [(ngModel)]=\"mensagem\"></ion-textarea>\n\t</ion-item>\n\n\t<ion-button color=\"primary\" class=\"ion-margin-bottom\" expand=\"block\" padding>Enviar</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/servicos/servicos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/servicos/servicos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  width: 100%; }\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  border: solid 1px black;\n  border-radius: 5px;\n  width: 30%;\n  padding: 10px;\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  background-color: black; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2pldG9zL0RheVdvcmsvc3JjL2FwcC9zZXJ2aWNvcy9zZXJ2aWNvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0VBQ1Ysd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNvcy9zZXJ2aWNvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5maWxlVXBsb2FkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uZmlsZVVwbG9hZCBpbnB1dC51cGxvYWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/servicos/servicos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/servicos/servicos.page.ts ***!
  \*******************************************/
/*! exports provided: ServicosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosPage", function() { return ServicosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var ServicosPage = /** @class */ (function () {
    function ServicosPage(navCtrl, localNotifications, storage) {
        this.navCtrl = navCtrl;
        this.localNotifications = localNotifications;
        this.storage = storage;
    }
    ServicosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('color').then(function (val) {
            console.log('Your color is', val);
            _this.pageColor = val;
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////
    ServicosPage.prototype.notificacao = function () {
        this.localNotifications.schedule({
            id: 2,
            title: 'Parabéns!!!',
            text: 'O cliente aceitou sua proposta',
        });
    };
    /////////////////////////////////////////////////////////////////////////////////////
    ServicosPage.prototype.goChat = function () {
        this.navCtrl.navigateForward('/chat-prestador');
        this.notificacao();
    };
    ServicosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-servicos',
            template: __webpack_require__(/*! ./servicos.page.html */ "./src/app/servicos/servicos.page.html"),
            styles: [__webpack_require__(/*! ./servicos.page.scss */ "./src/app/servicos/servicos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], ServicosPage);
    return ServicosPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicos-servicos-module.js.map