const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080

app.use(cors());
app.use(express());

const uri = process.env.ALAS_URI;