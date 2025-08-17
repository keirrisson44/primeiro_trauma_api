import { connection } from "./connection.js";

export async function listarfuncionarios() {
    const comando = `
    select *
    from funcionarios
    `;
    const [resultado] = await connection.query(comando);
    return resultado;

}

export async function buscarfuncionario(id) {
    const comando = `
    SELECT *
    FROM funcionarios
    WHERE id_funcionario = ?
    `;
const [resultado] = await connection.query(comando, id);
return resultado[0];
}

export async function updateFuncionario(id , novofuncionario){
    const comando = `
    UPDATE funcionarios
    SET vl_salario = ?,
    nm_funcionario = ?,
    ds_cargo = ?,
    dt_contratacao  = ?,
    nm_setor = ?
    WHERE id_funcionario = ?
    `;

let [resultado] = await connection.query(comando, [
    novofuncionario.vl_salario,
    novofuncionario.nm_funcionario,
    novofuncionario.ds_cargo,
    novofuncionario.dt_contratacao,
    novofuncionario.nm_setor,
    id]);
}

export async function insirfuncionarios(novofuncionario) {
    const comando = ` insert into funcionarios
    (vl_salario , nm_funcionario , ds_cargo , dt_contratacao , nm_setor)
    values (? , ? , ? , ? , ?);
    `
let [informacao2] = await connection.query(comando , [
    novofuncionario.vl_salario ,
    novofuncionario.nm_funcionario ,
    novofuncionario.ds_cargo ,
    novofuncionario.dt_contratacao ,
    novofuncionario.nm_setor ,]);
    return informacao2.insertId;
                                

}

export async function deletarfuncionario(id) {
    const comando = `
    DELETE FROM funcionarios
    WHERE id_funcionario = ?
    `;
let [resultado] = await connection.query(comando, [id]);
}

export async function ListarPorNome(nome) {
    const comando = `
    SELECT * FROM funcionarios
    WHERE nm_funcionario LIKE ?;
    `;
let [resultado] = await connection.query(comando, [`%${nome}%`]);
    return resultado;


}