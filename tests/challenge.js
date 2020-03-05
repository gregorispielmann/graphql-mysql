const db = require("../config/db");

async function salvarUsuario(nome, email, senha) {
  const user = await db("usuarios")
    .where({ email })
    .first();

  // console.log(user);

  if (user) {
    if (user.nome !== nome) db("usuarios").update({ nome });
    if (user.senha !== senha) db("usuarios").update({ senha });
  } else {
    const res = db("usuarios").insert({ nome, email, senha });
  }

  return usuario;
}

async function salvarPerfil(nome, rotulo) {}

async function adicionarPerfis(usuario, ...perfis) {}

async function executar() {
  const usuario = await salvarUsuario("Ana", "ana@empresa.com.br", "123456");

  return false;

  const perfilA = await salvarPerfil("rh", "Pessoal");
  const perfilB = await salvarPerfil("fin", "Financeiro");

  console.log(usuario);
  console.log(perfilA);
  console.log(perfilB);

  await adicionarPerfis(usuario, perfilA, perfilB);
}

executar()
  .catch(err => console.log(err))
  .finally(() => db.destroy());
