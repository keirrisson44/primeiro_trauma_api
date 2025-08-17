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

export async function UPdateProduto(id, novoProduto) {
    const comando = `
    UPDATE tb_produto
    SET nm_produto = ? ,
    vl_preco = ? ,
    vl_preco_promocional = ? ,
    bt_destaque = ? ,
    bt_promocao = ? ,
    bt_disponivel = ?,
    qtd_estoque = ? ,
    ds_detalhes = ? 
    WHERE id_produto = ? 
    `;
const [resultado] = await connection.query(comando, [
    novoProduto.nm_produto,
    novoProduto.vl_preco,
    novoProduto.vl_preco_promocional,
    novoProduto.bt_destaque,
    novoProduto.bt_promocao,
    novoProduto.bt_disponivel,
    novoProduto.qtd_estoque,
    novoProduto.ds_detalhes,
    id])
}

export async function deletaProduto(id) {
    const comando = `
 DELETE FROM 
 tb_produto
 WHERE id_produto = ?;
`;

const [resultado] = await connection.query(comando, [id])
}

export async function buscaProdutoID(id) {
    const comando = `
    SELECT * FROM
      tb_produto
     WHERE id_produto = ?;
    `;
    const [resultado] = await connection.query(comando, [id])
    return resultado[0];
}

export async function buscarProdutoNome(nome) {
    const comando = `
    SELECT * FROM
    tb_produto
    WHERE nm_produto LIKE ? 
    `;
const [resultado] = await connection.query(comando, [`%${nome}%`])
    return resultado;
}

