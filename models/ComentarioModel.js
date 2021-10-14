const { Coment } = require("../database/models");

module.exports.adicionarComentario = async (comentarioObjeto) => {
  const comentarioCriado = await Coment.create(comentarioObjeto);

  return comentarioCriado;
};
