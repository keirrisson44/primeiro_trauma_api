import { connection } from "./connection.js";


export async function listarCrush() {
  const comando = `
    select *
      from crush
  `;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function consultaID(id){
  const comando = `
  select *
  from crush
  where id = ?
  `;
  let [registro] = await connection.query(comando , [id])
  return registro[0];
}

export async function consultarcrushpornome(nome) {
    const comando = `
    select *
    from crush
    WHERE nome LIKE ?
    `
  const [registros] = await connection.query(comando, [`%${nome}%`]);
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

export async function atualizarcrush(id, atualizadoCrush) { 
  const comando =`
  UPDATE crush
  SET nome = ?,
  idade = ?,
  genero = ?,
  cidade = ?,
  interesses = ?,
  data_conheceu = ?,
  tem_contato = ?,
  nota_paixao = ?,
  status_relacionamento = ?
  WHERE id = ?
  `
  let [info] = await connection.query(comando, [
    atualizadoCrush.nome,
    atualizadoCrush.idade,
    atualizadoCrush.genero,
    atualizadoCrush.cidade,
    atualizadoCrush.interesses,
    atualizadoCrush.data_conheceu,
    atualizadoCrush.tem_contato,
    atualizadoCrush.nota_paixao,
    atualizadoCrush.status_relacionamento,
    id
  ])
}

export async function deletarcrush(id) {
  const comando = `
  DELETE FROM crush
  WHERE id = ?
  `
  let [resultado] = await connection.query(comando, [id])
}