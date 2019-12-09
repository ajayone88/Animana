(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- App View -->\n<div class=\"main\">\n\n  <!-- Header-->\n  <header class=\"main__header\">\n    <app-header></app-header>\n  </header>\n  <!-- End of Header-->\n\n  <!-- Error Section -->\n  <section class=\"main__error\" *ngIf=\"showError\">\n    <div>\n      <h1>{{error.heading}}</h1>\n      <p>{{error.description}}</p>\n    </div>\n  </section>\n  <!-- End of Error Section -->\n\n  <!-- Main Section -->\n  <section class=\"main__section\">\n    <router-outlet></router-outlet>\n  </section>\n  <!-- End of Main Section -->\n\n  <!-- Footer -->\n  <footer class=\"main__footer\">\n    <app-footer></app-footer>\n  </footer>\n  <!-- End of Footer-->\n\n</div>\n<!-- End of App View-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client/client.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client/client.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"client\">\n  <div class=\"client__box\">\n    <div *ngIf=\"client\" class=\"client__box__details\">\n      <div class=\"close client__box__details--closeImage\" (click)=\"navigateBack()\"></div>\n      <h1>Client Details</h1>\n      <div>\n        <div class=\"\">\n          <div class=\"customer\" style=\"width:104px; height:104px;\"></div>\n        </div>\n      </div>\n      <div>\n        <span>Initials: </span>\n        <span>{{ client.initials}}</span>\n      </div>\n      <div>\n        <span>First Name: </span>\n        <span><a>{{ client.firstName}}</a></span>\n      </div>\n      <div>\n        <span>Last Name: </span>\n        <span>{{ client.lastName}}</span>\n      </div>\n      <div>\n        <span>Start Date: </span>\n        <span>{{ client.startDate}}</span>\n      </div>\n      <div>\n        <span>Active: </span>\n        <span *ngIf=\"client.active\">Active</span>\n        <span *ngIf=\"!client.active\">Not Active</span>\n      </div>\n      <div  class=\"\">\n        <span>Address: </span>\n        <div *ngFor=\"let key of object.keys(client.address)\">\n          <span>{{ key + \" : \" }}</span>\n          <span>{{ client.address[key] }}</span>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"client__box__patientDetails\">\n     <h1>Patients List</h1>\n     <ul>\n       <li *ngFor=\"let patient of patients; let i = index\" (click)=\"openPatient(patient.id)\">{{\"(\" + (i+1) + \") \" + patient.name }}</li>\n     </ul>\n    </div>\n    <hr>\n    <div class=\"client__box__invoiceDetails\">\n      <h1>Invoice List</h1>\n      <ul>\n        <li *ngFor=\"let invoice of invoices; let i = index\" (click)=\"openInvoice(invoice.number)\">{{\"(\" + (i+1) + \") \" +invoice.number }}</li>\n      </ul>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Client View -->\n<div class=\"clients\">\n\n    <!-- Child view router outlet-->\n    <div class=\"clients__child\">\n      <router-outlet></router-outlet>\n    </div>\n    <!--End of child view router outlet-->\n\n    <!-- Search Div -->\n    <div class=\"clients__search\">\n      <input type=\"text\" placeholder=\"Search\"  (input)=\"setFilter($event)\" >\n    </div>\n    <!-- End of Search Div -->\n\n    <!-- Client Card  Repeat -->\n    <div *ngFor=\"let client of limitedClient\"  class=\"clients__card\">\n      <!-- Image div -->\n      <div class=\"clients__card--image\">\n        <div class=\"customer\"></div>\n      </div>\n      <!-- End of image div -->\n\n      <!-- Client fields -->\n      <div class=\"clients__card__details\">\n        <div>\n          <span>Initials: </span>\n          <span>{{ client.initials}}</span>\n        </div>\n\n        <!-- Navigate to client view -->\n        <div (click)=\"navigateToClient(client.id)\">\n          <span>First Name: </span>\n          <span><a>{{ client.firstName}}</a></span>\n        </div>\n        <!-- End of navigate to client view -->\n\n        <div>\n          <span>Last Name: </span>\n          <span>{{ client.lastName}}</span>\n        </div>\n\n        <div>\n          <span>Start Date: </span>\n          <span>{{ client.startDate}}</span>\n        </div>\n\n        <div>\n          <span>Active: </span>\n          <span *ngIf=\"client.active\">Active</span>\n          <span *ngIf=\"!client.active\">Not Active</span>\n        </div>\n      </div>\n      <!-- Address -->\n      <div  class=\"clients__card__address\">\n        <span>Address: </span>\n        <div *ngFor=\"let key of object.keys(client.address)\">\n          <span>{{ key + \" : \" }}</span>\n          <span>{{ client.address[key] }}</span>\n        </div>\n      </div>\n      <!-- End of address -->\n      <!--End of client fields -->\n    </div>\n    <!-- End of  client card  Repeat -->\n    <!-- Button Section -->\n    <div class=\"clients__button\">\n      <button [ngStyle]=\"{ visibility : previous === 0 ? 'hidden' : 'visible'}\" class=\"button clients__button--previous\" (click)=\"setPrevious();\">Previous</button>\n      <div class=\"clients__button--index\">\n        <span>{{'Clients : '+ (maxLength === 0 ? 0 : previous + 1 ) +\" to \"+ ((next + 1) <= maxLength ? next + 1 : maxLength )+ \" / \"}}</span>\n        <span>{{ 'Total : '+ maxLength}}</span>\n      </div>\n      <button [ngStyle]=\"{ visibility : (next + 1)  >= maxLength ? 'hidden' : 'visible'}\" class=\"button clients__button--next\" (click)=\"setNext();\">Next</button>\n    </div>\n    <!-- End of button Section -->\n</div>\n<!-- End of client View -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer -->\n<div class=\"footer\">\n  <!-- Links in the footer -->\n  <ul class=\"footer__items\">\n    <li class=\"footer__items--item\">About us</li>\n    <li class=\"footer__items--item\">Contact</li>\n  </ul>\n  <!-- End of links in the footer-->\n</div>\n<!-- End of Footer -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<! -- Header -->\n<div class=\"header\">\n  <!-- Label to display the app name -->\n  <div class=\"header__home\">\n    <a  class=\"header__home--anchor\" href=\"index.html\">Animana</a>\n  </div>\n  <!-- End of Label -->\n  <!-- Header Navigation on Large screen -->\n  <nav class=\"header__nav\">\n    <ul class=\"header__nav__items\">\n      <li class=\"header__nav__items--item\" routerLink=\"/home\"  routerLinkActive=\"active\">Home</li>\n      <li class=\"header__nav__items--item\" routerLink=\"/clients\"  routerLinkActive=\"active\">Clients</li>\n      <li class=\"header__nav__items--item\" routerLink=\"/patients\" routerLinkActive=\"active\">Patients</li>\n      <li class=\"header__nav__items--item\" routerLink=\"/invoices\" routerLinkActive=\"active\">Invoices</li>\n    </ul>\n  </nav>\n  <!-- End of Header Navigation -->\n  <!-- Burger section-->\n  <div class=\"header__burger\" (click)=\"showMenu = !showMenu;\">\n    <span class=\"header__burger--line\"></span>\n    <span class=\"header__burger--line\"></span>\n    <span class=\"header__burger--line\"></span>\n  </div>\n  <!-- End of burger header section -->\n  <!-- Burger header menu values -->\n  <div class=\"header__burgerList\" *ngIf=\"showMenu\" [@openClose]=\"showMenu ? 'open' : 'close'\">\n    <ul class=\"header__burgerList__items\">\n      <li class=\"header__burgerList__items--item\" routerLink=\"/home\"  routerLinkActive=\"active\">Home</li>\n      <li class=\"header__burgerList__items--item\" routerLink=\"/clients\"  routerLinkActive=\"active\">Clients</li>\n      <li class=\"header__burgerList__items--item\" routerLink=\"/patients\" routerLinkActive=\"active\">Patients</li>\n      <li class=\"header__burgerList__items--item\" routerLink=\"/invoices\" routerLinkActive=\"active\">Invoices</li>\n    </ul>\n  </div>\n  <!-- End of burger header menu values -->\n</div>\n<!-- End of Header -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Home -->\n<div class=\"home\">\n  <!-- Welcome section -->\n  <h1>Welcome to Animana Information Management System</h1>\n  <!-- End of Welcome section -->\n  <!-- General  description -->\n  <section>\n      Details of the CLIENT, PATIENT, INVOICE can be found here.\n  </section>\n  <!-- End of general description section -->\n  <!-- Client description -->\n  <section>\n    <h1>Client : </h1>\n    <ul style=\"list-style: none; padding:0;\">\n      <li>Check client details by clicking the above CLIENT button </li>\n      <li>To Check the client patient and Invoice click the client on client name </li>\n    </ul>\n  </section>\n  <!-- End of client description section -->\n  <!-- Patient description section -->\n  <section>\n    <h1>Patient : </h1>\n    <ul style=\"list-style: none; padding:0;\">\n      <li>Check the patient details by clicking the PATIENT button</li>\n      <li>To Check the patient details like WEIGHT, PRODUCT, CALLS click on the Patient name</li>\n      <li>Add new patient by clicking on add button and filling required fields </li>\n      <li>Delete the existing patient by clicking the Delete icon on the right</li>\n    </ul>\n  </section>\n  <!-- End of Patient description section -->\n  <!-- Invoice section -->\n  <section>\n    <h1>Invoice :</h1>\n    <ul style=\"list-style: none; padding:0;\">\n      <li>Check the invoice details on the invoice page</li>\n    </ul>\n  </section>\n  <!-- End of Invoice section -->\n</div>\n<!-- End of Home -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoice/invoice.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoice/invoice.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Invoice -->\n<div class=\"invoice\">\n  <div class=\"invoice__box\">\n\n      <!-- Invoice repeat section -->\n      <div *ngIf=\"invoice\" class=\"invoice__box__details\">\n\n          <!-- Close Icon -->\n          <div class=\"close invoice__box__details--closeImage\" (click)=\"navigateBack()\"></div>\n          <!-- End of close icon -->\n          <h1>Invoice Details</h1>\n\n          <!-- Invoice Icon -->\n          <div class=\"invoice__box__details--icon\">\n            <div class=\"invoiceIcon\" style=\"width:72px; height:72px\"></div>\n          </div>\n          <!-- End of Invoice Icon -->\n\n          <!-- Invoice fields -->\n          <div>\n            <span>Invoice No : </span>\n            <span>{{ invoice.number}}</span>\n          </div>\n          <div>\n            <span>Amount : </span>\n            <span><a>{{ invoice.amount}}</a></span>\n          </div>\n          <div>\n            <span>Vat : </span>\n            <span>{{ invoice.vat}}</span>\n          </div>\n          <div>\n            <span>Client Id : </span>\n            <span>{{ invoice.clientId}}</span>\n          </div>\n          <div>\n            <span>Patient Id : </span>\n            <span>{{ invoice.patientId}}</span>\n          </div>\n          <div>\n            <span>Date : </span>\n            <span>{{ invoice.date}}</span>\n          </div>\n          <!-- End of Invoice fields -->\n      </div>\n      <!-- End of invoice repeat section -->\n  </div>\n</div>\n<!-- End of Invoice -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoices.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoices.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Invoices -->\n<div class=\"invoices\">\n\n  <!-- Invoices child router outlet -->\n  <div class=\"invoices__child\">\n    <router-outlet></router-outlet>\n  </div>\n  <!-- End of invoice child router outlet -->\n\n  <!-- Search -->\n  <div class=\"invoices__search\">\n    <input type=\"text\" placeholder=\"Search\"  (input)=\"setFilter($event)\" >\n  </div>\n  <!-- End of search box -->\n\n  <!-- Repeat for Invoices -->\n  <div *ngFor=\"let invoice of limitedInvoices\"  class=\"invoices__card\">\n\n    <!-- Invoice Icon -->\n    <div class=\"invoices__card--image\">\n      <div class=\"invoiceIcon\"></div>\n    </div>\n    <!-- End of Invoice Icon -->\n\n    <!-- Invoice Details -->\n    <div class=\"invoices__card__details\">\n      <div (click)=\"navigateToPatient(invoice.number)\">\n        <span>Invoice No: </span>\n        <span><a>{{ invoice.number}}</a></span>\n      </div>\n\n      <div>\n        <span>Amount : </span>\n        <span>{{ invoice.amount}}</span>\n      </div>\n\n      <div>\n        <span>Vat : </span>\n        <span>{{ invoice.vat}}</span>\n      </div>\n\n      <div>\n        <span>Client Id : </span>\n        <span>{{ invoice.clientId}}</span>\n      </div>\n\n      <div>\n        <span>Patient Id :</span>\n        <span>{{ invoice.patientId}}</span>\n      </div>\n\n      <div>\n        <span>Date : </span>\n        <span>{{ invoice.date}}</span>\n      </div>\n    </div>\n    <!-- End of Invoice details-->\n  </div>\n  <!-- End of repeat details -->\n\n  <!-- Button Section -->\n  <div class=\"invoices__button\">\n    <button [ngStyle]=\"{ visibility : previous === 0 ? 'hidden' : 'visible'}\" class=\"button invoices__button--previous\" (click)=\"setPrevious();\">Previous</button>\n    <div class=\"invoices__button--index\">\n      <span>{{'Clients : '+ (maxLength === 0 ? 0 : previous + 1 ) +\" to \"+ ((next + 1) <= maxLength ? next + 1 : maxLength )+ \" / \"}}</span>\n      <span>{{ 'Total : '+ maxLength}}</span>\n    </div>\n    <button [ngStyle]=\"{ visibility : (next + 1)  >= maxLength ? 'hidden' : 'visible'}\" class=\"button invoices__button--next\" (click)=\"setNext();\">Next</button>\n  </div>\n  <!-- End of button section -->\n</div>\n<!-- End of invoice -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/add-patient/add-patient.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/add-patient/add-patient.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Form for Adding Patient -->\n<form class=\"add-patient\" (ngSubmit)=\"onSubmit(f);\" #f=\"ngForm\">\n  <div class=\"add-patient__box\">\n    <!-- Close Icon to close the model -->\n    <div class=\"add-patient__box--close\">\n      <div class=\"close\" (click)=\"navigateBack()\"></div>\n    </div>\n    <!-- End of Close icon to close the model -->\n\n    <!-- Field to add Name -->\n    <div class=\"add-patient__box--group\">\n      <h4>Add Patient</h4>\n      <label for=\"name\" class=\"add-patient__box--group--label\">Name * :</label>\n      <input type=\"text\" id=\"name\" ngModel name=\"name\" #name=\"ngModel\" required/>\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched || f.submitted)\" class=\"warning\">\n        <div *ngIf=\"name.errors.required\">\n          Name is mandatory !\n        </div>\n      </div>\n    </div>\n    <!-- End of field to add the Name -->\n\n    <!-- Class -->\n    <div class=\"add-patient__box--group\">\n      <label for=\"class\" class=\"add-patient__box--group--label\">Class : </label>\n      <input type=\"text\" id=\"class\" ngModel name=\"class\"/>\n    </div>\n    <!--End of class -->\n\n    <!-- Client Id -->\n    <div class=\"add-patient__box--group\">\n      <label for=\"clientId\" class=\"add-patient__box--group--label\">Client : </label>\n      <select id=\"clientId\" ngModel name=\"clientId\" #clientId=\"ngModel\" required>\n        <option *ngFor=\"let client of clients\" [ngValue]=\"client.id\">{{client.firstName + \" \" + client.lastName}}</option>\n      </select>\n      <div *ngIf=\"clientId.invalid && (clientId.dirty || clientId.touched || f.submitted)\" class=\"warning\">\n        <div *ngIf=\"clientId.errors.required\">\n          Client is mandatory !\n        </div>\n      </div>\n    </div>\n    <!-- End of Client Id -->\n\n    <!-- Species -->\n    <div class=\"add-patient__box--group\">\n      <label for=\"species\" class=\"add-patient__box--group--label\">Species :</label>\n      <input type=\"text\" id=\"species\" ngModel name=\"species\"/>\n    </div>\n    <!-- End of Species -->\n\n    <!-- Date of Birth -->\n    <div class=\"add-patient__box--group\">\n      <label for=\"dateOfBirth\" class=\"add-patient__box--group--label\">Date of Birth * :</label>\n      <input type=\"date\" id=\"dateOfBirth\" ngModel name=\"dateOfBirth\" (input)=\"validateDateOfBirth(dateOfBirth)\" #dateOfBirth=\"ngModel\" required/>\n      <div *ngIf=\"dateOfBirth.invalid && (dateOfBirth.dirty || dateOfBirth.touched || f.submitted)\" class=\"warning\">\n        <div *ngIf=\"dateOfBirth.errors.required\">\n         Date of birth is mandatory !\n        </div>\n      </div>\n    </div>\n    <!-- End of Date of Birth -->\n\n    <!-- CrossBreed -->\n    <div class=\"add-patient__box--group\">\n      <label class=\"add-patient__box--group--label\">CrossBreed :</label>\n      <input type=\"radio\"  name=\"crossbreed\" ngModel value=\"true\">Yes\n      <br>\n      <input type=\"radio\"  name=\"crossbreed\" ngModel value=\"false\">No\n      <br>\n    </div>\n    <!-- End of cross Breed -->\n\n    <!-- Gender -->\n    <div class=\"add-patient__box--group\">\n      <label class=\"add-patient__box--group--label\">Gender :</label>\n      <input type=\"radio\" name=\"gender\" ngModel value=\"male\"> Male\n      <br>\n      <input type=\"radio\" name=\"gender\" ngModel value=\"female\"> Female\n      <br>\n    </div>\n    <!-- End of Gender -->\n\n    <!-- Warning -->\n    <div class=\"add-patient__box--group\">\n      <label class=\"add-patient__box--group--label\">Warning :</label>\n      <textarea type=\"textarea\" name=\"warning\" ngModel></textarea>\n    </div>\n    <!-- ENd of Warning -->\n\n    <!-- Remarks -->\n    <div class=\"add-patient__box--group\">\n      <label class=\"add-patient__box--group--label\">Remarks :</label>\n      <textarea type=\"textarea\" name=\"remark\" ngModel></textarea>\n    </div>\n    <!-- End of Remarks -->\n\n    <!-- Color -->\n    <div class=\"add-patient__box--group\">\n      <label class=\"add-patient__box--group--label\">Color :</label>\n      <input type=\"text\" name=\"color\" ngModel/>\n    </div>\n    <!-- End of Color -->\n\n    <!-- Active -->\n    <div class=\"add-patient__box--group\">\n      <label class=\"add-patient__box--group--label\">Active :</label>\n      <input type=\"radio\" name=\"active\"  ngModel value=\"true\">Active\n      <br>\n      <input type=\"radio\" name=\"active\" ngModel value=\"false\">Not Active\n      <br>\n    </div>\n    <!-- End of Active -->\n\n    <!--Submit Input -->\n    <div class=\"add-patient__box--button\">\n      <input type=\"submit\"  value=\"Add Patient\"/>\n    </div>\n    <!-- End of Submit Input -->\n\n    <!-- Error section to display warning -->\n    <div *ngIf=\"f.invalid && f.submitted\" class=\"warning\">\n        Mandatory fields are empty!\n    </div>\n    <!-- End of warning section -->\n  </div>\n</form>\n<!-- End of form for adding patient -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/delete-patient/delete-patient.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/delete-patient/delete-patient.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Delete Patient -->\n<div class=\"delete-patient\">\n\n  <!-- Message box with yes or no option -->\n  <div class=\"delete-patient__box\">\n\n    <!-- Heading -->\n    <h4 class=\"delete-patient__box--heading\">Delete Patient</h4>\n    <!-- End of heading -->\n\n    <!-- Paragraph for message -->\n    <p class=\"delete-patient__box--message\">Are you sure you want to delete the patient details,\n      Once delete the information can not be retrieved, Press \"Yes\" to continue deletion, \"No\" to cancel the deletion</p>\n    <!-- End of paragraph for message -->\n\n    <!-- button -->\n    <div class=\"delete-patient__box--button\">\n      <div class=\"delete-patient__box--button--left\" (click)=\"deletePatient()\">\n        <label>Yes</label>\n      </div>\n      <div class=\"delete-patient__box--button--right\"(click)=\"navigateBack()\">\n        <label>No</label>\n      </div>\n    </div>\n    <!-- End of button -->\n  </div>\n  <!-- ENd of message box with yes or no option -->\n</div>\n<!-- End of delete Patient -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient/patient.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient/patient.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"patient\">\n  <div class=\"patient__box\">\n    <div class=\"close patient__box--closeImage\" (click)=\"navigateBack()\"></div>\n    <div *ngIf=\"patient\" class=\"patient__box--patient\">\n      <h1>Patient Details</h1>\n      <div class=\"\" >\n        <div class=\"firstAid\" style=\"width:104px; height:130px;\"></div>\n      </div>\n      <div>\n        <span>Name: </span>\n        <span><a>{{ patient.name}}</a></span>\n      </div>\n\n      <div>\n        <span>Class: </span>\n        <span>{{ patient.class}}</span>\n      </div>\n\n      <div>\n        <span>ClientId: </span>\n        <span>{{ patient.clientId}}</span>\n      </div>\n\n      <div>\n        <span>Species: </span>\n        <span>{{ patient.species}}</span>\n      </div>\n\n      <div>\n        <span>Date of Birth: </span>\n        <span>{{ patient.dateOfBirth}}</span>\n      </div>\n\n      <div>\n        <span>Active: </span>\n        <span *ngIf=\"patient.active\">Active</span>\n        <span *ngIf=\"!patient.active\">Not Active</span>\n      </div>\n    </div>\n    <hr>\n    <div class=\"patient__box--weight\">\n      <h1>Weight Details</h1>\n      <ul>\n        <li *ngFor=\"let weight of weights; let i = index\">{{\"(\" + ( i + 1 ) +\")\" + \"  \"+ weight.date + \" | \" + weight.weight + \"  \"+ weight.unit }}</li>\n      </ul>\n    </div>\n    <hr>\n   <div class=\"patient__box--call\">\n     <h1>Call Details</h1>\n     <ul>\n       <li *ngFor=\"let call of calls; let i = index\">{{\"(\"+ (i+1) +\") \"+call.subject }}</li>\n     </ul>\n   </div>\n    <hr>\n   <div class=\"patient__box--product\">\n     <h1>Product Details</h1>\n     <ul>\n       <li *ngFor=\"let product of products; let i = index\">{{\"(\"+ (i+1) +\") \"+product.name}}</li>\n     </ul>\n   </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patients.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patients.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Patients -->\n<div class=\"patients\">\n\n  <!-- Patients Child Router outlet -->\n  <div class=\"patients__child\">\n    <router-outlet></router-outlet>\n  </div>\n  <!-- End of Patients child router Outlet -->\n\n  <!-- Patients search input -->\n  <div class=\"patients__search\">\n\n    <!-- Add button -->\n    <div routerLink=\"add-patient\">\n      <label>Add</label>\n    </div>\n    <!-- End of Add button -->\n\n    <input type=\"text\" placeholder=\"Search\"  (input)=\"setFilter($event)\" >\n  </div>\n  <!-- End of patients search input -->\n\n  <!-- Repeat  div for Patient -->\n  <div *ngFor=\"let patient of limitedPatients\"  class=\"patients__card\">\n\n    <!-- First Aid Icon -->\n    <div class=\"patients__card--image\">\n      <div class=\"firstAid\"></div>\n    </div>\n    <!-- End of First Aid Icon -->\n\n    <!-- Patients details -->\n    <div class=\"patients__card__details\">\n      <div (click)=\"navigateToPatient(patient.id)\">\n        <span>Name: </span>\n        <span><a>{{ patient.name}}</a></span>\n      </div>\n\n      <div>\n        <span>Class: </span>\n        <span>{{ patient.class}}</span>\n      </div>\n\n      <div>\n        <span>ClientId: </span>\n        <span>{{ patient.clientId}}</span>\n      </div>\n\n      <div>\n        <span>Species: </span>\n        <span>{{ patient.species}}</span>\n      </div>\n\n      <div>\n        <span>Date of Birth: </span>\n        <span>{{ patient.dateOfBirth}}</span>\n      </div>\n\n      <div>\n        <span>Active: </span>\n        <span *ngIf=\"patient.active\">Active</span>\n        <span *ngIf=\"!patient.active\">Not Active</span>\n      </div>\n    </div>\n    <!-- End of patient details-->\n\n    <!-- Delete Icon -->\n    <div class=\"patients__card--delete\" [routerLink]=\"['delete-patient', patient.id]\">\n      <div class=\"delete\"></div>\n    </div>\n    <!-- End of delete Icon -->\n  </div>\n\n  <!-- Button -->\n  <div class=\"patients__button\">\n    <button [ngStyle]=\"{ visibility : previous === 0 ? 'hidden' : 'visible'}\" class=\"button patients__button--previous\" (click)=\"setPrevious();\">Previous</button>\n    <div class=\"patients__button--index\">\n      <span>{{'Clients : '+ (maxLength === 0 ? 0 : previous + 1 ) +\" to \"+ ((next + 1) <= maxLength ? next + 1 : maxLength )+ \" / \"}}</span>\n      <span>{{ 'Total : '+ maxLength}}</span>\n    </div>\n    <button [ngStyle]=\"{ visibility : (next + 1)  >= maxLength ? 'hidden' : 'visible'}\" class=\"button patients__button--next\" (click)=\"setNext();\">Next</button>\n  </div>\n  <!-- End of Button -->\n</div>\n<!-- End of patients -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patients/patients.component */ "./src/app/patients/patients.component.ts");
/* harmony import */ var _clients_client_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients/client/client.component */ "./src/app/clients/client/client.component.ts");
/* harmony import */ var _patients_patient_patient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patients/patient/patient.component */ "./src/app/patients/patient/patient.component.ts");
/* harmony import */ var _patients_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patients/add-patient/add-patient.component */ "./src/app/patients/add-patient/add-patient.component.ts");
/* harmony import */ var _patients_delete_patient_delete_patient_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patients/delete-patient/delete-patient.component */ "./src/app/patients/delete-patient/delete-patient.component.ts");
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./invoices/invoices.component */ "./src/app/invoices/invoices.component.ts");
/* harmony import */ var _invoices_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./invoices/invoice/invoice.component */ "./src/app/invoices/invoice/invoice.component.ts");












const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: 'clients',
        component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"],
        children: [
            {
                path: 'client/:id',
                component: _clients_client_client_component__WEBPACK_IMPORTED_MODULE_6__["ClientComponent"]
            }
        ]
    },
    { path: 'patients',
        component: _patients_patients_component__WEBPACK_IMPORTED_MODULE_5__["PatientsComponent"],
        children: [
            {
                path: 'patient/:id',
                component: _patients_patient_patient_component__WEBPACK_IMPORTED_MODULE_7__["PatientComponent"]
            },
            {
                path: 'add-patient',
                component: _patients_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_8__["AddPatientComponent"]
            },
            {
                path: 'delete-patient/:id',
                component: _patients_delete_patient_delete_patient_component__WEBPACK_IMPORTED_MODULE_9__["DeletePatientComponent"]
            }
        ]
    },
    {
        path: 'invoices',
        component: _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_10__["InvoicesComponent"],
        children: [
            {
                path: "invoice/:id",
                component: _invoices_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceComponent"]
            }
        ]
    },
    { path: '**', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  display: flex;\n  flex-direction: column;\n  max-width: 1035px;\n  margin: auto;\n  min-height: 100vh;\n}\n.main__error {\n  background-color: lightyellow;\n  padding: 0px 12px;\n}\n.main__error h1 {\n  color: red;\n  margin: 4px;\n}\n.main__error p {\n  color: red;\n  margin: 4px;\n}\n.main__section {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXEFqYXlfRGF0YVxcQXNzaWduXFxBbmltYW5hXFxwYWNrYWdlc1xcZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjtBRE1FO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQ0pOO0FES0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0hOO0FES0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0hOO0FET0U7RUFDRSxZQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGVzZSBzdHlsZSBhcmUgdXNlZCBmb3IgdGhlIEFwcCBIVE1MIFBhZ2VcclxuLm1haW57XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICBtYXgtd2lkdGg6MTAzNXB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIG1pbi1oZWlnaHQ6MTAwdmg7XHJcblxyXG4gICZfX2hlYWRlcntcclxuXHJcbiAgfVxyXG5cclxuICAmX19lcnJvcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodHllbGxvdztcclxuICAgICAgcGFkZGluZzowcHggMTJweDtcclxuICAgIGgxe1xyXG4gICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgIG1hcmdpbjo0cHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgIG1hcmdpbjo0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zZWN0aW9ue1xyXG4gICAgZmxleC1ncm93OjE7XHJcbiAgfVxyXG5cclxuICAmX19mb290ZXJ7XHJcblxyXG4gIH1cclxufVxyXG4iLCIubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTAzNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLm1haW5fX2Vycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XG4gIHBhZGRpbmc6IDBweCAxMnB4O1xufVxuLm1haW5fX2Vycm9yIGgxIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiA0cHg7XG59XG4ubWFpbl9fZXJyb3IgcCB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogNHB4O1xufVxuLm1haW5fX3NlY3Rpb24ge1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");



let AppComponent = class AppComponent {
    constructor(cdRef, sharedService) {
        this.cdRef = cdRef;
        this.sharedService = sharedService;
        this.showError = false;
    }
    //Life cycle hook is used to subscribe the error and set the values
    ngAfterViewChecked() {
        this.sharedService.error.subscribe(error => {
            this.showError = error.showError;
            this.error = {
                heading: error.heading,
                description: error.description
            };
            this.cdRef.detectChanges();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patients/patients.component */ "./src/app/patients/patients.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _clients_client_client_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients/client/client.component */ "./src/app/clients/client/client.component.ts");
/* harmony import */ var _patients_patient_patient_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patients/patient/patient.component */ "./src/app/patients/patient/patient.component.ts");
/* harmony import */ var _patients_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patients/add-patient/add-patient.component */ "./src/app/patients/add-patient/add-patient.component.ts");
/* harmony import */ var _patients_delete_patient_delete_patient_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patients/delete-patient/delete-patient.component */ "./src/app/patients/delete-patient/delete-patient.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./invoices/invoices.component */ "./src/app/invoices/invoices.component.ts");
/* harmony import */ var _invoices_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./invoices/invoice/invoice.component */ "./src/app/invoices/invoice/invoice.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _clients_clients_component__WEBPACK_IMPORTED_MODULE_9__["ClientsComponent"],
            _patients_patients_component__WEBPACK_IMPORTED_MODULE_10__["PatientsComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _clients_client_client_component__WEBPACK_IMPORTED_MODULE_12__["ClientComponent"],
            _patients_patient_patient_component__WEBPACK_IMPORTED_MODULE_13__["PatientComponent"],
            _patients_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_14__["AddPatientComponent"],
            _patients_delete_patient_delete_patient_component__WEBPACK_IMPORTED_MODULE_15__["DeletePatientComponent"],
            _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_17__["InvoicesComponent"],
            _invoices_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_18__["InvoiceComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/clients/client/client.component.scss":
/*!******************************************************!*\
  !*** ./src/app/clients/client/client.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".client {\n  overflow: scroll;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n.client__box {\n  position: relative;\n  -webkit-animation: fadeIn 1s ease-in;\n          animation: fadeIn 1s ease-in;\n  max-width: 700px;\n  height: auto;\n  margin: 50px auto;\n  background-color: #fff;\n  padding: 24px;\n}\n.client__box__details--closeImage {\n  display: inline-block;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}\n.client__box__details div {\n  margin: 5px;\n}\n.client__box__details div span:last-child {\n  font-weight: bold;\n}\n.client__box__patientDetails ul {\n  list-style: none;\n  padding: 0;\n}\n.client__box__patientDetails ul li {\n  margin: 8px 12px 8px 0px;\n  padding: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  background-color: cadetblue;\n  color: white;\n}\n.client__box__patientDetails ul li:hover,\n.client__box__patientDetails ul li:active {\n  background-color: #e9f0f0;\n  color: black;\n}\n.client__box__invoiceDetails ul {\n  list-style: none;\n  padding: 0;\n}\n.client__box__invoiceDetails ul li {\n  margin: 8px 12px 8px 0px;\n  padding: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  background-color: cadetblue;\n  color: white;\n}\n.client__box__invoiceDetails ul li:hover,\n.client__box__invoiceDetails ul li:active {\n  background-color: #e9f0f0;\n  color: black;\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jbGllbnQvQzpcXEFqYXlfRGF0YVxcQXNzaWduXFxBbmltYW5hXFxwYWNrYWdlc1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNsaWVudHNcXGNsaWVudFxcY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0o7QURFTTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBUjtBREdNO0VBQ0UsV0FBQTtBQ0RSO0FERVU7RUFDRSxpQkFBQTtBQ0FaO0FETVE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNKVjtBRE1VO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDSlo7QURPVTs7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUNMWjtBRFdRO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDVFY7QURXVTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ1RaO0FEWVU7O0VBRUUseUJBQUE7RUFDQSxZQUFBO0FDVlo7QURrQkE7RUFDRTtJQUFJLFVBQUE7RUNkSjtFRGVBO0lBQUksWUFBQTtFQ1pKO0VEYUE7SUFBSyxVQUFBO0VDVkw7QUFDRjtBRE1BO0VBQ0U7SUFBSSxVQUFBO0VDZEo7RURlQTtJQUFJLFlBQUE7RUNaSjtFRGFBO0lBQUssVUFBQTtFQ1ZMO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpZW50e1xyXG4gIG92ZXJmbG93OnNjcm9sbDtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuXHJcbiAgJl9fYm94e1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb246ZmFkZUluIDFzIGVhc2UtaW47XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBtYXJnaW46NTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6MjRweDtcclxuXHJcbiAgICAmX19kZXRhaWxze1xyXG4gICAgICAmLS1jbG9zZUltYWdle1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHRvcDoxMHB4O1xyXG4gICAgICAgIHJpZ2h0OjEwcHg7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpdntcclxuICAgICAgICBtYXJnaW46NXB4O1xyXG4gICAgICAgICAgc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3BhdGllbnREZXRhaWxze1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6MDtcclxuXHJcbiAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgbWFyZ2luOjhweCAxMnB4IDhweCAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTZweDtcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Y2FkZXRibHVlO1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaTpob3ZlcixcclxuICAgICAgICAgIGxpOmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZTlmMGYwO1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9faW52b2ljZURldGFpbHN7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzowO1xyXG5cclxuICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICBtYXJnaW46OHB4IDEycHggOHB4IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzoxNnB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpjYWRldGJsdWU7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpOmhvdmVyLFxyXG4gICAgICAgICAgbGk6YWN0aXZle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlOWYwZjA7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbntcclxuICAwJSB7b3BhY2l0eTogMH1cclxuICA1MCV7b3BhY2l0eTogMC41fVxyXG4gIDEwMCV7b3BhY2l0eTogMX1cclxufVxyXG4iLCIuY2xpZW50IHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2xpZW50X19ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW47XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG4uY2xpZW50X19ib3hfX2RldGFpbHMtLWNsb3NlSW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNsaWVudF9fYm94X19kZXRhaWxzIGRpdiB7XG4gIG1hcmdpbjogNXB4O1xufVxuLmNsaWVudF9fYm94X19kZXRhaWxzIGRpdiBzcGFuOmxhc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jbGllbnRfX2JveF9fcGF0aWVudERldGFpbHMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuLmNsaWVudF9fYm94X19wYXRpZW50RGV0YWlscyB1bCBsaSB7XG4gIG1hcmdpbjogOHB4IDEycHggOHB4IDBweDtcbiAgcGFkZGluZzogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jbGllbnRfX2JveF9fcGF0aWVudERldGFpbHMgdWwgbGk6aG92ZXIsXG4uY2xpZW50X19ib3hfX3BhdGllbnREZXRhaWxzIHVsIGxpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWYwZjA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jbGllbnRfX2JveF9faW52b2ljZURldGFpbHMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuLmNsaWVudF9fYm94X19pbnZvaWNlRGV0YWlscyB1bCBsaSB7XG4gIG1hcmdpbjogOHB4IDEycHggOHB4IDBweDtcbiAgcGFkZGluZzogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jbGllbnRfX2JveF9faW52b2ljZURldGFpbHMgdWwgbGk6aG92ZXIsXG4uY2xpZW50X19ib3hfX2ludm9pY2VEZXRhaWxzIHVsIGxpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWYwZjA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client/client.component.ts":
/*!****************************************************!*\
  !*** ./src/app/clients/client/client.component.ts ***!
  \****************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");




let ClientComponent = class ClientComponent {
    constructor(sharedService, router, route) {
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.object = Object;
    }
    ngOnInit() {
        this.sharedService.closeError();
        this.route.params.subscribe(params => {
            this.clientId = +params['id'];
        });
        this.fetchClients();
        this.fetchInvoice();
        this.fetchPatients();
    }
    fetchClients() {
        this.sharedService.closeError();
        this.sharedService.getClients().subscribe((clients) => {
            this.client = clients['clients'].filter(val => {
                return +val.id === this.clientId;
            });
            this.client = this.client[0];
        }, error => {
            let err = {
                heading: 'Error',
                description: 'Client service failed'
            };
            this.sharedService.openError(err);
        });
    }
    fetchPatients() {
        this.sharedService.closeError();
        this.sharedService.getPatientsForClient().subscribe((patients) => {
            this.patients = patients['patients'];
            this.patients = this.patients.filter(val => {
                return +val.clientId === this.clientId;
            });
        }, error => {
            let err = {
                heading: 'Error',
                description: 'Patient service failed'
            };
            this.sharedService.openError(err);
        });
    }
    fetchInvoice() {
        this.sharedService.closeError();
        this.sharedService.getInvoicesForClient().subscribe((invoices) => {
            this.invoices = invoices['invoices'];
            this.invoices = this.invoices.filter(val => {
                return +val.clientId === this.clientId;
            });
        }, error => {
            let err = {
                heading: 'Error',
                description: 'Invoice service failed'
            };
            this.sharedService.openError(err);
        });
    }
    openPatient(id) {
        this.router.navigate(['patients/patient', id]);
    }
    openInvoice(id) {
        this.router.navigate(['invoices/invoice', id]);
    }
    navigateBack() {
        this.router.navigate(['clients']);
    }
};
ClientComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client/client.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client.component.scss */ "./src/app/clients/client/client.component.scss")).default]
    })
], ClientComponent);



/***/ }),

/***/ "./src/app/clients/clients.component.scss":
/*!************************************************!*\
  !*** ./src/app/clients/clients.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clients {\n  padding: 24px 12px;\n}\n.clients__child {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.clients__search {\n  display: flex;\n  justify-content: flex-end;\n}\n.clients__search input[type=text] {\n  width: 200px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  align-items: flex-end;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.clients__card {\n  -webkit-animation: fadeIn 3s ease-in forwards;\n          animation: fadeIn 3s ease-in forwards;\n  display: flex;\n  margin: 8px 0px;\n  padding: 12px;\n  box-shadow: 0 0 8px 0 rgba(34, 34, 34, 0.02), 0 8px 16px 0 rgba(34, 34, 34, 0.2);\n}\n.clients__card--image {\n  width: 200px;\n  height: 200px;\n  align-self: center;\n  margin: 0 24px;\n  box-shadow: 0 0 2px 2px #e9f0f0;\n}\n.clients__card__details {\n  align-self: center;\n  margin: 0 24px;\n}\n.clients__card__details div {\n  margin: 8px 0px;\n}\n.clients__card__details a {\n  cursor: pointer;\n}\n.clients__card__details a:hover,\n.clients__card__details a:active {\n  color: cadetblue;\n}\n.clients__card__details span:last-child {\n  font-weight: bold;\n}\n.clients__card__address {\n  margin: 0 24px;\n  align-self: center;\n}\n.clients__card__address div {\n  margin: 8px 0px;\n}\n.clients__card__address span:last-child {\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .clients__card {\n    flex-direction: column;\n  }\n  .clients__card--image {\n    margin: 8px 12px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n  }\n  .clients__card--image div {\n    align-self: center;\n  }\n  .clients__card__details {\n    margin: 8px 12px;\n    align-self: flex-start;\n  }\n  .clients__card__details div {\n    margin: 8px 0px;\n  }\n  .clients__card__details span:last-child {\n    font-weight: bold;\n  }\n  .clients__card__address {\n    margin: 8px 12px;\n    align-self: flex-start;\n  }\n  .clients__card__address span:last-child {\n    font-weight: bold;\n  }\n}\n.clients__card:hover, .clients__card:active {\n  background-color: #edf7f7;\n  margin: 8px 0px;\n  padding: 12px;\n  box-shadow: 0 0 8px 0 rgba(34, 34, 34, 0.02), 0 8px 16px 0 rgba(34, 34, 34, 0.2);\n}\n.clients__button {\n  margin-top: 32px;\n  display: flex;\n  justify-content: space-between;\n}\n.clients__button--index {\n  font-weight: lighter;\n  font-size: 22px;\n}\n@media (max-width: 768px) {\n  .clients__button--index {\n    display: none;\n  }\n}\n.button {\n  width: 140px;\n  height: 40px;\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9DOlxcQWpheV9EYXRhXFxBc3NpZ25cXEFuaW1hbmFcXHBhY2thZ2VzXFxmcm9udGVuZC9zcmNcXGFwcFxcY2xpZW50c1xcY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUNBRjtBREVFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0FKO0FERUU7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUNBTjtBREVNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNBUjtBRElFO0VBQ0ksNkNBQUE7VUFBQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdGQUFBO0FDRk47QURJTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QUNGUjtBREtNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDSFI7QURJVTtFQUNFLGVBQUE7QUNGWjtBREtVO0VBQ0UsZUFBQTtBQ0haO0FETVU7O0VBRUUsZ0JBQUE7QUNKWjtBRE9VO0VBQ0UsaUJBQUE7QUNMWjtBRFNNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDUFI7QURRUTtFQUNFLGVBQUE7QUNOVjtBRFNRO0VBQ0UsaUJBQUE7QUNQVjtBRFlFO0VBQ0U7SUFDRSxzQkFBQTtFQ1ZKO0VEWUk7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFQ1ZOO0VEWU07SUFDRSxrQkFBQTtFQ1ZSO0VEZUk7SUFDRSxnQkFBQTtJQUNBLHNCQUFBO0VDYk47RURlTTtJQUNFLGVBQUE7RUNiUjtFRGdCTTtJQUNFLGlCQUFBO0VDZFI7RURrQkk7SUFDRSxnQkFBQTtJQUNBLHNCQUFBO0VDaEJOO0VEa0JNO0lBQ0UsaUJBQUE7RUNoQlI7QUFDRjtBRHdCRTtFQUVJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnRkFBQTtBQ3ZCTjtBRDJCRTtFQUNFLGdCQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDekJOO0FEa0NJO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FDaENOO0FEbUNJO0VBQ0U7SUFDSSxhQUFBO0VDakNSO0FBQ0Y7QURzQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ25DRjtBRHVDQTtFQUNDO0lBQ0UsVUFBQTtFQ3BDRDtFRHNDQTtJQUNFLFVBQUE7RUNwQ0Y7QUFDRjtBRDhCQTtFQUNDO0lBQ0UsVUFBQTtFQ3BDRDtFRHNDQTtJQUNFLFVBQUE7RUNwQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vSXQgaW5jbHVkZXMgZm9yIHRoZSBDbGllbnRzIEhUTUwgcGFnZS5cclxuLmNsaWVudHN7XHJcbiAgcGFkZGluZzoyNHB4IDEycHg7XHJcblxyXG4gICZfX2NoaWxke1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHotaW5kZXg6MTtcclxuICB9XHJcbiAgJl9fc2VhcmNoe1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBhbGlnbi1pdGVtczpmbGV4LWVuZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY2FyZHtcclxuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gM3MgZWFzZS1pbiBmb3J3YXJkcztcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBtYXJnaW46OHB4IDBweDtcclxuICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzNCwzNCwzNCwwLjAyKSwwIDhweCAxNnB4IDAgcmdiYSgzNCwzNCwzNCwwLjIpO1xyXG5cclxuICAgICAgJi0taW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgMjRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCAjZTlmMGYwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19kZXRhaWxze1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgMjRweDtcclxuICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgbWFyZ2luOjhweCAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYXtcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYTpob3ZlcixcclxuICAgICAgICAgIGE6YWN0aXZle1xyXG4gICAgICAgICAgICBjb2xvcjpjYWRldGJsdWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19hZGRyZXNzIHtcclxuICAgICAgICBtYXJnaW46IDAgMjRweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgbWFyZ2luOjhweCAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAmX19jYXJke1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgJi0taW1hZ2V7XHJcbiAgICAgICAgbWFyZ2luOjhweCAxMnB4O1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgJl9fZGV0YWlsc3tcclxuICAgICAgICBtYXJnaW46OHB4IDEycHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgbWFyZ2luOjhweCAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJl9fYWRkcmVzcyB7XHJcbiAgICAgICAgbWFyZ2luOjhweCAxMnB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAmX19jYXJkOmhvdmVyLFxyXG4gICZfX2NhcmQ6YWN0aXZle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2Y3O1xyXG4gICAgICBtYXJnaW46OHB4IDBweDtcclxuICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzNCwzNCwzNCwwLjAyKSwwIDhweCAxNnB4IDAgcmdiYSgzNCwzNCwzNCwwLjIpO1xyXG4gIH1cclxuXHJcblxyXG4gICZfX2J1dHRvbntcclxuICAgIG1hcmdpbi10b3A6MzJweDtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAmLS1wcmV2aW91c3tcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJi0tbmV4dHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJi0taW5kZXh7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAmLS1pbmRleHtcclxuICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbntcclxuICB3aWR0aDoxNDBweDtcclxuICBoZWlnaHQ6NDBweDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuIDAle1xyXG4gICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLmNsaWVudHMge1xuICBwYWRkaW5nOiAyNHB4IDEycHg7XG59XG4uY2xpZW50c19fY2hpbGQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cbi5jbGllbnRzX19zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNsaWVudHNfX3NlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY2xpZW50c19fY2FyZCB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDNzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogOHB4IDBweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMzQsIDM0LCAzNCwgMC4wMiksIDAgOHB4IDE2cHggMCByZ2JhKDM0LCAzNCwgMzQsIDAuMik7XG59XG4uY2xpZW50c19fY2FyZC0taW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4ICNlOWYwZjA7XG59XG4uY2xpZW50c19fY2FyZF9fZGV0YWlscyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDI0cHg7XG59XG4uY2xpZW50c19fY2FyZF9fZGV0YWlscyBkaXYge1xuICBtYXJnaW46IDhweCAwcHg7XG59XG4uY2xpZW50c19fY2FyZF9fZGV0YWlscyBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNsaWVudHNfX2NhcmRfX2RldGFpbHMgYTpob3Zlcixcbi5jbGllbnRzX19jYXJkX19kZXRhaWxzIGE6YWN0aXZlIHtcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcbn1cbi5jbGllbnRzX19jYXJkX19kZXRhaWxzIHNwYW46bGFzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNsaWVudHNfX2NhcmRfX2FkZHJlc3Mge1xuICBtYXJnaW46IDAgMjRweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmNsaWVudHNfX2NhcmRfX2FkZHJlc3MgZGl2IHtcbiAgbWFyZ2luOiA4cHggMHB4O1xufVxuLmNsaWVudHNfX2NhcmRfX2FkZHJlc3Mgc3BhbjpsYXN0LWNoaWxkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNsaWVudHNfX2NhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNsaWVudHNfX2NhcmQtLWltYWdlIHtcbiAgICBtYXJnaW46IDhweCAxMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5jbGllbnRzX19jYXJkLS1pbWFnZSBkaXYge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuY2xpZW50c19fY2FyZF9fZGV0YWlscyB7XG4gICAgbWFyZ2luOiA4cHggMTJweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5jbGllbnRzX19jYXJkX19kZXRhaWxzIGRpdiB7XG4gICAgbWFyZ2luOiA4cHggMHB4O1xuICB9XG4gIC5jbGllbnRzX19jYXJkX19kZXRhaWxzIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmNsaWVudHNfX2NhcmRfX2FkZHJlc3Mge1xuICAgIG1hcmdpbjogOHB4IDEycHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgfVxuICAuY2xpZW50c19fY2FyZF9fYWRkcmVzcyBzcGFuOmxhc3QtY2hpbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4uY2xpZW50c19fY2FyZDpob3ZlciwgLmNsaWVudHNfX2NhcmQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjdmNztcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzNCwgMzQsIDM0LCAwLjAyKSwgMCA4cHggMTZweCAwIHJnYmEoMzQsIDM0LCAzNCwgMC4yKTtcbn1cbi5jbGllbnRzX19idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2xpZW50c19fYnV0dG9uLS1pbmRleCB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDIycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNsaWVudHNfX2J1dHRvbi0taW5kZXgge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ClientsComponent = class ClientsComponent {
    constructor(sharedService, router, route) {
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.object = Object;
        this.previous = 0;
        this.next = 2;
    }
    ngOnInit() {
        //Calling closeError to close error section if any error is shown
        this.sharedService.closeError();
        //Generic service is called to get the client details
        this.sharedService.getClients().subscribe((clients) => {
            this.clients = clients['clients'];
            this.maxLength = this.clients.length;
            this.creatPagination(this.clients, 0);
        }, error => {
            let err = {
                heading: 'Client Service',
                description: 'Error in retrieval of the client data'
            };
            this.sharedService.openError(err);
        });
    }
    // This function filters out the clients based on the page no
    creatPagination(clients, start) {
        this.previous = start;
        if (this.maxLength < this.next) {
            this.next = this.maxLength - 1;
        }
        this.limitedClient = clients.filter((value, index) => {
            return index >= start && index <= this.next;
        });
    }
    //This function is used to filter out the client based on the search value.
    setFilter(event) {
        let value = event.target.value;
        this.limitedClient = this.clients.filter(val => {
            return val.firstName.toUpperCase().match(value.toUpperCase());
        });
        this.next = 2;
        this.maxLength = this.limitedClient.length;
        this.creatPagination(this.limitedClient, 0);
    }
    //This function is used to move back to the previous page
    setPrevious() {
        this.previous -= 3;
        if (this.next + 1 !== this.maxLength) {
            this.next -= 3;
        }
        else {
            this.next -= 1;
        }
        this.creatPagination(this.clients, this.previous);
    }
    //This function is used to move on the next page
    setNext() {
        this.previous += 3;
        this.next += 3;
        this.creatPagination(this.clients, this.previous);
    }
    //This function is used to route to the client View.
    navigateToClient(id) {
        this.router.navigate(['client', id], { relativeTo: this.route });
    }
};
ClientsComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clients',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clients.component.scss */ "./src/app/clients/clients.component.scss")).default]
    })
], ClientsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background-color: #e9f0f0;\n  padding: 8px 16px;\n}\n.footer__items {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  padding: 0;\n}\n.footer__items--item {\n  cursor: pointer;\n  algin-self: center;\n  margin: 0px 16px;\n}\n.footer__items--item:hover {\n  algin-self: center;\n  color: #4f706f;\n  margin: 0px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxBamF5X0RhdGFcXEFzc2lnblxcQW5pbWFuYVxccGFja2FnZXNcXGZyb250ZW5kL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNBRjtBREVFO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQU47QURFTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURHTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9JdCBpbmNsdWRlcyBhbGwgdGhlIGNzcyB1c2VkIG9uIEZvb3RlciBIVE1MIHBhZ2VcclxuLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlOWYwZjA7XHJcbiAgcGFkZGluZzo4cHggMTZweDtcclxuXHJcbiAgJl9faXRlbXN7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6MDtcclxuXHJcbiAgICAgICYtLWl0ZW17XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgYWxnaW4tc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi0taXRlbTpob3ZlcntcclxuICAgICAgICBhbGdpbi1zZWxmOmNlbnRlcjtcclxuICAgICAgICBjb2xvcjojNGY3MDZmO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDE2cHg7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMGYwO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbi5mb290ZXJfX2l0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uZm9vdGVyX19pdGVtcy0taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxnaW4tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDBweCAxNnB4O1xufVxuLmZvb3Rlcl9faXRlbXMtLWl0ZW06aG92ZXIge1xuICBhbGdpbi1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiAjNGY3MDZmO1xuICBtYXJnaW46IDBweCAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  background-color: #e9f0f0;\n  padding: 8px 16px;\n  width: 100%;\n}\n.header__home {\n  align-self: center;\n  padding: 4px 16px;\n}\n.header__home--anchor {\n  font-weight: bold;\n  font-size: 22px;\n  vertical-align: middle;\n  text-decoration: none;\n}\n.header__burger {\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: #fff;\n  border: 2px solid #00857a;\n  border-radius: 10px;\n  padding: 2px 4px;\n  width: 40px;\n  height: 40px;\n}\n.header__burger--line {\n  display: block;\n  background-color: #4f706f;\n  height: 4px;\n}\n.header__nav {\n  align-self: center;\n  flex-grow: 1;\n}\n.header__nav__items {\n  display: flex;\n  justify-content: flex-end;\n  list-style: none;\n}\n.header__nav__items--item {\n  background-color: #fff;\n  border-radius: 10px;\n  border: 2px solid transparent;\n  color: black;\n  align-self: center;\n  padding: 4px 16px;\n  margin: 0px 16px;\n  cursor: pointer;\n}\n.header__nav__items--item:hover, .header__nav__items--item.active {\n  outline: none;\n  background-color: #4f706f;\n  color: white;\n  border: 2px solid #00857a;\n}\n.header__burgerList {\n  transform: translateX(100%);\n  display: none;\n  position: absolute;\n  z-index: 1;\n  top: 64px;\n  right: 0px;\n  width: 50%;\n  height: 50%;\n  background-color: cadetblue;\n}\n.header__burgerList__items {\n  list-style: none;\n  padding: 0px 10px;\n}\n.header__burgerList__items--item {\n  background-color: #fff;\n  border-radius: 10px;\n  border: 2px solid transparent;\n  color: black;\n  align-self: center;\n  padding: 4px 16px;\n  margin: 16px 0px;\n  cursor: pointer;\n}\n.header__burgerList__items--item:hover, .header__burgerList__items--item.active {\n  outline: none;\n  background-color: #4f706f;\n  color: white;\n  border: 2px solid #00857a;\n}\n@media (max-width: 576px) {\n  .header__nav {\n    display: none;\n  }\n  .header__burger {\n    display: flex;\n  }\n  .header__burgerList {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxBamF5X0RhdGFcXEFzc2lnblxcQW5pbWFuYVxccGFja2FnZXNcXGZyb250ZW5kL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNBRjtBREVFO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0FOO0FERU07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDQVI7QURJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUk7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDRk47QURNRTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0pOO0FETU07RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0pWO0FETVU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0paO0FET1U7RUFFRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNOWjtBRFdFO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDVEo7QURXTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNUUjtBRFdRO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNUVjtBRFlRO0VBRUUsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDWFY7QURnQkU7RUFDTTtJQUNFLGFBQUE7RUNkUjtFRGlCTTtJQUNFLGFBQUE7RUNmUjtFRGtCTTtJQUNFLGNBQUE7RUNoQlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoaXMgc3R5bGVzIGFyZSB1c2VkIGZvciBIZWFkZXIgSFRNTCBwYWdlLlxyXG4uaGVhZGVye1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlOWYwZjA7XHJcbiAgcGFkZGluZzo4cHggMTZweDtcclxuICB3aWR0aDoxMDAlO1xyXG5cclxuICAmX19ob21le1xyXG4gICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgICAgcGFkZGluZzo0cHggMTZweDtcclxuXHJcbiAgICAgICYtLWFuY2hvcntcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAmX19idXJnZXJ7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICMwMDg1N2E7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBwYWRkaW5nOjJweCA0cHg7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcblxyXG4gICAgJi0tbGluZXtcclxuICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNGY3MDZmO1xyXG4gICAgICBoZWlnaHQ6NHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbmF2e1xyXG4gICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgICAgZmxleC1ncm93OjE7XHJcblxyXG4gICAgICAmX19pdGVtc3tcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuXHJcbiAgICAgICAgICAmLS1pdGVte1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzo0cHggMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luOjBweCAxNnB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLS1pdGVtOmhvdmVyLFxyXG4gICAgICAgICAgJi0taXRlbS5hY3RpdmV7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzRmNzA2ZjtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgIzAwODU3YTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYnVyZ2VyTGlzdCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgdG9wOiA2NHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuXHJcbiAgICAgICZfX2l0ZW1zIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6MHB4IDEwcHg7XHJcblxyXG4gICAgICAgICYtLWl0ZW0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtLWl0ZW06aG92ZXIsXHJcbiAgICAgICAgJi0taXRlbS5hY3RpdmV7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNGY3MDZmO1xyXG4gICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICMwMDg1N2E7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEobWF4LXdpZHRoOjU3NnB4KXtcclxuICAgICAgICAmX19uYXZ7XHJcbiAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19idXJnZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19idXJnZXJMaXN0e1xyXG4gICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuaGVhZGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMGYwO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyX19ob21lIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiA0cHggMTZweDtcbn1cbi5oZWFkZXJfX2hvbWUtLWFuY2hvciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXJfX2J1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NTdhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAycHggNHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmhlYWRlcl9fYnVyZ2VyLS1saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjcwNmY7XG4gIGhlaWdodDogNHB4O1xufVxuLmhlYWRlcl9fbmF2IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG59XG4uaGVhZGVyX19uYXZfX2l0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5oZWFkZXJfX25hdl9faXRlbXMtLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGJsYWNrO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweCAxNnB4O1xuICBtYXJnaW46IDBweCAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyX19uYXZfX2l0ZW1zLS1pdGVtOmhvdmVyLCAuaGVhZGVyX19uYXZfX2l0ZW1zLS1pdGVtLmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjcwNmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwODU3YTtcbn1cbi5oZWFkZXJfX2J1cmdlckxpc3Qge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiA2NHB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xufVxuLmhlYWRlcl9fYnVyZ2VyTGlzdF9faXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5oZWFkZXJfX2J1cmdlckxpc3RfX2l0ZW1zLS1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiA0cHggMTZweDtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlcl9fYnVyZ2VyTGlzdF9faXRlbXMtLWl0ZW06aG92ZXIsIC5oZWFkZXJfX2J1cmdlckxpc3RfX2l0ZW1zLS1pdGVtLmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjcwNmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwODU3YTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaGVhZGVyX19uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhlYWRlcl9fYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5oZWFkZXJfX2J1cmdlckxpc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let HeaderComponent = class HeaderComponent {
    constructor(eRef) {
        this.eRef = eRef;
    }
    ngOnInit() {
    }
    //This is used to detect the click out side the burger menu to close the menu.
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showMenu = this.showMenu === true ? false : false;
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
], HeaderComponent.prototype, "clickout", null);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  padding: 24px 12px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcQWpheV9EYXRhXFxBc3NpZ25cXEFuaW1hbmFcXHBhY2thZ2VzXFxmcm9udGVuZC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBzdHlsZSBpcyB1c2VkIGZvciBIb21lIEhUTUwgcGFnZS5cclxuLmhvbWV7XHJcbiAgcGFkZGluZzoyNHB4IDEycHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuIiwiLmhvbWUge1xuICBwYWRkaW5nOiAyNHB4IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



let HomeComponent = class HomeComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    ngOnInit() {
        this.sharedService.closeError();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/invoices/invoice/invoice.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/invoices/invoice/invoice.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invoice {\n  overflow: scroll;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n.invoice__box {\n  position: relative;\n  -webkit-animation: fadeIn 1s ease-in;\n          animation: fadeIn 1s ease-in;\n  max-width: 700px;\n  height: auto;\n  margin: 50px auto;\n  background-color: #fff;\n  padding: 24px;\n}\n.invoice__box__details--closeImage {\n  display: inline-block;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}\n.invoice__box__details--icon {\n  margin: 8px;\n}\n.invoice__box__details div {\n  margin: 8px 0;\n}\n.invoice__box__details span:last-child {\n  font-weight: bold;\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZXMvaW52b2ljZS9DOlxcQWpheV9EYXRhXFxBc3NpZ25cXEFuaW1hbmFcXHBhY2thZ2VzXFxmcm9udGVuZC9zcmNcXGFwcFxcaW52b2ljZXNcXGludm9pY2VcXGludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ludm9pY2VzL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNBSjtBREdNO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FESU07RUFDRSxXQUFBO0FDRlI7QURLTTtFQUNFLGFBQUE7QUNIUjtBRE1NO0VBQ0ksaUJBQUE7QUNKVjtBRFVBO0VBQ0U7SUFBSSxVQUFBO0VDTko7RURPQTtJQUFJLFlBQUE7RUNKSjtFREtBO0lBQUssVUFBQTtFQ0ZMO0FBQ0Y7QURGQTtFQUNFO0lBQUksVUFBQTtFQ05KO0VET0E7SUFBSSxZQUFBO0VDSko7RURLQTtJQUFLLFVBQUE7RUNGTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZXMvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9UaGlzIHN0eWxlIGlzIHVzZWQgZm9yIEludm9pY2UgSFRNTCBwYWdlXHJcbi5pbnZvaWNle1xyXG4gIG92ZXJmbG93OnNjcm9sbDtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuXHJcbiAgJl9fYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW47XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuXHJcbiAgICAmX19kZXRhaWxze1xyXG4gICAgICAmLS1jbG9zZUltYWdlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtLWljb257XHJcbiAgICAgICAgbWFyZ2luOjhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2e1xyXG4gICAgICAgIG1hcmdpbjo4cHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUlue1xyXG4gIDAlIHtvcGFjaXR5OiAwfVxyXG4gIDUwJXtvcGFjaXR5OiAwLjV9XHJcbiAgMTAwJXtvcGFjaXR5OiAxfVxyXG59XHJcbiIsIi5pbnZvaWNlIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW52b2ljZV9fYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLWluO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuLmludm9pY2VfX2JveF9fZGV0YWlscy0tY2xvc2VJbWFnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW52b2ljZV9fYm94X19kZXRhaWxzLS1pY29uIHtcbiAgbWFyZ2luOiA4cHg7XG59XG4uaW52b2ljZV9fYm94X19kZXRhaWxzIGRpdiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4uaW52b2ljZV9fYm94X19kZXRhaWxzIHNwYW46bGFzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/invoices/invoice/invoice.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/invoices/invoice/invoice.component.ts ***!
  \*******************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");




let InvoiceComponent = class InvoiceComponent {
    constructor(sharedService, router, route) {
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        //It is extracting the value form the params
        this.route.params.subscribe(params => {
            this.invoiceNumber = params['id'];
        });
        this.getInvoiceDetails();
    }
    // It is used to make the get Invoice call
    getInvoiceDetails() {
        this.sharedService.getInvoicesForClient().subscribe((invoices) => {
            this.invoice = invoices['invoices'].find(val => {
                return val.number = this.invoiceNumber;
            });
            console.log(this.invoice);
        });
    }
    //It is used to navigate back to invoices.
    navigateBack() {
        this.router.navigate(['invoices']);
    }
};
InvoiceComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoice/invoice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice.component.scss */ "./src/app/invoices/invoice/invoice.component.scss")).default]
    })
], InvoiceComponent);



/***/ }),

/***/ "./src/app/invoices/invoices.component.scss":
/*!**************************************************!*\
  !*** ./src/app/invoices/invoices.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invoices {\n  padding: 24px 12px;\n}\n.invoices__child {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.invoices__child__add {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n.invoices__child__add--box {\n  margin: 100px 12px;\n  background-color: #fff;\n  padding: 12px;\n}\n.invoices__child__delete {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n.invoices__child__delete--box {\n  margin: 100px auto;\n  background-color: #fff;\n  max-width: 400px;\n  max-height: 400px;\n  padding: 16px;\n}\n.invoices__search {\n  display: flex;\n  justify-content: space-between;\n}\n.invoices__search div {\n  display: flex;\n  justify-content: center;\n  background-color: #00857a;\n  border-radius: 10px;\n  align-self: center;\n  width: 150px;\n  height: 40px;\n}\n.invoices__search div label {\n  color: white;\n  align-self: center;\n}\n.invoices__search div:hover,\n.invoices__search div:active {\n  background-color: #e9f0f0;\n}\n.invoices__search div:hover label,\n.invoices__search div:active label {\n  color: black;\n}\n.invoices__search input[type=text] {\n  align-self: center;\n  width: 200px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  align-items: flex-end;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n@media (max-width: 768px) {\n  .invoices__search {\n    flex-direction: column;\n  }\n  .invoices__search div {\n    width: 100%;\n  }\n  .invoices__search input[type=text] {\n    width: 100%;\n  }\n}\n.invoices__card {\n  position: relative;\n  -webkit-animation: fadeIn 1s linear forwards;\n          animation: fadeIn 1s linear forwards;\n  display: flex;\n  margin: 8px 0px;\n  padding: 12px;\n  box-shadow: 0 0 8px 0 rgba(34, 34, 34, 0.02), 0 8px 16px 0 rgba(34, 34, 34, 0.2);\n}\n.invoices__card--delete {\n  position: absolute;\n  padding: 5px;\n  border: 1px solid transparent;\n  top: 20px;\n  right: 20px;\n}\n.invoices__card--delete:hover, .invoices__card--delete:active {\n  cursor: pointer;\n  border: 1px solid black;\n}\n.invoices__card--image {\n  width: 200px;\n  height: 200px;\n  align-self: center;\n  margin: 0 24px;\n  box-shadow: 0 0 2px 2px #e9f0f0;\n}\n.invoices__card__details {\n  align-self: center;\n  margin: 0 24px;\n}\n.invoices__card__details div {\n  margin: 8px 0px;\n}\n.invoices__card__details span:last-child {\n  font-weight: bold;\n}\n.invoices__card__details a {\n  cursor: pointer;\n}\n.invoices__card__details a:hover,\n.invoices__card__details a:active {\n  color: cadetblue;\n}\n.invoices__card__address {\n  margin: 0 24px;\n  align-self: center;\n}\n.invoices__card__address div {\n  margin: 8px 0px;\n}\n.invoices__card__address span:last-child {\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .invoices__card {\n    flex-direction: column;\n  }\n  .invoices__card--delete {\n    top: 250px;\n  }\n  .invoices__card--image {\n    margin: 8px 12px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n  }\n  .invoices__card--image div {\n    align-self: center;\n  }\n  .invoices__card__details {\n    margin: 8px 12px;\n    align-self: flex-start;\n  }\n  .invoices__card__details div {\n    margin: 8px 0px;\n  }\n  .invoices__card__details span:last-child {\n    font-weight: bold;\n  }\n  .invoices__card__address {\n    margin: 8px 12px;\n    align-self: flex-start;\n  }\n  .invoices__card__address span:last-child {\n    font-weight: bold;\n  }\n}\n.invoices__card:hover, .invoices__card:active {\n  background-color: #edf7f7;\n  margin: 8px 0px;\n  padding: 12px;\n  box-shadow: 0 0 8px 0 rgba(34, 34, 34, 0.02), 0 8px 16px 0 rgba(34, 34, 34, 0.2);\n}\n.invoices__button {\n  margin-top: 32px;\n  display: flex;\n  justify-content: space-between;\n}\n.invoices__button--index {\n  font-weight: bold;\n  font-size: 22px;\n}\n@media (max-width: 768px) {\n  .invoices__button--index {\n    display: none;\n  }\n}\n.button {\n  width: 140px;\n  height: 40px;\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZXMvQzpcXEFqYXlfRGF0YVxcQXNzaWduXFxBbmltYW5hXFxwYWNrYWdlc1xcZnJvbnRlbmQvc3JjXFxhcHBcXGludm9pY2VzXFxpbnZvaWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW52b2ljZXMvaW52b2ljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDQUo7QURFSTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQU47QURFTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQVI7QURPSTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTE47QURPTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0xSO0FEdUJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDckJKO0FEdUJJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNyQk47QURzQk07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNwQlI7QUR3Qkk7O0VBRUUseUJBQUE7QUN0Qk47QUR1Qk07O0VBQ0UsWUFBQTtBQ3BCUjtBRHdCSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDdEJOO0FEMEJFO0VBQ0U7SUFDRSxzQkFBQTtFQ3hCSjtFRDBCSTtJQUNFLFdBQUE7RUN4Qk47RUQyQkk7SUFDRSxXQUFBO0VDekJOO0FBQ0Y7QUQ2QkU7RUFDRSxrQkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnRkFBQTtBQzNCSjtBRDZCSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUMzQk47QUQ4Qkk7RUFFRSxlQUFBO0VBQ0EsdUJBQUE7QUM3Qk47QURnQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FDOUJOO0FEaUNJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDL0JOO0FEZ0NNO0VBQ0UsZUFBQTtBQzlCUjtBRGlDTTtFQUNFLGlCQUFBO0FDL0JSO0FEa0NNO0VBQ0UsZUFBQTtBQ2hDUjtBRG1DTTs7RUFFRSxnQkFBQTtBQ2pDUjtBRHVDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ3JDTjtBRHNDTTtFQUNFLGVBQUE7QUNwQ1I7QUR1Q007RUFDRSxpQkFBQTtBQ3JDUjtBRDBDRTtFQUNFO0lBQ0Usc0JBQUE7RUN4Q0o7RUQwQ0k7SUFDRSxVQUFBO0VDeENOO0VEMkNJO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RUN6Q047RUQyQ007SUFDRSxrQkFBQTtFQ3pDUjtFRDhDSTtJQUNFLGdCQUFBO0lBQ0Esc0JBQUE7RUM1Q047RUQ4Q007SUFDRSxlQUFBO0VDNUNSO0VEK0NNO0lBQ0UsaUJBQUE7RUM3Q1I7RURpREk7SUFDRSxnQkFBQTtJQUNBLHNCQUFBO0VDL0NOO0VEaURNO0lBQ0UsaUJBQUE7RUMvQ1I7QUFDRjtBRHVERTtFQUVFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnRkFBQTtBQ3RESjtBRDBERTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDeERKO0FEaUVJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDL0ROO0FEa0VJO0VBQ0U7SUFDRSxhQUFBO0VDaEVOO0FBQ0Y7QURxRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ2xFRjtBRHNFQTtFQUNFO0lBQ0UsVUFBQTtFQ25FRjtFRHNFQTtJQUNFLFlBQUE7RUNwRUY7RUR1RUE7SUFDRSxVQUFBO0VDckVGO0FBQ0Y7QUQwREE7RUFDRTtJQUNFLFVBQUE7RUNuRUY7RURzRUE7SUFDRSxZQUFBO0VDcEVGO0VEdUVBO0lBQ0UsVUFBQTtFQ3JFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZXMvaW52b2ljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoZXNlIHN0eWxlcyBhcmUgdXNlZCBmb3IgSW52b2ljZSBIVE1MIHBhZ2UuXHJcbi5pbnZvaWNlc3tcclxuICBwYWRkaW5nOjI0cHggMTJweDtcclxuXHJcbiAgJl9fY2hpbGR7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgei1pbmRleDoxO1xyXG5cclxuICAgICZfX2FkZHtcclxuICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OjEwMCU7XHJcblxyXG4gICAgICAmLS1ib3h7XHJcbiAgICAgICAgbWFyZ2luOjEwMHB4IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOjEycHg7XHJcblxyXG5cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19kZWxldGV7XHJcbiAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG5cclxuICAgICAgJi0tYm94e1xyXG4gICAgICAgIG1hcmdpbjoxMDBweCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWF4LXdpZHRoOjQwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6NDAwcHg7XHJcbiAgICAgICAgcGFkZGluZzoxNnB4O1xyXG5cclxuICAgICAgICAmLS1oZWFkaW5ne1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtLW1lc3NhZ2V7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi0tYnV0dG9ue1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zZWFyY2h7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBkaXZ7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg1N2E7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgIGxhYmVse1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGl2OmhvdmVyLFxyXG4gICAgZGl2OmFjdGl2ZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZTlmMGYwO1xyXG4gICAgICBsYWJlbHtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgJl9fc2VhcmNoe1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgZGl2e1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY2FyZHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgbGluZWFyIGZvcndhcmRzO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luOjhweCAwcHg7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzNCwzNCwzNCwwLjAyKSwwIDhweCAxNnB4IDAgcmdiYSgzNCwzNCwzNCwwLjIpO1xyXG5cclxuICAgICYtLWRlbGV0ZXtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICBib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICB0b3A6MjBweDtcclxuICAgICAgcmlnaHQ6MjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS1kZWxldGU6aG92ZXIsXHJcbiAgICAmLS1kZWxldGU6YWN0aXZle1xyXG4gICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAmLS1pbWFnZXtcclxuICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAgMjRweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAycHggI2U5ZjBmMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19kZXRhaWxze1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCAyNHB4O1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgbWFyZ2luOjhweCAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhe1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhOmhvdmVyLFxyXG4gICAgICBhOmFjdGl2ZXtcclxuICAgICAgICBjb2xvcjpjYWRldGJsdWU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICZfX2FkZHJlc3Mge1xyXG4gICAgICBtYXJnaW46IDAgMjRweDtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgbWFyZ2luOjhweCAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICZfX2NhcmR7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAmLS1kZWxldGV7XHJcbiAgICAgICAgdG9wOjI1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLS1pbWFnZXtcclxuICAgICAgICBtYXJnaW46OHB4IDEycHg7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19kZXRhaWxze1xyXG4gICAgICAgIG1hcmdpbjo4cHggMTJweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICBtYXJnaW46OHB4IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19hZGRyZXNzIHtcclxuICAgICAgICBtYXJnaW46OHB4IDEycHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gICZfX2NhcmQ6aG92ZXIsXHJcbiAgJl9fY2FyZDphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2Y3O1xyXG4gICAgbWFyZ2luOjhweCAwcHg7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzNCwzNCwzNCwwLjAyKSwwIDhweCAxNnB4IDAgcmdiYSgzNCwzNCwzNCwwLjIpO1xyXG4gIH1cclxuXHJcblxyXG4gICZfX2J1dHRvbntcclxuICAgIG1hcmdpbi10b3A6MzJweDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICYtLXByZXZpb3Vze1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmLS1uZXh0e1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmLS1pbmRleHtcclxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgZm9udC1zaXplOjIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICYtLWluZGV4e1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbntcclxuICB3aWR0aDoxNDBweDtcclxuICBoZWlnaHQ6NDBweDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJXtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvL3RyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XHJcbiAgfVxyXG4gIDUwJXtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuaW52b2ljZXMge1xuICBwYWRkaW5nOiAyNHB4IDEycHg7XG59XG4uaW52b2ljZXNfX2NoaWxkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uaW52b2ljZXNfX2NoaWxkX19hZGQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbnZvaWNlc19fY2hpbGRfX2FkZC0tYm94IHtcbiAgbWFyZ2luOiAxMDBweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmludm9pY2VzX19jaGlsZF9fZGVsZXRlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW52b2ljZXNfX2NoaWxkX19kZWxldGUtLWJveCB7XG4gIG1hcmdpbjogMTAwcHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uaW52b2ljZXNfX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5pbnZvaWNlc19fc2VhcmNoIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NTdhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmludm9pY2VzX19zZWFyY2ggZGl2IGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaW52b2ljZXNfX3NlYXJjaCBkaXY6aG92ZXIsXG4uaW52b2ljZXNfX3NlYXJjaCBkaXY6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjBmMDtcbn1cbi5pbnZvaWNlc19fc2VhcmNoIGRpdjpob3ZlciBsYWJlbCxcbi5pbnZvaWNlc19fc2VhcmNoIGRpdjphY3RpdmUgbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59XG4uaW52b2ljZXNfX3NlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmludm9pY2VzX19zZWFyY2gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmludm9pY2VzX19zZWFyY2ggZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW52b2ljZXNfX3NlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmludm9pY2VzX19jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IGZhZGVJbiAxcyBsaW5lYXIgZm9yd2FyZHM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogOHB4IDBweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMzQsIDM0LCAzNCwgMC4wMiksIDAgOHB4IDE2cHggMCByZ2JhKDM0LCAzNCwgMzQsIDAuMik7XG59XG4uaW52b2ljZXNfX2NhcmQtLWRlbGV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbn1cbi5pbnZvaWNlc19fY2FyZC0tZGVsZXRlOmhvdmVyLCAuaW52b2ljZXNfX2NhcmQtLWRlbGV0ZTphY3RpdmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuLmludm9pY2VzX19jYXJkLS1pbWFnZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDAgMjRweDtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggI2U5ZjBmMDtcbn1cbi5pbnZvaWNlc19fY2FyZF9fZGV0YWlscyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDI0cHg7XG59XG4uaW52b2ljZXNfX2NhcmRfX2RldGFpbHMgZGl2IHtcbiAgbWFyZ2luOiA4cHggMHB4O1xufVxuLmludm9pY2VzX19jYXJkX19kZXRhaWxzIHNwYW46bGFzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmludm9pY2VzX19jYXJkX19kZXRhaWxzIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW52b2ljZXNfX2NhcmRfX2RldGFpbHMgYTpob3Zlcixcbi5pbnZvaWNlc19fY2FyZF9fZGV0YWlscyBhOmFjdGl2ZSB7XG4gIGNvbG9yOiBjYWRldGJsdWU7XG59XG4uaW52b2ljZXNfX2NhcmRfX2FkZHJlc3Mge1xuICBtYXJnaW46IDAgMjRweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmludm9pY2VzX19jYXJkX19hZGRyZXNzIGRpdiB7XG4gIG1hcmdpbjogOHB4IDBweDtcbn1cbi5pbnZvaWNlc19fY2FyZF9fYWRkcmVzcyBzcGFuOmxhc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW52b2ljZXNfX2NhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmludm9pY2VzX19jYXJkLS1kZWxldGUge1xuICAgIHRvcDogMjUwcHg7XG4gIH1cbiAgLmludm9pY2VzX19jYXJkLS1pbWFnZSB7XG4gICAgbWFyZ2luOiA4cHggMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuaW52b2ljZXNfX2NhcmQtLWltYWdlIGRpdiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5pbnZvaWNlc19fY2FyZF9fZGV0YWlscyB7XG4gICAgbWFyZ2luOiA4cHggMTJweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5pbnZvaWNlc19fY2FyZF9fZGV0YWlscyBkaXYge1xuICAgIG1hcmdpbjogOHB4IDBweDtcbiAgfVxuICAuaW52b2ljZXNfX2NhcmRfX2RldGFpbHMgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuaW52b2ljZXNfX2NhcmRfX2FkZHJlc3Mge1xuICAgIG1hcmdpbjogOHB4IDEycHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgfVxuICAuaW52b2ljZXNfX2NhcmRfX2FkZHJlc3Mgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuLmludm9pY2VzX19jYXJkOmhvdmVyLCAuaW52b2ljZXNfX2NhcmQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjdmNztcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzNCwgMzQsIDM0LCAwLjAyKSwgMCA4cHggMTZweCAwIHJnYmEoMzQsIDM0LCAzNCwgMC4yKTtcbn1cbi5pbnZvaWNlc19fYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmludm9pY2VzX19idXR0b24tLWluZGV4IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW52b2ljZXNfX2J1dHRvbi0taW5kZXgge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/invoices/invoices.component.ts":
/*!************************************************!*\
  !*** ./src/app/invoices/invoices.component.ts ***!
  \************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let InvoicesComponent = class InvoicesComponent {
    constructor(sharedService, router, route) {
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.previous = 0;
        this.next = 2;
    }
    ngOnInit() {
        // It is called to close the Error section
        this.sharedService.closeError();
        //It is used to get the Invoices for the client
        this.sharedService.getInvoicesForClient().subscribe((invoices) => {
            this.invoices = invoices['invoices'];
            this.maxLength = this.invoices.length;
            this.creatPagination(this.invoices, 0);
        }, err => {
            let error = {
                heading: 'Error',
                description: 'Invoice service failed'
            };
            this.sharedService.openError(error);
        });
    }
    //It is used to filter out the Invoices for pagination
    creatPagination(invoices, start) {
        this.previous = start;
        if (this.maxLength < this.next) {
            this.next = this.maxLength - 1;
        }
        this.limitedInvoices = invoices.filter((value, index) => {
            return index >= start && index <= this.next;
        });
    }
    // It is used to filter out the invoices based on the search value entered.
    setFilter(event) {
        let value = event.target.value;
        this.limitedInvoices = this.invoices.filter(val => {
            return val.number.toUpperCase().match(value.toUpperCase());
        });
        this.next = 2;
        this.maxLength = this.limitedInvoices.length;
        this.creatPagination(this.limitedInvoices, 0);
    }
    //It is used to set the previous page.
    setPrevious() {
        this.previous -= 3;
        if (this.next + 1 !== this.maxLength) {
            this.next -= 3;
        }
        else {
            this.next -= 1;
        }
        this.creatPagination(this.invoices, this.previous);
    }
    //It is used to set the next page.
    setNext() {
        this.previous += 3;
        this.next += 3;
        this.creatPagination(this.invoices, this.previous);
    }
    //It is used to navigate Invoice view with id.
    navigateToPatient(id) {
        this.router.navigate(['invoice', id], { relativeTo: this.route });
    }
};
InvoicesComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
InvoicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoices',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invoices/invoices.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoices.component.scss */ "./src/app/invoices/invoices.component.scss")).default]
    })
], InvoicesComponent);



/***/ }),

/***/ "./src/app/patients/add-patient/add-patient.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/patients/add-patient/add-patient.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-patient {\n  position: fixed;\n  overflow: scroll;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.add-patient__box {\n  margin: 50px auto;\n  max-width: 500px;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 24px;\n}\n.add-patient__box--close {\n  align-self: flex-end;\n  cursor: pointer;\n}\n.add-patient__box--group {\n  margin: 8px;\n}\n.add-patient__box--group--label {\n  display: block;\n}\n.add-patient__box--group input[type=text] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.add-patient__box--group input[type=radio] {\n  display: inline-block;\n  margin: 8px 0;\n}\n.add-patient__box--group input[type=date] {\n  width: 100%;\n  height: 40px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.add-patient__box--group textarea {\n  width: 100%;\n  height: 150px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.add-patient__box--group select {\n  width: 100%;\n  height: 40px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.add-patient__box--button {\n  background-color: cadetblue;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n  width: 100%;\n  height: 50px;\n  color: white;\n  margin: 10px 0;\n}\n.add-patient__box--button input[type=submit] {\n  align-self: center;\n  width: 100%;\n  background-color: cadetblue;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.add-patient__box--button input[type=submit]:hover,\n.add-patient__box--button input[type=submit]:active {\n  background-color: #e9f0f0;\n  color: black;\n}\n.add-patient__box--button:hover, .add-patient__box--button:active {\n  background-color: #e9f0f0;\n  height: 100%;\n  color: black;\n}\n.warning {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudHMvYWRkLXBhdGllbnQvQzpcXEFqYXlfRGF0YVxcQXNzaWduXFxBbmltYW5hXFxwYWNrYWdlc1xcZnJvbnRlbmQvc3JjXFxhcHBcXHBhdGllbnRzXFxhZGQtcGF0aWVudFxcYWRkLXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhdGllbnRzL2FkZC1wYXRpZW50L2FkZC1wYXRpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0FKO0FERUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNBTjtBREVNO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FDQVI7QURHTTtFQUNFLFdBQUE7QUNEUjtBREdRO0VBQ0UsY0FBQTtBQ0RWO0FESVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDRlY7QURLUTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQ0hWO0FETVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0pWO0FET1E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0xWO0FEUVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ05WO0FEV007RUFDRSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ1RSO0FEWVE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVlY7QURhUTs7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUNYVjtBRGVNO0VBRUUseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2RSO0FEb0JBO0VBQ0UsVUFBQTtBQ2pCRiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRzL2FkZC1wYXRpZW50L2FkZC1wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9UaGlzIHN0eWxlIGlzIHVzZWQgZm9yIGFkZGluZyBQYXRpZW50IEhUTUwgcGFnZS5cclxuLmFkZC1wYXRpZW50e1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBvdmVyZmxvdzpzY3JvbGw7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHotaW5kZXg6MTtcclxuXHJcbiAgICAmX19ib3gge1xyXG4gICAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDI0cHg7XHJcblxyXG4gICAgICAmLS1jbG9zZSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW46IDhweDtcclxuXHJcbiAgICAgICAgJi0tbGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9ZGF0ZV0ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3R7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLS1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggMDtcclxuXHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9c3VibWl0XXtcclxuICAgICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmNhZGV0Ymx1ZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsXHJcbiAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2U5ZjBmMDtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtLWJ1dHRvbjpob3ZlcixcclxuICAgICAgJi0tYnV0dG9uOmFjdGl2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlOWYwZjA7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ud2FybmluZ3tcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuIiwiLmFkZC1wYXRpZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbi5hZGQtcGF0aWVudF9fYm94IHtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuLmFkZC1wYXRpZW50X19ib3gtLWNsb3NlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQtcGF0aWVudF9fYm94LS1ncm91cCB7XG4gIG1hcmdpbjogOHB4O1xufVxuLmFkZC1wYXRpZW50X19ib3gtLWdyb3VwLS1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFkZC1wYXRpZW50X19ib3gtLWdyb3VwIGlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYWRkLXBhdGllbnRfX2JveC0tZ3JvdXAgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4uYWRkLXBhdGllbnRfX2JveC0tZ3JvdXAgaW5wdXRbdHlwZT1kYXRlXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmFkZC1wYXRpZW50X19ib3gtLWdyb3VwIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmFkZC1wYXRpZW50X19ib3gtLWdyb3VwIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmFkZC1wYXRpZW50X19ib3gtLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uYWRkLXBhdGllbnRfX2JveC0tYnV0dG9uIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLXBhdGllbnRfX2JveC0tYnV0dG9uIGlucHV0W3R5cGU9c3VibWl0XTpob3Zlcixcbi5hZGQtcGF0aWVudF9fYm94LS1idXR0b24gaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWYwZjA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5hZGQtcGF0aWVudF9fYm94LS1idXR0b246aG92ZXIsIC5hZGQtcGF0aWVudF9fYm94LS1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjBmMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi53YXJuaW5nIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/patients/add-patient/add-patient.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/patients/add-patient/add-patient.component.ts ***!
  \***************************************************************/
/*! exports provided: AddPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientComponent", function() { return AddPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");




let AddPatientComponent = class AddPatientComponent {
    constructor(sharedService, router, route) {
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        //This is used for Closing the error section.
        this.sharedService.closeError();
        //This is used to get the client details.
        this.sharedService.getClients().subscribe((clients) => {
            this.sharedService.onModified();
            this.clients = clients['clients'];
        }, err => {
            let error = {
                heading: 'Error',
                description: 'Client service failed'
            };
            this.sharedService.openError(error);
        });
    }
    //Custom Date validation is done to check if date is greater than current date.
    validateDateOfBirth(formDate) {
        let currentDate = new Date();
        let selectedDate = new Date(formDate.viewModel);
        const result = currentDate.getDate() >= selectedDate.getDate();
        if (!result) {
            console.log(result);
            formDate.control.reset();
        }
    }
    //On submit a payload is created and send to the function making http call.
    onSubmit(form) {
        if (form.valid) {
            let payload = {
                clientId: form.value.clientId,
                name: form.value.name,
                class: form.value.class,
                species: form.value.species,
                warning: form.value.warning,
                remark: form.value.remark,
                color: form.value.color,
                dateOfBirth: form.value.dateOfBirth,
                active: form.value.active == true
            };
            this.sharedService.addPatient(payload).subscribe(val => {
                this.sharedService.onModified();
                this.router.navigate(['patients']);
            });
        }
    }
    // Navigate back to the patients
    navigateBack() {
        this.router.navigate(['patients']);
    }
};
AddPatientComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/add-patient/add-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-patient.component.scss */ "./src/app/patients/add-patient/add-patient.component.scss")).default]
    })
], AddPatientComponent);



/***/ }),

/***/ "./src/app/patients/delete-patient/delete-patient.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/patients/delete-patient/delete-patient.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".delete-patient {\n  position: fixed;\n  overflow: scroll;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.delete-patient__box {\n  border: 1px solid #00857a;\n  border-radius: 10px;\n  margin: 50px auto;\n  max-width: 500px;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 12px 24px;\n}\n.delete-patient__box--heading {\n  align-self: center;\n}\n.delete-patient__box--button {\n  display: flex;\n  justify-content: space-between;\n}\n.delete-patient__box--button--left {\n  background-color: cadetblue;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n  width: 150px;\n  height: 50px;\n  color: white;\n  margin: 10px 0;\n}\n.delete-patient__box--button--left label {\n  align-self: center;\n}\n.delete-patient__box--button--right {\n  background-color: cadetblue;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n  width: 150px;\n  height: 50px;\n  color: white;\n  margin: 10px 0;\n}\n.delete-patient__box--button--right label {\n  align-self: center;\n}\n.delete-patient__box--button--left:hover, .delete-patient__box--button--left:active {\n  background-color: #e9f0f0;\n  color: black;\n}\n.delete-patient__box--button--right:hover, .delete-patient__box--button--right:active {\n  background-color: #e9f0f0;\n  color: black;\n}\n@media (max-width: 760px) {\n  .delete-patient__box--button {\n    flex-direction: column;\n  }\n  .delete-patient__box--button--left {\n    width: 100%;\n    margin: 8px 0;\n  }\n  .delete-patient__box--button--right {\n    margin: 8px 0;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudHMvZGVsZXRlLXBhdGllbnQvQzpcXEFqYXlfRGF0YVxcQXNzaWduXFxBbmltYW5hXFxwYWNrYWdlc1xcZnJvbnRlbmQvc3JjXFxhcHBcXHBhdGllbnRzXFxkZWxldGUtcGF0aWVudFxcZGVsZXRlLXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhdGllbnRzL2RlbGV0ZS1wYXRpZW50L2RlbGV0ZS1wYXRpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0FGO0FERUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtBQ0FOO0FET0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNMTjtBRE9NO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNMUjtBRE9RO0VBQ0Usa0JBQUE7QUNMVjtBRFNNO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNQUjtBRFNRO0VBQ0Usa0JBQUE7QUNQVjtBRFdNO0VBRUUseUJBQUE7RUFDQSxZQUFBO0FDVlI7QURhTTtFQUVFLHlCQUFBO0VBQ0EsWUFBQTtBQ1pSO0FEZ0JFO0VBR0k7SUFDRSxzQkFBQTtFQ2hCTjtFRGtCTTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VDaEJSO0VEbUJNO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUNqQlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRzL2RlbGV0ZS1wYXRpZW50L2RlbGV0ZS1wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9UaGlzIGlzIHRoZSBzdHlsZSBmb3IgZGVsZXRlIHBhdGllbnQgSFRNTCBwYWdlXHJcbi5kZWxldGUtcGF0aWVudHtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBvdmVyZmxvdzpzY3JvbGw7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHotaW5kZXg6MTtcclxuXHJcbiAgJl9fYm94IHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzAwODU3YTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzoxMnB4IDI0cHg7XHJcblxyXG4gICAgJi0taGVhZGluZyB7XHJcbiAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYtLW1lc3NhZ2Uge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmLS1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICYtLWxlZnR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOjEwcHggMDtcclxuXHJcbiAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLS1yaWdodHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46MTBweCAwO1xyXG5cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtLWxlZnQ6aG92ZXIsXHJcbiAgICAgICYtLWxlZnQ6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMGYwO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi0tcmlnaHQ6aG92ZXIsXHJcbiAgICAgICYtLXJpZ2h0OmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjBmMDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhKG1heC13aWR0aDo3NjBweCl7XHJcbiAgICAmX19ib3h7XHJcblxyXG4gICAgICAmLS1idXR0b257XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgJi0tbGVmdHtcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46OHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLS1yaWdodHtcclxuICAgICAgICAgIG1hcmdpbjo4cHggMDtcclxuICAgICAgICAgIHdpZHRoOjEwMCVcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5kZWxldGUtcGF0aWVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG4uZGVsZXRlLXBhdGllbnRfX2JveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDg1N2E7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xufVxuLmRlbGV0ZS1wYXRpZW50X19ib3gtLWhlYWRpbmcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uZGVsZXRlLXBhdGllbnRfX2JveC0tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRlbGV0ZS1wYXRpZW50X19ib3gtLWJ1dHRvbi0tbGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLmRlbGV0ZS1wYXRpZW50X19ib3gtLWJ1dHRvbi0tbGVmdCBsYWJlbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5kZWxldGUtcGF0aWVudF9fYm94LS1idXR0b24tLXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uZGVsZXRlLXBhdGllbnRfX2JveC0tYnV0dG9uLS1yaWdodCBsYWJlbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5kZWxldGUtcGF0aWVudF9fYm94LS1idXR0b24tLWxlZnQ6aG92ZXIsIC5kZWxldGUtcGF0aWVudF9fYm94LS1idXR0b24tLWxlZnQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjBmMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmRlbGV0ZS1wYXRpZW50X19ib3gtLWJ1dHRvbi0tcmlnaHQ6aG92ZXIsIC5kZWxldGUtcGF0aWVudF9fYm94LS1idXR0b24tLXJpZ2h0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWYwZjA7XG4gIGNvbG9yOiBibGFjaztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuZGVsZXRlLXBhdGllbnRfX2JveC0tYnV0dG9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5kZWxldGUtcGF0aWVudF9fYm94LS1idXR0b24tLWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbiAgLmRlbGV0ZS1wYXRpZW50X19ib3gtLWJ1dHRvbi0tcmlnaHQge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/patients/delete-patient/delete-patient.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patients/delete-patient/delete-patient.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeletePatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePatientComponent", function() { return DeletePatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");




let DeletePatientComponent = class DeletePatientComponent {
    constructor(sharedService, router, route) {
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        //It extracts the id form the params passed by the caller.
        this.route.params.subscribe(params => {
            this.patientId = +params['id'];
        });
    }
    // It is used to call the function with patientId to make httpClient request for deletion.
    deletePatient() {
        this.sharedService.closeError();
        this.sharedService.deletePatient(this.patientId).subscribe(val => {
            this.sharedService.onModified();
            this.router.navigate(['patients']);
        }, err => {
            let error = {
                heading: 'Error',
                description: 'Deletion service failed'
            };
            this.sharedService.openError(error);
        });
    }
    //Navigate back to patients page.
    navigateBack() {
        this.router.navigate(['patients']);
    }
};
DeletePatientComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DeletePatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/delete-patient/delete-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-patient.component.scss */ "./src/app/patients/delete-patient/delete-patient.component.scss")).default]
    })
], DeletePatientComponent);



/***/ }),

/***/ "./src/app/patients/patient/patient.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/patients/patient/patient.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".patient {\n  overflow: scroll;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n.patient__box {\n  border: 1px solid cadetblue;\n  border-radius: 10px;\n  position: relative;\n  -webkit-animation: fadeIn 1s ease-in;\n          animation: fadeIn 1s ease-in;\n  max-width: 700px;\n  height: auto;\n  margin: 12px auto;\n  background-color: #fff;\n  padding: 24px;\n}\n.patient__box--closeImage {\n  display: inline-block;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}\n.patient__box--patient div {\n  mrgin: 8px 0;\n}\n.patient__box--patient span:last-child {\n  font-weight: bold;\n}\n.patient__box--weight ul {\n  list-style: none;\n  padding: 0;\n}\n.patient__box--weight ul li {\n  margin: 8px 12px 8px 0px;\n  padding: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  background-color: cadetblue;\n  color: white;\n}\n.patient__box--weight ul li:hover,\n.patient__box--weight ul li:active {\n  background-color: #e9f0f0;\n  color: black;\n}\n.patient__box--call ul {\n  list-style: none;\n  padding: 0;\n}\n.patient__box--call ul li {\n  margin: 8px 12px 8px 0px;\n  padding: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  background-color: cadetblue;\n  color: white;\n}\n.patient__box--call ul li:hover,\n.patient__box--call ul li:active {\n  background-color: #e9f0f0;\n  color: black;\n}\n.patient__box--product ul {\n  list-style: none;\n  padding: 0;\n}\n.patient__box--product ul li {\n  margin: 8px 12px 8px 0px;\n  padding: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  background-color: cadetblue;\n  color: white;\n}\n.patient__box--product ul li:hover,\n.patient__box--product ul li:active {\n  background-color: #e9f0f0;\n  color: black;\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudHMvcGF0aWVudC9DOlxcQWpheV9EYXRhXFxBc3NpZ25cXEFuaW1hbmFcXHBhY2thZ2VzXFxmcm9udGVuZC9zcmNcXGFwcFxccGF0aWVudHNcXHBhdGllbnRcXHBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhdGllbnRzL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDTjtBREdNO0VBQ0UsWUFBQTtBQ0RSO0FESU07RUFDRSxpQkFBQTtBQ0ZSO0FET007RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNMUjtBRE9RO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDTFY7QURRUTs7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUNOVjtBRFlNO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDVlI7QURZUTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ1ZWO0FEYVE7O0VBRUUseUJBQUE7RUFDQSxZQUFBO0FDWFY7QURpQk07RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNmUjtBRGlCUTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ2ZWO0FEa0JROztFQUVFLHlCQUFBO0VBQ0EsWUFBQTtBQ2hCVjtBRHVCQTtFQUNFO0lBQUksVUFBQTtFQ25CSjtFRG9CQTtJQUFJLFlBQUE7RUNqQko7RURrQkE7SUFBSyxVQUFBO0VDZkw7QUFDRjtBRFdBO0VBQ0U7SUFBSSxVQUFBO0VDbkJKO0VEb0JBO0lBQUksWUFBQTtFQ2pCSjtFRGtCQTtJQUFLLFVBQUE7RUNmTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudHMvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhdGllbnR7XHJcbiAgb3ZlcmZsb3c6c2Nyb2xsO1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG5cclxuICAmX19ib3h7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGNhZGV0Ymx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uOmZhZGVJbiAxcyBlYXNlLWluO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWFyZ2luOjEycHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOjI0cHg7XHJcblxyXG4gICAgJi0tY2xvc2VJbWFnZXtcclxuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICB0b3A6MTBweDtcclxuICAgICAgcmlnaHQ6MTBweDtcclxuICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tcGF0aWVudHtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIG1yZ2luOjhweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLS13ZWlnaHR7XHJcbiAgICAgIHVse1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgIG1hcmdpbjo4cHggMTJweCA4cHggMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzoxNnB4O1xyXG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpjYWRldGJsdWU7XHJcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpOmhvdmVyLFxyXG4gICAgICAgIGxpOmFjdGl2ZXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2U5ZjBmMDtcclxuICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLWNhbGx7XHJcbiAgICAgIHVse1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgIG1hcmdpbjo4cHggMTJweCA4cHggMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzoxNnB4O1xyXG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpjYWRldGJsdWU7XHJcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpOmhvdmVyLFxyXG4gICAgICAgIGxpOmFjdGl2ZXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2U5ZjBmMDtcclxuICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLXByb2R1Y3R7XHJcbiAgICAgIHVse1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgIG1hcmdpbjo4cHggMTJweCA4cHggMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzoxNnB4O1xyXG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpjYWRldGJsdWU7XHJcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpOmhvdmVyLFxyXG4gICAgICAgIGxpOmFjdGl2ZXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2U5ZjBmMDtcclxuICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW57XHJcbiAgMCUge29wYWNpdHk6IDB9XHJcbiAgNTAle29wYWNpdHk6IDAuNX1cclxuICAxMDAle29wYWNpdHk6IDF9XHJcbn1cclxuIiwiLnBhdGllbnQge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wYXRpZW50X19ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCBjYWRldGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbjtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDEycHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjRweDtcbn1cbi5wYXRpZW50X19ib3gtLWNsb3NlSW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhdGllbnRfX2JveC0tcGF0aWVudCBkaXYge1xuICBtcmdpbjogOHB4IDA7XG59XG4ucGF0aWVudF9fYm94LS1wYXRpZW50IHNwYW46bGFzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhdGllbnRfX2JveC0td2VpZ2h0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5wYXRpZW50X19ib3gtLXdlaWdodCB1bCBsaSB7XG4gIG1hcmdpbjogOHB4IDEycHggOHB4IDBweDtcbiAgcGFkZGluZzogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wYXRpZW50X19ib3gtLXdlaWdodCB1bCBsaTpob3Zlcixcbi5wYXRpZW50X19ib3gtLXdlaWdodCB1bCBsaTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMGYwO1xuICBjb2xvcjogYmxhY2s7XG59XG4ucGF0aWVudF9fYm94LS1jYWxsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5wYXRpZW50X19ib3gtLWNhbGwgdWwgbGkge1xuICBtYXJnaW46IDhweCAxMnB4IDhweCAwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucGF0aWVudF9fYm94LS1jYWxsIHVsIGxpOmhvdmVyLFxuLnBhdGllbnRfX2JveC0tY2FsbCB1bCBsaTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMGYwO1xuICBjb2xvcjogYmxhY2s7XG59XG4ucGF0aWVudF9fYm94LS1wcm9kdWN0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5wYXRpZW50X19ib3gtLXByb2R1Y3QgdWwgbGkge1xuICBtYXJnaW46IDhweCAxMnB4IDhweCAwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucGF0aWVudF9fYm94LS1wcm9kdWN0IHVsIGxpOmhvdmVyLFxuLnBhdGllbnRfX2JveC0tcHJvZHVjdCB1bCBsaTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMGYwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/patients/patient/patient.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/patients/patient/patient.component.ts ***!
  \*******************************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared.service.ts");




let PatientComponent = class PatientComponent {
    constructor(sharedService, router, route) {
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.patientId = +params['id'];
            this.fetchDetails();
        });
    }
    fetchDetails() {
        this.sharedService.getPatientsForClient().subscribe((patients) => {
            this.patient = patients['patients'].find(val => {
                return +val.id === this.patientId;
            });
            console.log(this.patient);
        });
        this.sharedService.getWeightsForPatient().subscribe((weights) => {
            this.weights = weights['weights'].filter(val => {
                return +val.patientId === this.patientId;
            });
        });
        this.sharedService.getCallsForPatient().subscribe((calls) => {
            this.calls = calls['calls'].filter(val => {
                return +val.patientId === this.patientId;
            });
        });
        this.sharedService.getProductsForPatient().subscribe((products) => {
            this.products = products['products'].filter(val => {
                return +val.patientId === this.patientId;
            });
        });
    }
    navigateBack() {
        this.router.navigate(['patients']);
    }
};
PatientComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient/patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patient.component.scss */ "./src/app/patients/patient/patient.component.scss")).default]
    })
], PatientComponent);



/***/ }),

/***/ "./src/app/patients/patients.component.scss":
/*!**************************************************!*\
  !*** ./src/app/patients/patients.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".patients {\n  padding: 24px 12px;\n}\n.patients__child {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.patients__child__add {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n.patients__child__add--box {\n  margin: 100px 12px;\n  background-color: #fff;\n  padding: 12px;\n}\n.patients__child__delete {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n}\n.patients__child__delete--box {\n  margin: 100px auto;\n  background-color: #fff;\n  max-width: 400px;\n  max-height: 400px;\n  padding: 16px;\n}\n.patients__search {\n  display: flex;\n  justify-content: space-between;\n}\n.patients__search div {\n  display: flex;\n  justify-content: center;\n  background-color: #00857a;\n  border-radius: 10px;\n  align-self: center;\n  width: 150px;\n  height: 40px;\n}\n.patients__search div label {\n  color: white;\n  align-self: center;\n}\n.patients__search div:hover,\n.patients__search div:active {\n  background-color: #e9f0f0;\n}\n.patients__search div:hover label,\n.patients__search div:active label {\n  color: black;\n}\n.patients__search input[type=text] {\n  align-self: center;\n  width: 200px;\n  padding: 12px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  align-items: flex-end;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n@media (max-width: 768px) {\n  .patients__search {\n    flex-direction: column;\n  }\n  .patients__search div {\n    width: 100%;\n  }\n  .patients__search input[type=text] {\n    width: 100%;\n  }\n}\n.patients__card {\n  position: relative;\n  -webkit-animation: fadeIn 1s linear forwards;\n          animation: fadeIn 1s linear forwards;\n  display: flex;\n  margin: 8px 0px;\n  padding: 12px;\n  box-shadow: 0 0 8px 0 rgba(34, 34, 34, 0.02), 0 8px 16px 0 rgba(34, 34, 34, 0.2);\n}\n.patients__card--delete {\n  position: absolute;\n  padding: 5px;\n  border: 1px solid transparent;\n  top: 20px;\n  right: 20px;\n}\n.patients__card--delete:hover, .patients__card--delete:active {\n  cursor: pointer;\n  border: 1px solid black;\n}\n.patients__card--image {\n  width: 200px;\n  height: 200px;\n  align-self: center;\n  margin: 0 24px;\n  box-shadow: 0 0 2px 2px #e9f0f0;\n}\n.patients__card__details {\n  align-self: center;\n  margin: 0 24px;\n}\n.patients__card__details div {\n  margin: 8px 0px;\n}\n.patients__card__details span:last-child {\n  font-weight: bold;\n}\n.patients__card__details a {\n  cursor: pointer;\n}\n.patients__card__details a:hover,\n.patients__card__details a:active {\n  color: cadetblue;\n}\n.patients__card__address {\n  margin: 0 24px;\n  align-self: center;\n}\n.patients__card__address div {\n  margin: 8px 0px;\n}\n.patients__card__address span:last-child {\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .patients__card {\n    flex-direction: column;\n  }\n  .patients__card--delete {\n    top: 250px;\n  }\n  .patients__card--image {\n    margin: 8px 12px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n  }\n  .patients__card--image div {\n    align-self: center;\n  }\n  .patients__card__details {\n    margin: 8px 12px;\n    align-self: flex-start;\n  }\n  .patients__card__details div {\n    margin: 8px 0px;\n  }\n  .patients__card__details span:last-child {\n    font-weight: bold;\n  }\n  .patients__card__address {\n    margin: 8px 12px;\n    align-self: flex-start;\n  }\n  .patients__card__address span:last-child {\n    font-weight: bold;\n  }\n}\n.patients__card:hover, .patients__card:active {\n  background-color: #edf7f7;\n  margin: 8px 0px;\n  padding: 12px;\n  box-shadow: 0 0 8px 0 rgba(34, 34, 34, 0.02), 0 8px 16px 0 rgba(34, 34, 34, 0.2);\n}\n.patients__button {\n  margin-top: 32px;\n  display: flex;\n  justify-content: space-between;\n}\n.patients__button--index {\n  font-weight: bold;\n  font-size: 22px;\n}\n@media (max-width: 768px) {\n  .patients__button--index {\n    display: none;\n  }\n}\n.button {\n  width: 140px;\n  height: 40px;\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudHMvQzpcXEFqYXlfRGF0YVxcQXNzaWduXFxBbmltYW5hXFxwYWNrYWdlc1xcZnJvbnRlbmQvc3JjXFxhcHBcXHBhdGllbnRzXFxwYXRpZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGF0aWVudHMvcGF0aWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDQUo7QURFSTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQU47QURFTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQVI7QURPSTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTE47QURPTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0xSO0FEdUJFO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDckJOO0FEdUJNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNyQlI7QURzQlE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNwQlY7QUR3Qk07O0VBRUUseUJBQUE7QUN0QlI7QUR1QlE7O0VBQ0UsWUFBQTtBQ3BCVjtBRHdCTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDdEJSO0FEMEJFO0VBQ0k7SUFDSSxzQkFBQTtFQ3hCUjtFRDBCUTtJQUNFLFdBQUE7RUN4QlY7RUQyQlE7SUFDRSxXQUFBO0VDekJWO0FBQ0Y7QUQ2QkU7RUFDRSxrQkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnRkFBQTtBQzNCSjtBRDZCSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUMzQk47QUQ4Qkk7RUFFSSxlQUFBO0VBQ0EsdUJBQUE7QUM3QlI7QURnQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FDOUJOO0FEaUNJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDL0JOO0FEZ0NNO0VBQ0UsZUFBQTtBQzlCUjtBRGlDTTtFQUNFLGlCQUFBO0FDL0JSO0FEa0NNO0VBQ0UsZUFBQTtBQ2hDUjtBRG1DTTs7RUFFRSxnQkFBQTtBQ2pDUjtBRHVDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ3JDTjtBRHNDTTtFQUNFLGVBQUE7QUNwQ1I7QUR1Q007RUFDRSxpQkFBQTtBQ3JDUjtBRDBDRTtFQUNFO0lBQ0Usc0JBQUE7RUN4Q0o7RUQwQ0k7SUFDRSxVQUFBO0VDeENOO0VEMkNJO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RUN6Q047RUQyQ007SUFDRSxrQkFBQTtFQ3pDUjtFRDhDSTtJQUNFLGdCQUFBO0lBQ0Esc0JBQUE7RUM1Q047RUQ4Q007SUFDRSxlQUFBO0VDNUNSO0VEK0NNO0lBQ0UsaUJBQUE7RUM3Q1I7RURpREk7SUFDRSxnQkFBQTtJQUNBLHNCQUFBO0VDL0NOO0VEaURNO0lBQ0UsaUJBQUE7RUMvQ1I7QUFDRjtBRHVERTtFQUVFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnRkFBQTtBQ3RESjtBRDBERTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDeERKO0FEaUVJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDL0ROO0FEa0VJO0VBQ0U7SUFDRSxhQUFBO0VDaEVOO0FBQ0Y7QURxRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ2xFRjtBRHNFQTtFQUNFO0lBQ0UsVUFBQTtFQ25FRjtFRHNFQTtJQUNFLFlBQUE7RUNwRUY7RUR1RUE7SUFDRSxVQUFBO0VDckVGO0FBQ0Y7QUQwREE7RUFDRTtJQUNFLFVBQUE7RUNuRUY7RURzRUE7SUFDRSxZQUFBO0VDcEVGO0VEdUVBO0lBQ0UsVUFBQTtFQ3JFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudHMvcGF0aWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGVzZSBzdHlsZXMgYXJlIHVzZWQgZm9yIFBhdGllbnRzIEhUTUwgcGFnZS5cclxuLnBhdGllbnRze1xyXG4gIHBhZGRpbmc6MjRweCAxMnB4O1xyXG5cclxuICAmX19jaGlsZHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB6LWluZGV4OjE7XHJcblxyXG4gICAgJl9fYWRke1xyXG4gICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBoZWlnaHQ6MTAwJTtcclxuXHJcbiAgICAgICYtLWJveHtcclxuICAgICAgICBtYXJnaW46MTAwcHggMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6MTJweDtcclxuXHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2RlbGV0ZXtcclxuICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OjEwMCU7XHJcblxyXG4gICAgICAmLS1ib3h7XHJcbiAgICAgICAgbWFyZ2luOjEwMHB4IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBtYXgtd2lkdGg6NDAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDo0MDBweDtcclxuICAgICAgICBwYWRkaW5nOjE2cHg7XHJcblxyXG4gICAgICAgICYtLWhlYWRpbmd7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi0tbWVzc2FnZXtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLS1idXR0b257XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NlYXJjaHtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODU3YTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpdjpob3ZlcixcclxuICAgICAgZGl2OmFjdGl2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlOWYwZjA7XHJcbiAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgICAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAmX19zZWFyY2h7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jYXJke1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW46OHB4IDBweDtcclxuICAgIHBhZGRpbmc6MTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDM0LDM0LDM0LDAuMDIpLDAgOHB4IDE2cHggMCByZ2JhKDM0LDM0LDM0LDAuMik7XHJcblxyXG4gICAgJi0tZGVsZXRle1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgIGJvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHRvcDoyMHB4O1xyXG4gICAgICByaWdodDoyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtLWRlbGV0ZTpob3ZlcixcclxuICAgICYtLWRlbGV0ZTphY3RpdmV7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAmLS1pbWFnZXtcclxuICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAgMjRweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAycHggI2U5ZjBmMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19kZXRhaWxze1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCAyNHB4O1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgbWFyZ2luOjhweCAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhe1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhOmhvdmVyLFxyXG4gICAgICBhOmFjdGl2ZXtcclxuICAgICAgICBjb2xvcjpjYWRldGJsdWU7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICZfX2FkZHJlc3Mge1xyXG4gICAgICBtYXJnaW46IDAgMjRweDtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgbWFyZ2luOjhweCAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICZfX2NhcmR7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAmLS1kZWxldGV7XHJcbiAgICAgICAgdG9wOjI1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLS1pbWFnZXtcclxuICAgICAgICBtYXJnaW46OHB4IDEycHg7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19kZXRhaWxze1xyXG4gICAgICAgIG1hcmdpbjo4cHggMTJweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICBtYXJnaW46OHB4IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW46bGFzdC1jaGlsZHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmX19hZGRyZXNzIHtcclxuICAgICAgICBtYXJnaW46OHB4IDEycHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gICZfX2NhcmQ6aG92ZXIsXHJcbiAgJl9fY2FyZDphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmN2Y3O1xyXG4gICAgbWFyZ2luOjhweCAwcHg7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzNCwzNCwzNCwwLjAyKSwwIDhweCAxNnB4IDAgcmdiYSgzNCwzNCwzNCwwLjIpO1xyXG4gIH1cclxuXHJcblxyXG4gICZfX2J1dHRvbntcclxuICAgIG1hcmdpbi10b3A6MzJweDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICYtLXByZXZpb3Vze1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmLS1uZXh0e1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmLS1pbmRleHtcclxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgZm9udC1zaXplOjIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICYtLWluZGV4e1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbntcclxuICB3aWR0aDoxNDBweDtcclxuICBoZWlnaHQ6NDBweDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJXtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAvL3RyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XHJcbiAgfVxyXG4gIDUwJXtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIucGF0aWVudHMge1xuICBwYWRkaW5nOiAyNHB4IDEycHg7XG59XG4ucGF0aWVudHNfX2NoaWxkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4ucGF0aWVudHNfX2NoaWxkX19hZGQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wYXRpZW50c19fY2hpbGRfX2FkZC0tYm94IHtcbiAgbWFyZ2luOiAxMDBweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLnBhdGllbnRzX19jaGlsZF9fZGVsZXRlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucGF0aWVudHNfX2NoaWxkX19kZWxldGUtLWJveCB7XG4gIG1hcmdpbjogMTAwcHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ucGF0aWVudHNfX3NlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wYXRpZW50c19fc2VhcmNoIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NTdhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLnBhdGllbnRzX19zZWFyY2ggZGl2IGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ucGF0aWVudHNfX3NlYXJjaCBkaXY6aG92ZXIsXG4ucGF0aWVudHNfX3NlYXJjaCBkaXY6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjBmMDtcbn1cbi5wYXRpZW50c19fc2VhcmNoIGRpdjpob3ZlciBsYWJlbCxcbi5wYXRpZW50c19fc2VhcmNoIGRpdjphY3RpdmUgbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59XG4ucGF0aWVudHNfX3NlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhdGllbnRzX19zZWFyY2gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnBhdGllbnRzX19zZWFyY2ggZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucGF0aWVudHNfX3NlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnBhdGllbnRzX19jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IGZhZGVJbiAxcyBsaW5lYXIgZm9yd2FyZHM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogOHB4IDBweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMzQsIDM0LCAzNCwgMC4wMiksIDAgOHB4IDE2cHggMCByZ2JhKDM0LCAzNCwgMzQsIDAuMik7XG59XG4ucGF0aWVudHNfX2NhcmQtLWRlbGV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbn1cbi5wYXRpZW50c19fY2FyZC0tZGVsZXRlOmhvdmVyLCAucGF0aWVudHNfX2NhcmQtLWRlbGV0ZTphY3RpdmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnBhdGllbnRzX19jYXJkLS1pbWFnZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDAgMjRweDtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggI2U5ZjBmMDtcbn1cbi5wYXRpZW50c19fY2FyZF9fZGV0YWlscyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDI0cHg7XG59XG4ucGF0aWVudHNfX2NhcmRfX2RldGFpbHMgZGl2IHtcbiAgbWFyZ2luOiA4cHggMHB4O1xufVxuLnBhdGllbnRzX19jYXJkX19kZXRhaWxzIHNwYW46bGFzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhdGllbnRzX19jYXJkX19kZXRhaWxzIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGF0aWVudHNfX2NhcmRfX2RldGFpbHMgYTpob3Zlcixcbi5wYXRpZW50c19fY2FyZF9fZGV0YWlscyBhOmFjdGl2ZSB7XG4gIGNvbG9yOiBjYWRldGJsdWU7XG59XG4ucGF0aWVudHNfX2NhcmRfX2FkZHJlc3Mge1xuICBtYXJnaW46IDAgMjRweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnBhdGllbnRzX19jYXJkX19hZGRyZXNzIGRpdiB7XG4gIG1hcmdpbjogOHB4IDBweDtcbn1cbi5wYXRpZW50c19fY2FyZF9fYWRkcmVzcyBzcGFuOmxhc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGF0aWVudHNfX2NhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnBhdGllbnRzX19jYXJkLS1kZWxldGUge1xuICAgIHRvcDogMjUwcHg7XG4gIH1cbiAgLnBhdGllbnRzX19jYXJkLS1pbWFnZSB7XG4gICAgbWFyZ2luOiA4cHggMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAucGF0aWVudHNfX2NhcmQtLWltYWdlIGRpdiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5wYXRpZW50c19fY2FyZF9fZGV0YWlscyB7XG4gICAgbWFyZ2luOiA4cHggMTJweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5wYXRpZW50c19fY2FyZF9fZGV0YWlscyBkaXYge1xuICAgIG1hcmdpbjogOHB4IDBweDtcbiAgfVxuICAucGF0aWVudHNfX2NhcmRfX2RldGFpbHMgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucGF0aWVudHNfX2NhcmRfX2FkZHJlc3Mge1xuICAgIG1hcmdpbjogOHB4IDEycHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgfVxuICAucGF0aWVudHNfX2NhcmRfX2FkZHJlc3Mgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuLnBhdGllbnRzX19jYXJkOmhvdmVyLCAucGF0aWVudHNfX2NhcmQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjdmNztcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzNCwgMzQsIDM0LCAwLjAyKSwgMCA4cHggMTZweCAwIHJnYmEoMzQsIDM0LCAzNCwgMC4yKTtcbn1cbi5wYXRpZW50c19fYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnBhdGllbnRzX19idXR0b24tLWluZGV4IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGF0aWVudHNfX2J1dHRvbi0taW5kZXgge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/patients/patients.component.ts":
/*!************************************************!*\
  !*** ./src/app/patients/patients.component.ts ***!
  \************************************************/
/*! exports provided: PatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsComponent", function() { return PatientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PatientsComponent = class PatientsComponent {
    constructor(sharedService, router, route) {
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.previous = 0;
        this.next = 2;
    }
    ngOnInit() {
        // It is used for closing the error section
        this.sharedService.closeError();
        // It is used to detect the add or delete of patients
        this.sharedService.onValueChange.subscribe(() => {
            //It is used to get the patients for the client
            this.sharedService.getPatientsForClient().subscribe((patients) => {
                this.patients = patients['patients'];
                this.maxLength = this.patients.length;
                this.creatPagination(this.patients, 0);
            }, err => {
                let error = {
                    heading: 'Error',
                    description: 'Patient service failed'
                };
                this.sharedService.openError(error);
            });
        });
    }
    //It is used to filter out the patients details for specific page.
    creatPagination(patients, start) {
        this.previous = start;
        if (this.maxLength < this.next) {
            this.next = this.maxLength - 1;
        }
        this.limitedPatients = patients.filter((value, index) => {
            return index >= start && index <= this.next;
        });
    }
    // It is used for filter of the value given in the search box.
    setFilter(event) {
        let value = event.target.value;
        this.limitedPatients = this.patients.filter(val => {
            return val.class.toUpperCase().match(value.toUpperCase());
        });
        this.next = 2;
        this.maxLength = this.limitedPatients.length;
        this.creatPagination(this.limitedPatients, 0);
    }
    //It is used to set the previous page.
    setPrevious() {
        this.previous -= 3;
        if (this.next + 1 !== this.maxLength) {
            this.next -= 3;
        }
        else {
            this.next -= 1;
        }
        this.creatPagination(this.patients, this.previous);
    }
    //It is used to set the next page
    setNext() {
        this.previous += 3;
        this.next += 3;
        this.creatPagination(this.patients, this.previous);
    }
    //It is used to move to the patient view with the Id.
    navigateToPatient(id) {
        this.router.navigate(['patient', id], { relativeTo: this.route });
    }
};
PatientsComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patients',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patients.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patients.component.scss */ "./src/app/patients/patients.component.scss")).default]
    })
], PatientsComponent);



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let SharedService = class SharedService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //Detect the changes for add and delete.
        this.onValueChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        //Used to show changes for Error section.
        this.error = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            showError: false,
            heading: '',
            description: ''
        });
    }
    //Gets the clients details.
    getClients() {
        return this.httpClient.get('http://localhost:4000/clients');
    }
    //Gets the patients details for client.
    getPatientsForClient() {
        return this.httpClient.get('http://localhost:4000/patientsForClient');
    }
    //Gets the Invoices details for clients.
    getInvoicesForClient() {
        return this.httpClient.get('http://localhost:4000/invoicesForClient');
    }
    //Gets the weights details. for patient
    getWeightsForPatient() {
        return this.httpClient.get('http://localhost:4000/weightsForPatient');
    }
    //Gets the calls details for patient.
    getCallsForPatient() {
        return this.httpClient.get('http://localhost:4000/callsForPatient');
    }
    //Gets the product details for patient.
    getProductsForPatient() {
        return this.httpClient.get('http://localhost:4000/productsForPatient');
    }
    //Adds the payload to the patients with post call.
    addPatient(payload) {
        return this.httpClient.post('http://localhost:4000/addPatient', payload);
    }
    //Deletes the patient
    deletePatient(id) {
        let url = `http://localhost:4000/deletePatient/${id}`;
        return this.httpClient.delete(url);
    }
    //Triggers the next call for error.
    openError(err) {
        let error = {
            showError: true,
            heading: err.heading,
            description: err.description
        };
        this.error.next(error);
    }
    //Triggers the next call for error with close parameters.
    closeError() {
        let error = {
            showError: false,
            heading: '',
            description: ''
        };
        this.error.next(error);
    }
    //Triggers the onModified call
    onModified() {
        this.onValueChange.next(null);
    }
};
SharedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Ajay_Data\Assign\Animana\packages\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map