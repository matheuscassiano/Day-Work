(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["propostas-propostas-module"],{

/***/ "./src/app/propostas/propostas.module.ts":
/*!***********************************************!*\
  !*** ./src/app/propostas/propostas.module.ts ***!
  \***********************************************/
/*! exports provided: PropostasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropostasPageModule", function() { return PropostasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _propostas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./propostas.page */ "./src/app/propostas/propostas.page.ts");







var routes = [
    {
        path: '',
        component: _propostas_page__WEBPACK_IMPORTED_MODULE_6__["PropostasPage"]
    }
];
var PropostasPageModule = /** @class */ (function () {
    function PropostasPageModule() {
    }
    PropostasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_propostas_page__WEBPACK_IMPORTED_MODULE_6__["PropostasPage"]]
        })
    ], PropostasPageModule);
    return PropostasPageModule;
}());



/***/ }),

/***/ "./src/app/propostas/propostas.page.html":
/*!***********************************************!*\
  !*** ./src/app/propostas/propostas.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{pageColor}}\">\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-menu-button></ion-menu-button>\n  \t</ion-buttons>\n    <ion-title>Propostas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n\t\t<ion-card-header>\n\t\t\t<ion-card-subtitle>\n\t\t\t\tUFAL\n\t\t\t</ion-card-subtitle>\n\t\t\t<ion-card-title>\n\t\t\t\tAnna Santos\n\t\t\t</ion-card-title>\n\t\t</ion-card-header>\n\n\t\t<ion-card-content class=\"ion-text-justify\">\n\t\t\tAnna Santos, faculdade de matemática (UFAL).\n\t\t\t<div>\n\t\t\t\t<ion-button color=\"success\" class=\"ion-float-left\" (click)=\"goChat()\">\n\t\t\t\t\tConfirmar\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button color=\"danger\" class=\"ion-float-right\">\n\t\t\t\t\tRejeitar\n\t\t\t\t</ion-button>\n\t\t\t</div>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/propostas/propostas.page.scss":
/*!***********************************************!*\
  !*** ./src/app/propostas/propostas.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  width: 48.5%;\n  bottom: 0;\n  margin-top: 16px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXMvRG9jdW1lbnRzL1Byb2pldG9zL0RheVdvcmsvc3JjL2FwcC9wcm9wb3N0YXMvcHJvcG9zdGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvcG9zdGFzL3Byb3Bvc3Rhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xuXHR3aWR0aDogNDguNSU7XG5cdGJvdHRvbTogMDtcblx0bWFyZ2luLXRvcDogMTZweDtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcdFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/propostas/propostas.page.ts":
/*!*********************************************!*\
  !*** ./src/app/propostas/propostas.page.ts ***!
  \*********************************************/
/*! exports provided: PropostasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropostasPage", function() { return PropostasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var PropostasPage = /** @class */ (function () {
    function PropostasPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    PropostasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('color').then(function (val) {
            console.log('Your color is', val);
            _this.pageColor = val;
        });
    };
    PropostasPage.prototype.goChat = function () {
        this.navCtrl.navigateForward('/chat');
    };
    PropostasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-propostas',
            template: __webpack_require__(/*! ./propostas.page.html */ "./src/app/propostas/propostas.page.html"),
            styles: [__webpack_require__(/*! ./propostas.page.scss */ "./src/app/propostas/propostas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], PropostasPage);
    return PropostasPage;
}());



/***/ })

}]);
//# sourceMappingURL=propostas-propostas-module.js.map