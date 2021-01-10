require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')
const Immutable = require('immutable');

const app = express()
const port = 3000

// setup the ability to see into response bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// setup the express assets path
app.use('/', express.static(path.join(__dirname, '../client')))

// API calls ------------------------------------------------------------------------------------
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/index.html'));
})

app.get('/index.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/index.html'));
})


app.get('/apod_2.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/apod_2.html'));
})

app.get('/apodModal.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/apodModal.html'));
})

app.get('/opportunity_2.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/opportunity_2.html'));
})

app.get('/spirit_2.html', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/spirit_2.html'));
})


const count = 15;
const apiKey = process.env.API_KEY;
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;


// example API call
app.get('/apodData', async (req, res) => {
    try {
        let image = await fetch(apiUrl)
            .then(res => res.json())
        res.send({ image })
        console.log(res);
    } catch (err) {
        console.log('error:', err);
    }
})



const items = ['opportunity', 'spirit'];



function getData(endPoint) {
const endPointLong = "/" + endPoint + "Data";
const sol = 1000;
const apiUrlOpp = `https://api.nasa.gov/mars-photos/api/v1/rovers/${endPoint}/photos?sol=${sol}&api_key=${apiKey}`;
console.log(apiUrlOpp);
    
app.get(endPointLong, async (req, res) => {
    try {
        let image = await fetch(apiUrlOpp)
            .then(res => res.json())
        res.send({ image })
        console.log(res);
    } catch (err) {
        console.log('error:', err);
    }
})
    
  
};

//Using MAP to loop between spirit and opportunity endPoints
items.map((item) => getData(item));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
