"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var bodyParser = require('body-parser');
//Load all the required files
var callsForPatient = require('./fixtures/callsForPatient.json');
var client = require('./fixtures/client.json');
var clients = require('./fixtures/clients.json');
var invoicesForClient = require('./fixtures/invoicesForClient.json');
var patient = require('./fixtures/patient.json');
var patientsForClient = require('./fixtures/patientsForClient.json');
var productsForPatient = require('./fixtures/productsForPatient.json');
var weightsForPatient = require('./fixtures/weightsForPatient.json');
var app = express_1.default();
var PORT = 4000;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
// Get (CallsForPatient)
app.get('/callsForPatient', function (req, res, next) {
    res.send(callsForPatient);
    next();
});
// Post (CallsForPatient)
app.post('/callsForPatient', function (req, res, next) {
    res.send(callsForPatient);
    next();
});
// Get (client)
app.get('/client', function (req, res, next) {
    res.send(client);
    next();
});
// Get (clients)
app.get('/clients', function (req, res, next) {
    res.send(clients);
    next();
});
// Get (invoicesForClient)
app.get('/invoicesForClient', function (req, res, next) {
    res.send(invoicesForClient);
    next();
});
// Get (patient)
app.get('/patient', function (req, res, next) {
    res.send(patient);
    next();
});
// Get (patientsForClient)
app.get('/patientsForClient', function (req, res, next) {
    res.send(patientsForClient);
    next();
});
// Get (productsForPatient)
app.get('/productsForPatient', function (req, res, next) {
    res.send(productsForPatient);
    next();
});
// Get (weightsForPatient)
app.get('/weightsForPatient', function (req, res, next) {
    res.send(weightsForPatient);
    next();
});
var id = 3;
app.post('/addPatient', function (req, res, next) {
    var data = req.body;
    data.id = id += 1;
    data.id = data.id + "";
    patientsForClient['patients'].push(data);
    var message = {
        key: 'ANI__0000',
        description: 'Patient added successfully'
    };
    res.send(message);
    next();
});
app.delete('/deletePatient/:id', function (req, res, next) {
    var id = req.params['id'];
    patientsForClient['patients'] = patientsForClient['patients'].filter(function (val) {
        return +val.id !== +id;
    });
    var message = {
        key: 'ANI__0000',
        description: 'Patient delete successfully'
    };
    res.send(message);
    next();
});
app.listen(PORT, function () {
    console.log("This application is listening on port : - " + PORT);
});
