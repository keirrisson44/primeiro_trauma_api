import { connection } from "./connection.js";

export async function ListarProduto(){
    const comando = `
    select *
    from tb_produto
    `;
    let [resultadinho] = await connection.query(comando)
    return resultadinho;
}

export async function inserirproduto(novoproduto) {
    const comando = `
    insert into tb_produto (id_categoria, nm_produto, vl_preco, vl_preco_promocional, bt_destaque, bt_promocao, bt_disponivel, qtd_estoque, ds_detalhes)
    values(?,?,?,?,?,?,?,?,?)
    `
    const [resultado] = await connection.query(comando, [
        novoproduto.id_categoria,
        novoproduto.nm_produto,
        novoproduto.vl_preco,
        novoproduto.vl_preco_promocional,
        novoproduto.bt_destaque,
        novoproduto.bt_promocao,
        novoproduto.bt_disponivel,
        novoproduto.qtd_estoque,
        novoproduto.ds_detalhes
        ])
        return resultado.insertId;
} 