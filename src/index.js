const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars"); // Thêm import từ Handlebars gốc
const mongoose = require("mongoose"); // Thêm mongoose
const db=  require("./config/db/indexdb"); // Thêm model
const app = express();
const port = process.env.PORT || 3000;
const route = require("./routes");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });


// Kết nối tới MongoDB
db.connect();

app.use(express.urlencoded(
  {extended: true}
));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine Handlebars với runtime options
const runtimeOptions = {
  allowProtoPropertiesByDefault: true,
  allowProtoMethodsByDefault: true
};

app.engine("hbs", exphbs.engine({ 
       extname: ".hbs",
       handlebars: Handlebars.create(runtimeOptions) // Cấu hình Handlebars với runtime options
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
console.log("PATH: ", path.join(__dirname, "resources/views"));

app.post('/upload/single', upload.single('file'), (req, res) => {

  res.json(req.file)
});

// Tải lên Nhiều
app.post('/upload/multiple', upload.array('files', 10), (req, res) => {
  res.send('Các tệp đã được tải lên thành công!');
});
// Route cho trang chủ
route(app);

// Middleware để parse JSON
app.use(express.json());

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
