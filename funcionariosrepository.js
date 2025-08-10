import { connection } from "./connection.js";

export async function listarfuncionarios() {
    const comando = `
    select *
    from funcionarios
    `;
    const [resultado] = await connection.query(comando);
    return resultado;

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
