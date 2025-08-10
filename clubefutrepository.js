import { connection } from "./connection.js";

export async function listarjogador() {
    const comando = `
    select *
    from futebool
    `;
    const resultado = await connection.query(comando)
    return resultado;
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
