const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();

// Handlebars 엔진 설정
app.engine("handlebars", handlebars.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials")
}));

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home", { title: "테스트 게시판" });
});

app.listen(3000, () => {
    console.log("서버가 포트 3000에서 실행 중입니다.");
});