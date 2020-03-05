const db = require("../config/db");

// const novoPerfil = {
//   nome: "visitante",
//   rotulo: "Visitante"
// };

// db("perfis")
//   .insert(novoPerfil)
//   .then(res => console.log(res))
//   .catch(e => console.log(e.sqlMessage))
//   .finally(() => db.destroy());

// const perfilSU = {
//   nome: "root" + Math.random(),
//   rotulo: "Superusuario"
// };

// async function insert() {
//   try {
//     const res = await db("perfis").insert(perfilSU);
//     console.log(res);
//   } catch (err) {
//     console.log(err.sqlMessage);
//   }
//   db.destroy();
// }

// insert();

// db.insert(perfilSU)
//   .into("perfis")
//   .then(res => res[0])
//   .then(id => `O código gerado é o ${id}`)
//   .then(string => console.log(string))
//   .catch(err => console.log(err.sqlMessage))
//   .finally(() => db.destroy());

// const novoUsuario = {
//   nome: "Talita",
//   email: "talita@mail.com",
//   senha: "123456"
// };

// db.insert(novoUsuario)
//   .into("usuarios")
//   .then(res => res)
//   .catch(err => console.log(err.sqlMessage))
//   .finally(() => db.destroy());

async function exercicio() {
  // count
  const { qtd } = await db("usuarios")
    .count("* as qtd")
    .first();

  // console.log(qtd);

  if (qtd === 0) {
    await db("usuarios").insert(novoUsuario);
  }

  //consult
  let { id } = await db("usuarios")
    .select("id")
    .limit(1)
    .first();

  // console.log(id);

  // update

  await db("usuarios")
    .where({ id })
    .update({ nome: "Pedro", email: "pedro@mail.com" });

  return await db("usuarios").where({ id });
}

exercicio()
  .then(usuario => console.log(usuario))
  .finally(() => db.destroy());
