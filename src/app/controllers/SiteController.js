class SiteController {
    //[GET] /news
    index(req, res) {
        res.render('home');
    }

    //[GET] /bews/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;    //when other files require this class it will return a new NewsController