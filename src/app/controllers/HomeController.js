class HomeController {
  // [GET] /search
  search(req, res) {
    res.render("search");
  }

  // [GET] /
  home(req, res){
    res.render("./layouts/main");
  
  }

}
module.exports = new HomeController;