const ComentarioModel = require("../models/ComentarioModel");

module.exports.adicionarComentario  = async (novoComentario, data, idUsuario, idTopico) => {
  const dataFormatada = new Date(data).toISOString();

  const comentarioCriado = await ComentarioModel.adicionarComentario({
    comentario: novoComentario,
    data_comentario: dataFormatada,
    user_id: idUsuario,
    topic_id: idTopico,
  });

  return comentarioCriado;
};
