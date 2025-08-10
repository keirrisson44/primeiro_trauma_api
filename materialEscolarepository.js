import { connection } from "./connection.js";

export async function listarmaterial(){
    const comando = `
    select * 
    from tb_material;
    `
    const [resultado] = await connection.query(comando)
    return resultado;
}

export async function Adicionamaterial(novomaterial) {
    const comando = `
    insert into tb_material (nm_material , vl_material , bt_estoque , qtd_estoque , qtd_vendido , vl_promoção)
    values(? , ? , ? , ? , ? , ?);
    `
    const [resultado] = await connection.query(comando, [
        novomaterial.nm_material,
        novomaterial.vl_material,
        novomaterial.bt_estoque,
        novomaterial.qtd_estoque,
        novomaterial.qtd_vendido,
        novomaterial.vl_promoção
    ])
    return resultado.insertId;
}