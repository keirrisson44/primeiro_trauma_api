import { connection } from "./connection.js";

export async function Listarturma() {

    const comando = `
     select *
      from turmas
    `;
   let [registros2] = await connection.query(comando)
  return registros2;  
}

export async function inserirturma(novaturma) { 
const comando = `
   INSERT INTO turmas (nm_turma , qtd_alunos , lt_turma , sl_turma , nm_escola , nm_aluno)
   values (?,?,?,?,?,?);
`

let [informacao] = await connection.query(comando, [
    novaturma.nm_turma,
    novaturma.qtd_alunos,
    novaturma.lt_turma,
    novaturma.sl_turma,
    novaturma.nm_escola,
    novaturma.nm_aluno]);
return informacao.insertId;
 }
