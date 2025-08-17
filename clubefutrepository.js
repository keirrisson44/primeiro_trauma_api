import { connection } from "./connection.js";

export async function listarjogador() {
    const comando = `
    select *
    from futebol
    `;
    const resultado = await connection.query(comando)
    return resultado;
}

export async function consultarJogador(id) {
     const comando = `
    SELECT * 
      FROM futebol
     WHERE id_futebool = ?
  `
  let [registros] = await connection.query(comando, [id]);
  return registros[0];

}

export async function consultanome(nome) {
    const comando = `
      select *
    from futebol
    WHERE nm_jogador LIKE ?
    `

  const [registros] = await connection.query(comando, [`%${nome}%`]);
  return registros;
}

export async function alterarjogador(id, novosDados) {
  const comando = `
    UPDATE futebol
     SET nm_jogador = ?,
      nm_clube = ?,
      qt_gol = ?,
      sl_jogador = ?,
      nm_camisa = ?,
      bt_jogador = ?
      where id_futebool = ?
  `
;
  let [info] = await connection.query(comando, [
  novosDados.nm_jogador,
  novosDados.nm_clube,
  novosDados.qt_gol,
  novosDados.sl_jogador,
  novosDados.nm_camisa,
  novosDados.bt_jogador,
  id
  ])
}

export async function inserirjogador(novojogador){
    const comando = `insert into futebol (nm_jogador, nm_clube, qt_gol, sl_jogador, nm_camisa, bt_jogador)
    values (?, ?, ?, ?, ?, ?)`;

let [resultado] = await connection.query(comando, [
    novojogador.nm_jogador,
    novojogador.nm_clube,
    novojogador.qt_gol,
    novojogador.sl_jogador,
    novojogador.nm_camisa,
    novojogador.bt_jogador])
    return resultado.insertId;
}

export async function deletarjogador(id) {
  const comando = `
    DELETE FROM futebol
          WHERE id_futebool = ?
  `

  let [info] = await connection.query(comando, [id]);
}
