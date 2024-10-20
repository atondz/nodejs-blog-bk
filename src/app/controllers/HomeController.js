const Class = require("../models/User");


class HomeController {
  // [GET] /search
  search(req, res) {
    res.render('search');
  }

  // [GET] /
  home(req, res) {
    res.send("home");
  }

  async getAllUser(req, res) {
    console.log("Fetching all users..."); // Xem có in ra không
    try {
      console.log("Before database call");
      const users = await Class.find().lean(); // Chuyển đổi document thành đối tượng JS
      
      res.render('users', { users }); // Đảm bảo truyền đúng tên vào view
    } catch (err) {
      console.error("Error fetching users:", err); // Ghi lỗi nếu có
      res.status(500).json({ message: err.message });
    }
  }
  
}

module.exports = new HomeController();
