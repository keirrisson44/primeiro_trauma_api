import { connection } from "./connection.js";

export async function listarfilme() {
    const comando = `
    select *
    from tb_filmes
    `;
    const [resultado] = await connection.query(comando);
    return resultado;

}

export async function buscarfilmeID(id) {
    const comando = `
    select *
    from tb_filmes
    where id_filmes = ?
    `;
let [resultado] = await connection.query(comando , [id])
return resultado[0];
}

export async function buscarfilmeNome(nome) {
    const comando = `
    select *
    from tb_filmes
    where nm_filme like ?
    `;
let [resultado] = await connection.query(comando , [`%${nome}%`])
return resultado;
}

export async function adicionarfilme(novofilme) {
    const comando = `
    insert into tb_filmes (nm_filme, vl_valor, lg_lugar, pr_promocao, hr_dianoite)
    values (?,?,?,?,?)
    `
let [resultado] = await connection.query(comando, [
    novofilme.nm_filme,
    novofilme.vl_valor,
    novofilme.lg_lugar,
    novofilme.pr_promocao,
    novofilme.hr_dianoite
])
return resultado.insertId;
}

export async function updateFilme(id, novofilme) {
    const comando = `
    UPDATE tb_filmes
    SET nm_filme = ?,
    vl_valor = ?,
    lg_lugar = ?,
    pr_promocao = ?,
    hr_dianoite = ?
    WHERE id_filmes = ?;
    `;
let [resultado] = await connection.query(comando, [
    novofilme.nm_filme,
    novofilme.vl_valor,
    novofilme.lg_lugar,
    novofilme.pr_promocao,
    novofilme.hr_dianoite,
    id
])

}

export async function deletarfilme(id) {
    const comando = `
    DELETE FROM 
    tb_filmes
    WHERE id_filmes = ?;
    `;

let [resultado] = await connection.query(comando , [id]) 
}