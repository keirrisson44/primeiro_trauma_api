import express from 'express'
import * as novo1 from "./cursoRepository.js"
import * as novo2 from "./turmasrepository.js"
import * as novo3 from "./funcionariosrepository.js";
import * as novo4 from "./produtorepository.js";
import * as novo5 from "./clubefutrepository.js";
import * as novo6 from "./praiasrepository.js";
import * as novo7 from './estadorepository.js';
import * as novo8 from "./materialEscolarepository.js"
import * as novo9 from './filmerepository.js';
import * as novo10 from "./alunosrepository.js"



const api = express();
api.use(express.json());


api.get('/calculadora/somar/:n1/:n2', (req, resp) => {
  let num1 = Number(req.params.n1);
  let num2 = Number(req.params.n2);

  let soma = num1 + num2;

  resp.send({
    resultado: soma
  });
})

api.get('/calculadora/subtrair', (req, resp) => {
  let n1 = Number(req.query.n1);
  let n2 = Number(req.query.n2);

  let sub = n1 - n2;

  resp.send({
    resultado: sub
  })
})

api.post('/calculadora/multiplicar', (req, resp) => {
  let valores = req.body;
  
  let multp = valores.n1 * valores.n2;

  resp.send({
    resultado: multp
  })

})

api.get('/crush', async (req, resp) => {
  let registros = await novo1.listarCrush();
  resp.send(registros);
})

api.get('/crush/:id' , async (req , resp) => {
  let id = req.params.id;
  let resultado = await novo1.consultaID(id)
  resp.send(resultado);
})

api.post('/crush', async (req, resp) => {
  let novoCrush = req.body;
  
  let id = await novo1.inserircrush(novoCrush);

  resp.send({
    novoId: id
  })

})

  api.get('/crush/filtrar' , async (req , resp) => {
    let nome = req.query.nome;
    let registros = await novo1.consultarcrushpornome(nome);
    console.log("registro", registros);
    resp.send(registros);
})

api.put('/crush/:id' , async (req , resp) => {
  let id = req.params.id;
  let atualizadoCrush = req.body;
  let resultado = await novo1.atualizarcrush(id, atualizadoCrush);
resp.send('UPDATE FEITO COM SUCESSO ');
})

api.delete('/crush/:id' , async (req , resp) => {
let id = req.params.id;
await novo1.deletarcrush(id);
  resp.send('DELETE FEITO COM SUCESSO ');
  })

api.get('/turmas' , async (req, resp) => {
    let registros2 = await novo2.Listarturma();
    resp.send(registros2);
})

api.post('/turmas' , async (req, resp) => {
    let novaturma = req.body;
    let id = await novo2.inserirturma(novaturma);
    resp.send({
        novoId: id
        })
})

  api.get('/turmas/filtrar' , async (req , resp) => {
    let nome = req.query.nome;
    let registros = await novo2.consultarturmapornome(nome);
    
    resp.send(registros);
})

api.get('/turmas/:id' , async (req, resp) => {
  let id = req.params.id;
  let resultado = await novo2.buscarTurmaID(id)
  resp.send(resultado);
})

api.put('/turmas/:id' , async (req , resp) => {
  let id = req.params.id;
  let novaturma = req.body;

  await novo2.atualizarturma(id , novaturma)
  resp.send('UPDATE FEITO COM SUCESSO ')
} )

api.delete('/turmas/:id' , async (req , resp) => {
  let id = req.params.id;
  await novo2.deletarturma(id)
  resp.send('DELETE FEITO COM SUCESSO ')
})

api.get('/funcionarios' , async (req, resp) => {
    let resultado = await novo3.listarfuncionarios()
    resp.send(resultado)
})

api.get('/funcionarios/filtra' , async (req, resp) => {
  let nome = req.query.nome;
  let resultado = await novo3.ListarPorNome(nome)
  resp.send(resultado)
})

api.get('/funcionarios/:id' , async (req, resp) => {
   let id = req.params.id;

 let resultado = await novo3.buscarfuncionario(id)
resp.send(resultado);

})

api.put('/funcionarios/:id' , async (req , resp) => {
  let id = req.params.id;
  let novofuncionario = req.body;

  await novo3.updateFuncionario(id , novofuncionario)
  resp.send('UPDATE FEITO COM SUCESSO ')
})

api.post('/funcionarios' , async (req , resp ) => {
    let novofuncionario = req.body;

    let id = await novo3.insirfuncionarios(novofuncionario);
    resp.send({
        novoId: id
        })
})

api.delete('/funcionarios/:id' , async (req , resp) => {
  let id = req.params.id;
  await novo3.deletarfuncionario(id)
  resp.send('DELETE FEITO COM SUCESSO ')
})


api.get('/produto' , async (req , resp) => {
    let resultadinho = await novo4.ListarProduto()
    resp.send(resultadinho)
})

api.post('/produto' , async (req , resp) => { 
    let novoproduto = req.body;

    let id = await novo4.inserirproduto(novoproduto);
    resp.send({
        novoId: id
})
 })

 api.get('/produto/filtra' , async (req , resp) => {
  let nome = req.query.nome;
  let resultado = await novo4.buscarProdutoNome(nome)
  resp.send(resultado);
 })

 api.get('/jogador' , async (req , resp) => {
    let resultado = await novo5.listarjogador()

    resp.send(resultado)
 })
 
   api.get('/jogador/filtrar' , async (req , resp) => {
    let nome = req.query.nome;
    let registros = await novo5.consultanome(nome);
    resp.send(registros);
  })

api.get('/produtos/:id' , async (req , resp) => {
  let id = req.params.id;
  let resultado = await novo4.buscaProdutoID(id)
  resp.send(resultado)
}) 

api.put('/produto/:id' , async (req , resp) => {
  let id = req.params.id;
  let novoProduto = req.body;
  let resultado = await novo4.UPdateProduto(id , novoProduto)
  resp.send('UPDATE FEITO COM SUCESSO')
})

api.delete('/produto/:id' , async (req , resp) => {
  let id = req.params.id;
  await novo4.deletaProduto(id)
  resp.send('DELETE FEITO COM SUCESSO')
})

 api.get('/jogador/:id' , async (req , resp) => { 
  let id = req.params.id;
  let registros = await novo5.consultarJogador(id)
  resp.send(registros);
  })

  api.put('/jogador/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await novo5.alterarjogador(id, novosDados);
  resp.send();
})

 api.post('/jogador' , async (req , resp) => { 
    let novojogador = req.body;
    let id = await novo5.inserirjogador(novojogador);
    resp.send({
        novoId: id
        })
  })

  api.delete('/jogador/:id', async (req, resp) => {
  let id = req.params.id;
  await novo5.deletarjogador(id);
  resp.send();
})

 api.get('/praias' , async (req , resp) => {
    let resultado = await novo6.listarpraias()
    resp.send(resultado)
  })
    
 api.post('/praias' , async (req , resp) => {
    let novapraia = req.body;
    let id = await novo6.inserirnovapraia(novapraia);
    resp.send({
    novoId: id
})
  })

api.get('/praias/filtra' , async (req , resp) => {
    let nome = req.query.nome;
    let registros = await novo6.buscarPraiaNome(nome);
    resp.send(registros);
})

api.get('/praias/:id' , async (req , resp) => {
  let id = req.params.id;
  let registros = await novo6.buscaPraiaID(id)
  resp.send(registros);
})

api.put('/praias/:id' , async (req , resp) => {
  let id = req.params.id;
  let novapraia = req.body;

  await novo6.UPdatePraia(id , novapraia);
  resp.send('UPDATE FEITO COM SUCESSO');
})

api.delete('/praias/:id' , async (req , resp) => {
  let id = req.params.id;
  await novo6.deletarPraia(id);
  resp.send('DELETE FOI FEITO COM SUCESSO');
})

  api.get('/estado' , async (req , resp ) => {
    let resultado = await novo7.listarEstado();

    resp.send(resultado)
})

api.post('/estado' , async (req , resp) => {
  let novoEstado = req.body;

  let id = await novo7.Adicionarestado(novoEstado)
  resp.send({
    novoId: id
  })

})

api.get('/estados/filtra' , async (req , resp) => {
  let nome = req.query.nome;
  let resultado = await novo7.listarpornomeE(nome)
  resp.send(resultado)
})

api.get('/estados/:id' , async (req , resp) => {
  let id = req.params.id;
  let resultado = await novo7.listaridE(id)
  resp.send(resultado)
})

api.put('/estados/:id' , async (req , resp) => {
  let id = req.params.id;
  let novoEstado = req.body;
await novo7.updateEstado(id , novoEstado)
resp.send('UPDATE FEITO COM SUCESSO')
})

api.delete('/estados/:id' , async (req , resp) => {
  let id = req.params.id;
  await novo7.deletarEstado(id)
  resp.send('DELETE FEITO COM SUCESSO')
})

api.get('/material' , async (req , resp) => {
  let resultado = await novo8.listarmaterial()
  resp.send(resultado)
})

api.post('/material' , async (req , resp) => {
  let novomaterial = req.body;
  let id = await novo8.Adicionamaterial(novomaterial); 

  resp.send({
    novoId: id
  })
})

api.get('/material/filtra' , async (req , resp) => {
  let nome = req.query.nome;
let resultado = await novo8.buscarMaterialnome(nome)
resp.send(resultado)
})

api.get('/material/:id' , async (req , resp) => {
  let id = req.params.id;
  let resultado = await novo8.buscaMaterial(id)
  resp.send(resultado)
})

api.put('/material/:id' , async (req , resp) => {
  let id = req.params.id;
  let novoMaterial = req.body;
  await novo8.atualizamaterial(id , novoMaterial)
  resp.send('UPDATE FEITO COM SUCESSO')
})

api.delete('/material/:id' , async (req , resp) => {
  let id = req.params.id;
  await novo8.deletamaterial(id)
  resp.send('DELETE FEITO COM SUCESSO')
})

api.get('/filme' , async (req , resp) => {
  let resultado = await novo9.listarfilme()
  resp.send(resultado)
})

api.post('/filme' , async (req , resp) => {
  let novofilme = req.body;
  let id = await novo9.adicionarfilme(novofilme);
  resp.send({
  novoId: id
})
})

api.get('/filme/filtra' , async (req , resp) => {
  let nome = req.query.nome;
  let resultado = await novo9.buscarfilmeNome(nome)
  resp.send(resultado)
})

api.get('/filme/:id' , async (req , resp) => {
  let id = req.params.id;
  let resultado = await novo9.buscarfilmeID(id)
  resp.send(resultado)
})

api.put('/filme/:id' , async (req , resp) => {
  let id = req.params.id;
  let novofilme = req.body;

  await novo9.updateFilme(id , novofilme)
  resp.send('UPDATE FEITO COM SUCESSO')
})

api.delete('/filme/:id' , async (req , resp) => {
  let id = req.params.id;
  await novo9.deletarfilme(id)
  resp.send('DELETADO COM SUCESSO')
})

api.get('/alunos' , async (req , resp) => {
  let resultado = await novo10.listaraluno()
  resp.send(resultado)
})

api.get('/alunos/filtra' , async (req , resp) => {
  let nome = req.query.nome;
  let resultado = await novo10.ConsultarPornome(nome)
  resp.send(resultado)
})

api.get('/alunos/:id' , async (req , resp) => {
  let id = req.params.id
  let resultado = await novo10.listarAlunoID(id)
  resp.send(resultado)
})

api.put('/alunos/:id' , async (req , resp) => {
  let id = req.params.id;
  let novosDados = req.body;

 await novo10.UpdateAluno(id , novosDados)
  resp.send('update feito com sucesso')
})

api.post('/alunos' , async (req , resp) => {
  let novoaluno = req.body;
  let id = await novo10.adicionaralunos(novoaluno)

  resp.send({
    novoId: id
  })
})

api.delete('/alunos/:id' , async (req , resp) => {
  let id = req.params.id;
  await novo10.deletaraluno(id)
  resp.send('aluno deletado com sucesso')
})





























api.listen(5010, () => console.log('..: API subiu com sucesso!'));