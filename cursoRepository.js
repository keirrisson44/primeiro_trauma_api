import { connection } from "./connection.js";


export async function listarCrush() {
  const comando = `
    select *
      from crush
  `;

  let [registros] = await connection.query(comando);
  return registros;
}


export async function inserircrush(novoCrush) {
  const comando = `
    INSERT INTO crush ( id , nome , idade , genero , cidade , interesses , data_conheceu , tem_contato , nota_paixao , status_relacionamento)
               values (?, ?, ?, ? , ? , ? , ? , ?, ? , ?)
  `

  let [info] = await connection.query(comando, [novoCrush.id, novoCrush.nome, novoCrush.idade, novoCrush.genero, novoCrush.cidade, novoCrush.interesses, novoCrush.data_conheceu, novoCrush.tem_contato, novoCrush.nota_paixao, novoCrush.status_relacionamento ])
  return info.insertId;
}