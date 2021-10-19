const UsuarioModel = require("../models/UsuarioModel");
const bcrypt = require("bcryptjs");

module.exports.alterarSenha = async (id, senhaAtual, novaSenha, confirmaNovaSenha) => {
  const usuarioEncontrado = await UsuarioModel.buscarUsuarioPorId(id);

  const match = await bcrypt.compare(senhaAtual, usuarioEncontrado.senha);

  if (!match) {
    throw "A senha informada está incorreta."
  } 

  const senhaCriptografada = await bcrypt.hash(novaSenha, 10);

  if ( novaSenha === confirmaNovaSenha) {
    await UsuarioModel.alterarSenha( id, senhaCriptografada);
  } else {
    throw "As novas senhas não coincidem."
  }
};