const Class = require("../models/User");

class UserController {
    users(req, res){
        res.send("Welcom")
    }
   
   // GET users/:slug
async getUserDetail(req, res) {
  console.log("Fetching user with slug:", req.params.slug); // Kiểm tra giá trị slug
  try {
      console.log("Before database call to getUserDetail");
      // Sử dụng req.params.slug để lấy slug từ URL
      const user = await Class.findOne({ name: req.params.slug }).lean(); // Tìm một user theo tên
      console.log(user);
      if (user) {
          res.render('userdetail', {user}); // Trả về thông tin user nếu tìm thấy
      } else {
          res.status(404).json({ message: 'User not found' }); // Trả về 404 nếu không tìm thấy user
      }
  } catch (err) {
      console.error("Error fetching user:", err); // Ghi lỗi nếu có
      res.status(500).json({ message: err.message });
  }
}
async deleteUser(req, res) {
  console.log("Fetching user with slug:", req.params.slug); // Kiểm tra giá trị slug
  try {
      console.log("Before database call");
      // Sử dụng req.params.slug để lấy slug từ URL
      const user = await Class.deleteOne({ name: req.params.slug }); // Tìm một user theo tên
      
  } catch (err) {
      console.error("Error fetching user:", err); // Ghi lỗi nếu có
      res.status(500).json({ message: err.message });
  }
}
}



module.exports = new UserController();
