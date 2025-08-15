import { connection } from "./connection.js";

export async function listarjogador() {
    const comando = `
    select *
    from futebool
    `;
    const resultado = await connection.query(comando)
    return resultado;
}

export async function consultarJogador(id) {
     const comando = `
    SELECT * 
      FROM futebool
     WHERE id_futebool = ?
  `
  let [registros] = await connection.query(comando, [id]);
  return registros[0];

}

export async function coonsultaJogadorpornome(nm_jogador) {
    const comando = `
    select *
    from futebool
    WHERE nm_jogador LIKE ?
    `
  const [registros] = await connection.query(comando, [`%${nm_jogador}%`]);
  return registros;
}



export async function inserirjogador(novojogador){
    const comando = `insert into futebool (nm_jogador, nm_clube, qt_gol, sl_jogador, nm_camisa, bt_jogador)
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

