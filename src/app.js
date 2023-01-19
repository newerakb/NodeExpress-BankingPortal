const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');