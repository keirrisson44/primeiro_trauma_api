import { connection } from "./connection.js";

export async function  listaraluno() {
    const comando = `
    select *
    from alunos
    `
let [resultado] = await connection.query(comando)
return resultado;
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