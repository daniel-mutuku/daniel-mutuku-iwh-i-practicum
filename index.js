require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PRIVATE_APP_ACCESS = process.env.PRIVATE_APP_ACCESS;

const CUSTOM_OBJECT_TYPE = '2-203762586';

// Route 1: Homepage - fetches and displays all custom object records
app.get('/', async (req, res) => {
    const customObjects = `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}?properties=name,registrationnumber,yom`;
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    };
    try {
        const resp = await axios.get(customObjects, { headers });
        const data = resp.data.results;
        res.render('homepage', { title: 'Home | HubSpot APIs', data });
    } catch (error) {
        console.error(error);
    }
});

// Route 2: Render the form to add a new custom object record
app.get('/update-cobj', (req, res) => {
    res.render('updates', {
        title: 'Update Custom Object Form | Integrating With HubSpot I Practicum'
    });
});

// Route 3: Handle form submission - creates a new custom object record and redirects to homepage
app.post('/update-cobj', async (req, res) => {
    const update = {
        properties: {
            name: req.body.name,
            registrationnumber: req.body.registrationnumber,
            yom: req.body.yom
        }
    };

    const createCustomObject = `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}`;
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    };

    try {
        await axios.post(createCustomObject, update, { headers });
        res.redirect('/');
    } catch (error) {
        console.error(error);
    }
});

// Start the server on port 3000
app.listen(3000, () => console.log('Listening on http://localhost:3000'));