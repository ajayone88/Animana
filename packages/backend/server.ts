import express from 'express';
import cors from 'cors';
const bodyParser = require('body-parser');

//Load all the required files
let callsForPatient = require('./fixtures/callsForPatient.json');
let client = require('./fixtures/client.json');
let clients = require('./fixtures/clients.json');
let invoicesForClient = require('./fixtures/invoicesForClient.json');
let patient = require('./fixtures/patient.json');
let patientsForClient = require('./fixtures/patientsForClient.json');
let productsForPatient = require('./fixtures/productsForPatient.json');
let weightsForPatient = require('./fixtures/weightsForPatient.json');


const app = express();
const PORT  = 4000;


app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));


// Get (CallsForPatient)
app.get('/callsForPatient', (req, res, next) =>{
    res.send(callsForPatient);
    next();
});

// Post (CallsForPatient)
app.post('/callsForPatient', (req, res, next) =>{

    res.send(callsForPatient);
    next();
});

// Get (client)
app.get('/client', (req, res, next) =>{
    res.send(client);
    next();
});


// Get (clients)
app.get('/clients', (req, res, next) =>{
    res.send(clients);
    next();
});


// Get (invoicesForClient)
app.get('/invoicesForClient', (req, res, next) =>{
    res.send(invoicesForClient);
    next();
});

// Get (patient)
app.get('/patient', (req, res, next) =>{
    res.send(patient);
    next();
});


// Get (patientsForClient)
app.get('/patientsForClient', (req, res, next) =>{
    res.send(patientsForClient);
    next();
});


// Get (productsForPatient)
app.get('/productsForPatient', (req, res, next) =>{
    res.send(productsForPatient);
    next();
});


// Get (weightsForPatient)
app.get('/weightsForPatient', (req, res, next) =>{
    res.send(weightsForPatient);
    next();
});

let id = 3;
app.post('/addPatient',(req, res, next) =>{
   let data = req.body;
   data.id = id += 1;
   data.id = data.id+"";
   patientsForClient['patients'].push(data);
   let message ={
       key:'ANI__0000',
       description:'Patient added successfully'
   };
    res.send(message);
    next();
});

app.delete('/deletePatient/:id',(req, res, next) =>{
    let id = req.params['id'];
    patientsForClient['patients'] = patientsForClient['patients'].filter( val =>{
       return +val.id !== +id;
    });
    let message ={
        key:'ANI__0000',
        description:'Patient delete successfully'
    };
    res.send(message);
    next();
});



app.listen(PORT, ()=>{
    console.log("This application is listening on port : - "+ PORT);
});