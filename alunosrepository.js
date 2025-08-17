import { connection } from "./connection.js";

export async function  listaraluno() {
    const comando = `
    select *
    from alunos
    `
let [resultado] = await connection.query(comando)
return resultado;
}

export async function listarAlunoID(id) {
    const comando = `
    SELECT * 
    FROM alunos 
    WHERE id = ?
    `
    let [resultado] = await connection.query(comando, [id])
    return resultado[0];
}

export async function ConsultarPornome(nome) {
    const comando = `
    SELECT *
    FROM alunos
    WHERE first_name LIKE ?
    `
    let [resultado] = await connection.query(comando , [`%${nome}%`])
    return resultado;
}

export async function UpdateAluno(id , novosDados) {
    const comando = `
    UPDATE alunos
    SET first_name = ?,
    last_name = ?,
    email = ?,
    gender = ?,
    salario = ?,
    Cidade = ?
    WHERE id = ?
    `;
let [resultado] = await connection.query(comando , [
    novosDados.first_name,
    novosDados.last_name,
    novosDados.email,
    novosDados.gender,
    novosDados.salario,
    novosDados.Cidade,
    id
])

}


export async function adicionaralunos(novoaluno) {
    const comando = `
    INSERT INTO alunos (id, first_name, last_name, email, gender, salario, Cidade) 
    VALUES(? , ?, ?, ?, ?, ?, ?)
    `
    let [resultado] = await connection.query(comando, [
        novoaluno.id,
        novoaluno.first_name,
        novoaluno.last_name,
        novoaluno.email,
        novoaluno.gender,
        novoaluno.salario,
        novoaluno.Cidade
        ])
        return resultado.insertId;
}

export async function deletaraluno(id) { 
    const comando = `
    DELETE FROM alunos
    WHERE id = ?
    `
let [resultado] = await connection.query(comando , [id])
 }