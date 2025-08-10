import { connection } from "./connection.js";

export async function listarfilme() {
    const comando = `
    select *
    from tb_filmes
    `;
    const [resultado] = await connection.query(comando);
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
