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



