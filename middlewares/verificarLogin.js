module.exports = (req, res, next) => {
  if (typeof req.session.usuario === "undefined") {
    return res.redirect("/cadastroUsuario");
  }

  return next();
}