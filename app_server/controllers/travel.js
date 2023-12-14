const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

// Render travel list view
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    const pageTitle = process.env.npm_package_description + ' - Travel';

    if (responseBody instanceof Array) {
        if (responseBody.length === 0) {
            message = 'No trips exist in the database!';
        }
    } else {
        message = 'API lookup error';
        responseBody = [];
    }

    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message
    });
};

// Get travel list
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);

    request(requestOptions, (err, response, body) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        if (response.statusCode !== 200) {
            console.error(`API request failed with status code: ${response.statusCode}`);
            return res.status(response.statusCode).send('API Request Failed');
        }

        renderTravelList(req, res, body);
    });
};

module.exports = {
    travelList
};
