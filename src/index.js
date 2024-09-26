const path = require("path");
const express = require("express");
const morgan = require("morgan");
// const handlebars = require("express-handlebars");
const mongoose = require("mongoose"); // Thêm mongoose
// const Student = require("./models/Student"); // Thêm model
const app = express();
const port = 3000;

const route = require("./routes");


// Kết nối tới MongoDB
// const uri = "mongodb://localhost:27017/school";
// mongoose
//   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB", err);
//   });

app.use(express.urlencoded(
  {extended: true}
));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));


// Template engine ejs engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));

// Template engine handbars
// app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "resources/views"));
// console.log("PATH: ", path.join(__dirname, "resources/views"));


// Route cho trang chủ

route(app);



// Middleware để parse JSON
app.use(express.json());


// // Route cho trang tin tức
// app.get("/news", (req, res) => {
//   res.render("news");
//   console.log(req.query.q);
// });

// // Route tìm kiếm
// app.get("/search", (req, res) => {
//   console.log(req.query.q);
//   res.render("search");
// });
// app.post("/search", (req, res) => {
//   console.log(req.body);
//   res.send("");
// });app

// Route để lấy danh sách sinh viên
// app.get("/students", async (req, res) => {
//   try {
//     const students = await Student.find(); // Lấy tất cả sinh viên từ MongoDB
//     res.json(students); // Trả về dữ liệu dưới dạng JSON
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
