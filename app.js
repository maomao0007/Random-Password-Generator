const express =  require('express')
const { engine } = require("express-handlebars");
const app = express()
const port = 3000
const generatePassword = require("./utils/generatePW");

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { isResultVisible: false }); // 將 isResultVisible 設置為 false
});

app.post("/generate", (req, res) => {
  const options = req.body;
  const password = generatePassword(options);

  res.render("index", { password, isResultVisible: true }); // 將生成的密碼和 isResultVisible 設置為 true 傳遞給模板
});

app.listen(port, () => {
 console.log(`express server is running on http://localhost:${port}`)
})