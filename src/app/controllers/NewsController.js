class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news')
    }

    //[GET] /bews/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!');
    }
}

module.exports = new NewsController;    //when other files require this class it will return a new NewsController