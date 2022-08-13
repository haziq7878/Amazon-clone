const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require('stripe')('sk_test_51LVX5ZCaBHPQkgQPFvHMNQAPApsKIAXalIFXLe4jd5WHuBS7MaBxBWn0SNNQuNao2LFSYr9t7Xgi99OOBxeJ4ucd00JgYWiKbm')


//App config
const app = express();


//Middleware 
app.use(cors({ origin: true }));
app.use(express.json());





