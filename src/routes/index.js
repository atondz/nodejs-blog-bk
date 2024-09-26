const newRouter = require('./news');
const homeRouter = require('./home');
function route(app){
     app.use('/news', newRouter);
     app.use('/', homeRouter);

    
      app.get("/users", (req, res) => {
        const users = [
            { name: "Nguyễn Văn A", age: 25, job: "Lập trình viên" },
            { name: "Trần Thị B", age: 30, job: "Thiết kế đồ họa" },
            { name: "Lê Văn C", age: 22, job: "Quản lý dự án" },
            { name: "Phạm Thị D", age: 28, job: "Chuyên viên marketing" },
            { name: "Nguyễn Văn E", age: 35, job: "Kỹ sư phần mềm" },
            { name: "Trần Văn F", age: 27, job: "Nhà phát triển web" },
            { name: "Lê Thị G", age: 29, job: "Giáo viên" },
        ];
        res.render("users", { title: "Danh sách người dùng", users });
      });
      
      app.get("/status", (req, res) => {
        const isLoggedIn = true; // Giả sử người dùng đã đăng nhập
        res.render("status", { title: "Trạng thái", isLoggedIn });
      });
      
}

module.exports = route;
