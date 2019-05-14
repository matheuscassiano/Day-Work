(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajuda-ajuda-module"],{

/***/ "./src/app/ajuda/ajuda.module.ts":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.module.ts ***!
  \***************************************/
/*! exports provided: AjudaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaPageModule", function() { return AjudaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajuda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajuda.page */ "./src/app/ajuda/ajuda.page.ts");







var routes = [
    {
        path: '',
        component: _ajuda_page__WEBPACK_IMPORTED_MODULE_6__["AjudaPage"]
    }
];
var AjudaPageModule = /** @class */ (function () {
    function AjudaPageModule() {
    }
    AjudaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ajuda_page__WEBPACK_IMPORTED_MODULE_6__["AjudaPage"]]
        })
    ], AjudaPageModule);
    return AjudaPageModule;
}());



/***/ }),

/***/ "./src/app/ajuda/ajuda.page.html":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{pageColor}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Ajuda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<h3 padding-start>Bem Vindo a pagina de Ajuda</h3>\n\t<ion-card-subtitle padding-start>Como podemos ajuda-lo(a)</ion-card-subtitle>\n\n\t<ion-list>\n\t  <ion-item>\n\t    <ion-label>Como publicar um anúncio?</ion-label>\n\t  </ion-item>\n\t  <p class=\"ion-text-justify ion-padding-horizontal\">\n\t  \tPara publicar algum anúncio em nossa plataforma, você deve ir até a página \"Início\", e clicar no botão \"CLIENTE\". Ao entrar na página do cliente você deve preencher todos os campos corretamente, tenha certeza de que completou todos os campos com informações reais e validas. Ao finalizar esta parte voê será redirecionado para putra pagina com todos os seus anúncios publicados, ela tambem pode ser acessada pelo menu.\n\t  </p>\n\n\t  <ion-item>\n\t    <ion-label>Como me candidatar a uma vaga?</ion-label>\n\t  </ion-item>\n\t  <p class=\"ion-text-justify ion-padding-horizontal\">\n\t  \tPara se candidatar á algum anúncio em nossa plataforma, você deve ir até a página \"Início\", e clicar no botão \"PRESTADOR DE SERVIÇO\". Após isso você verá os ultimos anúncios publicados, todos com um botão com escrito \"CANDIDATAR\", ao clicar nele uma notificação será envida para quem publicou o anúncio e ele decidirá se irá aceitar ou não a sua oferta. Caso sejá aceita você podera entrar em contato com ele por nossa pagina de chat e decidir todas os detalhes restantes.\n\t  </p>\n\n\t  <ion-item>\n\t    <ion-label>Como saberei se minha oferta foi aceita?</ion-label>\n\t  </ion-item>\n\t  <p class=\"ion-text-justify ion-padding-horizontal\">\n\t  \tVocê receberá uma notificação em seu celular dizendo quem aprovou sua oferta e em qual anúncio.\n\t  </p>\n\n\t  <ion-item lines=\"none\">\n\t  \t<ion-label position=\"stacked\">O quanto esta pagina fui util para você</ion-label>\n\t    <ion-range color=\"danger\" min=\"21\" max=\"71\" step=\"5\" snaps=\"true\"></ion-range>\n\t    <ion-button expand=\"block\" size=\"default\">Enviar nota</ion-button>\n\t  </ion-item>\n\t</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ajuda/ajuda.page.scss":
/*!***************************************!*\
  !*** ./src/app/ajuda/ajuda.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FqdWRhL2FqdWRhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ajuda/ajuda.page.ts":
/*!*************************************!*\
  !*** ./src/app/ajuda/ajuda.page.ts ***!
  \*************************************/
/*! exports provided: AjudaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaPage", function() { return AjudaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var AjudaPage = /** @class */ (function () {
    function AjudaPage(storage) {
        this.storage = storage;
    }
    AjudaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('color').then(function (val) {
            console.log('Your color is', val);
            _this.pageColor = val;
        });
    };
    AjudaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ajuda',
            template: __webpack_require__(/*! ./ajuda.page.html */ "./src/app/ajuda/ajuda.page.html"),
            styles: [__webpack_require__(/*! ./ajuda.page.scss */ "./src/app/ajuda/ajuda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], AjudaPage);
    return AjudaPage;
}());



/***/ })

}]);
//# sourceMappingURL=ajuda-ajuda-module.js.map