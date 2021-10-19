const UsuarioModel = require("../models/UsuarioModel");

module.exports.buscarUsuarioPorId = async (idRequisitado) => {
  const {
    id,
    nome_usuario: nomeUsuario,
    email,
    nome,
    sobrenome,
    cpf,
    data_nascimento: dataNascimento,
    sexo,
  } = await UsuarioModel.buscarUsuarioPorId(idRequisitado);

  const usuarioEncontrado = {
    id,
    nomeUsuario,
    email,
    nome,
    sobrenome,
    cpf,
    dataNascimento,
    sexo,
  };

  return usuarioEncontrado;
};

module.exports.editarUsuario = async (
  id,
  {
    nomeUsuario: nome_usuario,
    email,
    nome,
    sobrenome,
    cpf,
    dataNascimento: data_nascimento,
    sexo,
  }
) => {
  return await UsuarioModel.editarUsuario(id, {
    nome_usuario,
    email,
    nome,
    sobrenome,
    cpf,
    data_nascimento,
    sexo,
  });
};

module.exports.deletarUsuario = async (id) => UsuarioModel.deletarUsuario(id);
