require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override");

const indexRouter = require("./routes/index");
const cadastroUsuarioRouter = require("./routes/cadastroUsuario");
const contaRouter = require("./routes/contas");
const forumRouter = require("./routes/forum");
const jogosRouter = require("./routes/jogos");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const redefinirSenhaRouter = require("./routes/redefinirSenha");
const segurancaRouter = require("./routes/seguranca");
const topicoRouter = require("./routes/topico");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(methodOverride("_method"));

app.use("/", indexRouter);
app.use("/cadastroUsuario", cadastroUsuarioRouter);
app.use("/conta", contaRouter);
app.use("/forum", forumRouter);
app.use("/jogo", jogosRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/redefinirSenha", redefinirSenhaRouter);
app.use("/seguranca", segurancaRouter);
app.use("/topico", topicoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
