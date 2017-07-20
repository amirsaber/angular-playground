webpackJsonp([0],{

/***/ "../../../../../src/form/components/form1-dialog/form1-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form *ngIf=\"!busy && !loadingData\" [formGroup]=\"fooFormGroup\">\n    <div formArrayName=\"FooFormArray\">\n      <div *ngFor=\"let fooForm of fooArray.controls; let i=index\" [formGroupName]=\"i\">\n        <input type=\"hidden\" formControlName=\"id\" />\n        <md-input-container>\n          <input mdInput formControlName=\"firstName\" placeholder=\"First Name\" [errorStateMatcher]=\"formErrorStateMatcher\" />\n          <md-error>{{getError('firstName', fooForm)}}</md-error>\n        </md-input-container>\n        <md-input-container>\n          <input mdInput formControlName=\"lastName\" placeholder=\"Last Name\" [errorStateMatcher]=\"formErrorStateMatcher\" />\n          <md-error>{{getError('lastName', fooForm)}}</md-error>\n        </md-input-container>\n        <md-input-container>\n          <input mdInput formControlName=\"email\" placeholder=\"Email Address\" [errorStateMatcher]=\"formErrorStateMatcher\" />\n          <md-error>{{getError('email', fooForm)}}</md-error>\n        </md-input-container>\n        <button md-icon-button (click)=\"remove(i)\"><md-icon>close</md-icon></button>\n      </div>\n    </div>\n    <button md-raised-button (click)=\"add()\">\n      <md-icon>add</md-icon>\n    </button>\n    <button md-raised-button color=\"accent\" (click)=\"close()\">\n      <md-icon>close</md-icon>\n    </button>\n    <button md-raised-button color=\"primary\" (click)=\"submit()\" [disabled]=\"isFormComplete()\">\n      <md-icon>done</md-icon>\n    </button>\n  </form>\n  <md-spinner *ngIf=\"busy || loadingData\"></md-spinner>\n</div>\n"

/***/ }),

/***/ "../../../../../src/form/components/form1-dialog/form1-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/form/components/form1-dialog/form1-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_form_form_service__ = __webpack_require__("../../../../../src/form/services/form/form.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form1DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Form1DialogComponent = (function () {
    function Form1DialogComponent(formBuilder, formService, mdDialogRef) {
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.mdDialogRef = mdDialogRef;
        this.errors = {
            firstName: {
                required: 'First Name is required',
                minlength: 'First Name can not be one character'
            },
            lastName: {
                required: 'Last Name is required',
                minlength: 'Last Name minimum length is 3'
            },
            email: {
                required: 'Last Name is required',
                email: 'Should be a valid email'
            }
        };
    }
    Form1DialogComponent.prototype.ngOnInit = function () {
        this.init();
        this.buildFooForm();
        this.fetchData();
    };
    Form1DialogComponent.prototype.add = function (data) {
        this.fooArray.push(this.buildFormArrayElement(data));
    };
    Form1DialogComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allPromises, _i, _a, data, promise, _b, _c, data, promise, _d, _e, data, promise;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!!this.busy) return [3 /*break*/, 2];
                        this.busy = true;
                        this.prepareChanges();
                        allPromises = [];
                        for (_i = 0, _a = this.markedForCreate; _i < _a.length; _i++) {
                            data = _a[_i];
                            promise = this.formService.createData(data);
                            allPromises.push(promise);
                        }
                        for (_b = 0, _c = this.markedForDelete; _b < _c.length; _b++) {
                            data = _c[_b];
                            promise = this.formService.deleteData(data);
                            allPromises.push(promise);
                        }
                        for (_d = 0, _e = this.markedForUpdate; _d < _e.length; _d++) {
                            data = _e[_d];
                            promise = this.formService.updateData(data);
                            allPromises.push(promise);
                        }
                        return [4 /*yield*/, Promise.all(allPromises)];
                    case 1:
                        _f.sent();
                        this.close();
                        _f.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Form1DialogComponent.prototype.remove = function (i) {
        this.addToDelete(i);
        this.fooArray.removeAt(i);
    };
    Form1DialogComponent.prototype.isFormComplete = function () {
        var disabled = false;
        for (var i = 0; i < this.fooArray.controls.length; i++) {
            var formGroup = this.fooArray.at(i);
            if (formGroup.invalid && formGroup.dirty) {
                disabled = true;
                break;
            }
        }
        return disabled;
    };
    Form1DialogComponent.prototype.close = function () {
        this.mdDialogRef.close();
    };
    Form1DialogComponent.prototype.formErrorStateMatcher = function (control, form) {
        return control.invalid && control.dirty && control.touched;
    };
    Form1DialogComponent.prototype.getError = function (controlName, formGroup) {
        var _this = this;
        var errors = formGroup.controls[controlName].errors;
        var error = '';
        if (errors) {
            Object.keys(errors).forEach(function (value) {
                error = _this.errors[controlName][value];
            });
        }
        return error;
    };
    Form1DialogComponent.prototype.prepareChanges = function () {
        for (var i = 0; i < this.fooArray.controls.length; i++) {
            var formGroup = this.fooArray.at(i);
            var data = formGroup.value;
            if (formGroup.valid && formGroup.dirty) {
                if (data.id) {
                    this.addToUpdate(data);
                }
                else {
                    this.addToCreate(data);
                }
            }
        }
    };
    Form1DialogComponent.prototype.init = function () {
        this.loadingData = true;
        this.currentData = [];
        this.markedForDelete = [];
        this.markedForCreate = [];
        this.markedForUpdate = [];
    };
    Form1DialogComponent.prototype.addToUpdate = function (data) {
        this.markedForUpdate.push(data);
    };
    Form1DialogComponent.prototype.addToCreate = function (data) {
        this.markedForCreate.push(data);
    };
    Form1DialogComponent.prototype.addToDelete = function (i) {
        var formGroup = this.fooArray.at(i);
        var data = {
            id: formGroup.value.id,
            firstName: formGroup.value.firstName,
            lastName: formGroup.value.lastName,
            email: formGroup.value.email
        };
        if (data.id) {
            this.markedForDelete.push(data);
        }
    };
    Form1DialogComponent.prototype.buildFooForm = function () {
        this.fooArray = this.formBuilder.array([]);
        this.fooFormGroup = this.formBuilder.group({
            FooFormArray: this.fooArray
        });
    };
    Form1DialogComponent.prototype.buildFormArrayElement = function (data) {
        return this.formBuilder.group({
            id: [data ? data.id : ''],
            firstName: [data ? data.firstName : '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2)]],
            lastName: [data ? data.lastName : '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)]],
            email: [data ? data.email : '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]]
        });
    };
    Form1DialogComponent.prototype.fetchData = function () {
        var _this = this;
        this.formService.FormData.subscribe(function (data) {
            _this.currentData = data;
            if (_this.loadingData) {
                _this.addData();
            }
            _this.loadingData = false;
        });
    };
    Form1DialogComponent.prototype.addData = function () {
        for (var _i = 0, _a = this.currentData; _i < _a.length; _i++) {
            var data = _a[_i];
            this.add(data);
        }
    };
    Form1DialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/form/components/form1-dialog/form1-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/form/components/form1-dialog/form1-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_form_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_form_form_service__["a" /* FormService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _c || Object])
    ], Form1DialogComponent);
    return Form1DialogComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=form1-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button md-raised-button (click)=\"openForm1()\">Open Form1</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_form1_dialog_form1_dialog_component__ = __webpack_require__("../../../../../src/form/components/form1-dialog/form1-dialog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = (function () {
    function FormComponent(mdDialog) {
        this.mdDialog = mdDialog;
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.openForm1 = function () {
        this.mdDialog.open(__WEBPACK_IMPORTED_MODULE_2__components_form1_dialog_form1_dialog_component__["a" /* Form1DialogComponent */]);
    };
    FormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _a || Object])
    ], FormComponent);
    return FormComponent;
    var _a;
}());

//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/form/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_form_routes_module__ = __webpack_require__("../../../../../src/form/modules/form-routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_custom_material_module__ = __webpack_require__("../../../../../src/form/modules/custom-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_form_form_service__ = __webpack_require__("../../../../../src/form/services/form/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_component__ = __webpack_require__("../../../../../src/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_form1_dialog_form1_dialog_component__ = __webpack_require__("../../../../../src/form/components/form1-dialog/form1-dialog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FormModule = (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__modules_form_routes_module__["a" /* FormRoutesModule */],
                __WEBPACK_IMPORTED_MODULE_4__modules_custom_material_module__["a" /* CustomMaterialModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_form1_dialog_form1_dialog_component__["a" /* Form1DialogComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__components_form1_dialog_form1_dialog_component__["a" /* Form1DialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_form_form_service__["a" /* FormService */]
            ],
            exports: []
        })
    ], FormModule);
    return FormModule;
}());

//# sourceMappingURL=form.module.js.map

/***/ }),

/***/ "../../../../../src/form/modules/custom-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomMaterialModule = (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogModule */]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());

//# sourceMappingURL=custom-material.module.js.map

/***/ }),

/***/ "../../../../../src/form/modules/form-routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_component__ = __webpack_require__("../../../../../src/form/form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__form_component__["a" /* FormComponent */]
    }];
var FormRoutesModule = (function () {
    function FormRoutesModule() {
    }
    FormRoutesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], FormRoutesModule);
    return FormRoutesModule;
}());

//# sourceMappingURL=form-routes.module.js.map

/***/ }),

/***/ "../../../../../src/form/services/form/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var FormService = (function () {
    function FormService() {
        this.nextId = 5;
        this.init();
    }
    Object.defineProperty(FormService.prototype, "FormData", {
        get: function () {
            return this.formDataObservable.delay(500);
        },
        enumerable: true,
        configurable: true
    });
    FormService.prototype.createData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                data.id = this.nextId;
                this.nextId++;
                this.data.push(data);
                this.formDataObservable.next(this.data);
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(data).delay(1000).toPromise()];
            });
        });
    };
    FormService.prototype.deleteData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var index;
            return __generator(this, function (_a) {
                index = this.findDataIndex(data);
                if (index > -1) {
                    this.data.splice(index, 1);
                    this.formDataObservable.next(this.data);
                }
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(data).delay(100).toPromise()];
            });
        });
    };
    FormService.prototype.updateData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var index;
            return __generator(this, function (_a) {
                index = this.findDataIndex(data);
                if (index > -1) {
                    this.data[index] = data;
                    this.formDataObservable.next(this.data);
                }
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(data).delay(500).toPromise()];
            });
        });
    };
    FormService.prototype.findDataIndex = function (data) {
        return this.data.findIndex(function (value) {
            return data.id === value.id;
        });
    };
    FormService.prototype.init = function () {
        this.data = [];
        this.data.push({
            id: 1,
            firstName: 'Amir',
            lastName: 'Sharifi',
            email: 'amir@gorealster.com'
        });
        this.data.push({
            id: 2,
            firstName: 'Jeff',
            lastName: 'Lee',
            email: 'jeff@gorealster.com'
        });
        this.data.push({
            id: 3,
            firstName: 'Keyvan',
            lastName: 'Chamani',
            email: 'keyvan@gorealster.com'
        });
        this.data.push({
            id: 4,
            firstName: 'Sangmin',
            lastName: 'Lee',
            email: 'sangmin@gorealster.com'
        });
        this.formDataObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.formDataObservable.next(this.data);
    };
    FormService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FormService);
    return FormService;
}());

//# sourceMappingURL=form.service.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var of_1 = __webpack_require__("../../../../rxjs/observable/of.js");
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/delay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var delay_1 = __webpack_require__("../../../../rxjs/operator/delay.js");
Observable_1.Observable.prototype.delay = delay_1.delay;
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/toPromise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var toPromise_1 = __webpack_require__("../../../../rxjs/operator/toPromise.js");
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "../../../../rxjs/operator/delay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var isDate_1 = __webpack_require__("../../../../rxjs/util/isDate.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Notification_1 = __webpack_require__("../../../../rxjs/Notification.js");
/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The IScheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteDelay = isDate_1.isDate(delay);
    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return this.lift(new DelayOperator(delayFor, scheduler));
}
exports.delay = delay;
var DelayOperator = (function () {
    function DelayOperator(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelaySubscriber = (function (_super) {
    __extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
        _super.call(this, destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.queue = [];
        this.active = false;
        this.errored = false;
    }
    DelaySubscriber.dispatch = function (state) {
        var source = state.source;
        var queue = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay_1);
        }
        else {
            source.active = false;
        }
    };
    DelaySubscriber.prototype._schedule = function (scheduler) {
        this.active = true;
        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    };
    DelaySubscriber.prototype.scheduleNotification = function (notification) {
        if (this.errored === true) {
            return;
        }
        var scheduler = this.scheduler;
        var message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    };
    DelaySubscriber.prototype._next = function (value) {
        this.scheduleNotification(Notification_1.Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function (err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
    };
    DelaySubscriber.prototype._complete = function () {
        this.scheduleNotification(Notification_1.Notification.createComplete());
    };
    return DelaySubscriber;
}(Subscriber_1.Subscriber));
var DelayMessage = (function () {
    function DelayMessage(time, notification) {
        this.time = time;
        this.notification = notification;
    }
    return DelayMessage;
}());
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ "../../../../rxjs/operator/toPromise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
/* tslint:enable:max-line-length */
/**
 * Converts an Observable sequence to a ES2015 compliant promise.
 *
 * @example
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Rejected Promise
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .throw(new Error('woops'))
 *   .toPromise();
 *
 * source
 *   .then((value) => console.log('Value: %s', value))
 *   .catch((err) => console.log('Error: %s', err));
 * // => Error: Error: woops
 *
 * // Setting via the config
 * Rx.config.Promise = RSVP.Promise;
 *
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Setting via the method
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise(RSVP.Promise);
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * @param {PromiseConstructor} [PromiseCtor] The constructor of the promise. If not provided,
 * it will look for a constructor first in Rx.config.Promise then fall back to
 * the native Promise constructor if available.
 * @return {Promise<T>} An ES2015 compatible promise with the last value from
 * the observable sequence.
 * @method toPromise
 * @owner Observable
 */
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "../../../../rxjs/util/isDate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}
exports.isDate = isDate;
//# sourceMappingURL=isDate.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map