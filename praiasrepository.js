import { connection } from "./connection.js";

export async function listarpraias(){
    const comando = `
    select *
    from tb_praia
    `;
    
    let [resultado] = await connection.query(comando)
    return resultado;
}

export async function inserirnovapraia(novapraia){ 
    const comando = ` 	insert into tb_praia (nm_praia, vl_hospedagem, vl_pedagio, qtd_pessoa,vl_alimentacao, bt_sol)
	values (?, ?, ?, ?, ?, ?)  `;

    const [resultado] = await connection.query(comando, [
        novapraia.nm_praia,
        novapraia.vl_hospedagem,
        novapraia.vl_pedagio,
        novapraia.qtd_pessoa,
        novapraia.vl_alimentacao,
        novapraia.bt_sol
        ]);
        return resultado.insertId;
        }

export async function UPdatePraia(id, novapraia) {
    const comando = `
    UPDATE tb_praia
    SET nm_praia = ? ,
    vl_hospedagem = ? ,
    vl_pedagio = ? ,
    qtd_pessoa = ? ,
    vl_alimentacao = ? ,
    bt_sol = ?
    WHERE id_praia = ? 
    `;
const [resultado] = await connection.query(comando, [
    novapraia.nm_praia,
    novapraia.vl_hospedagem,
    novapraia.vl_pedagio,
    novapraia.qtd_pessoa,
    novapraia.vl_alimentacao,
    novapraia.bt_sol,
    id]);
}

export async function deletaPraia(id) {
    const comando = `
 DELETE FROM 
 tb_praia
 WHERE id_praia = ?;
`;

const [resultado] = await connection.query(comando, [id])
}

export async function buscaPraiaID(id) {
    const comando = `
    SELECT * FROM
     tb_praia 
     WHERE id_praia = ?;
    `;
    const [resultado] = await connection.query(comando, [id])
    return resultado[0];
}

export async function buscarPraiaNome(nome) {
    const comando = `
    SELECT * FROM
    tb_praia
    WHERE nm_praia LIKE ? 
    `;
const [resultado] = await connection.query(comando, [`%${nome}%`])
    return resultado;
}


