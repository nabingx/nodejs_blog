const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    app.use('/home/news', newsRouter);

    app.use('/home', siteRouter);

}

module.exports = route;