
class NewsController {

    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /home/search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new NewsController;