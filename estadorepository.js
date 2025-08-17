import { connection } from "./connection.js";

export async function  listarEstado() {
    const comando = `
    select *
    from estados
    `
    const [resultado] = await connection.query(comando)
    return resultado;
}

export async function  listarpornomeE(nome) {
    const comando = `
    SELECT * 
    FROM estados
    WHERE nm_estado LIKE  ?
    `
const [resultado] = await connection.query(comando, [`%${nome}%`])
return resultado;
}

export async function  listaridE(id) {
    const comando = `
    SELECT * 
    FROM estados
    WHERE id_estados = ?
    `
    let [registro] = await connection.query(comando, [id])
    return registro[0];
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

export async function updateEstado(id, novoEstado) {
    const comando = `
    UPDATE estados
    SET nm_estado = ?,
    dt_estado = ?,
    qt_pessoas = ?,
    tm_media = ?,
    tp_vegetacao = ?,
    pr_praias = ?
    WHERE id_estados = ?
    `
    let [resultado] = await connection .query(comando, [
        novoEstado.nm_estado,
        novoEstado.dt_estado,
        novoEstado.qt_pessoas,
        novoEstado.tm_media,
        novoEstado.tp_vegetacao,
        novoEstado.pr_praias,
        id])
    }

export async function deletarEstado(id) {
    const comando = `
    DELETE FROM estados
    WHERE id_estados = ?
    `
    let [resultado] = await connection.query(comando, [id])
    
}