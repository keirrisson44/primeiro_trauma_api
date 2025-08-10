import { connection } from "./connection.js";

export async function  listarEstado() {
    const comando = `
    select *
    from estados
    `
    const [resultado] = await connection.query(comando)
    return resultado;
}

export async function Adicionarestado(novoEstado) {
    const comando = ` insert into estados (nm_estado, dt_estado, qt_pessoas, tm_media, tp_vegetacao, pr_praias) 
    values(? , ? ,? ,? ,? ,?)
    `
let [resultado] = await connection.query(comando, [
    novoEstado.nm_estado,
    novoEstado.dt_estado,
    novoEstado.qt_pessoas,
    novoEstado.tm_media,
    novoEstado.tp_vegetacao,
    novoEstado.pr_praias
])
    return resultado.insertId;
}