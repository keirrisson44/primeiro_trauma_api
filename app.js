import express from 'express'
import { listarCrush, inserircrush} from "./cursoRepository.js"
import { Listarturma, inserirturma} from "./turmasrepository.js"
import { listarfuncionarios , insirfuncionarios} from "./funcionariosrepository.js";
import { ListarProduto , inserirproduto} from "./produtorepository.js";
import { listarjogador , inserirjogador} from "./clubefutrepository.js";
import { listarpraias , inserirnovapraia } from "./praiasrepository.js";
import { listarEstado , Adicionarestado } from './estadorepository.js';
import { listarmaterial , Adicionamaterial} from "./materialEscolarepository.js"
import { listarfilme , adicionarfilme} from './filmerepository.js';
import { listaraluno , adicionaralunos} from "./alunosrepository.js"



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
  let registros = await listarCrush();
  resp.send(registros);
})

api.post('/crush', async (req, resp) => {
  let novoCrush = req.body;
  
  let id = await inserircrush(novoCrush);

  resp.send({
    novoId: id
  })
})

api.get('/turmas' , async (req, resp) => {
    let registros2 = await Listarturma();
    resp.send(registros2);
})

api.post('/turmas' , async (req, resp) => {
    let novaturma = req.body;
    let id = await inserirturma(novaturma);
    resp.send({
        novoId: id
        })
})

api.get('/funcionarios' , async (req, resp) => {
    let resultado = await listarfuncionarios()
    resp.send(resultado)
})

api.post('/funcionarios' , async (req , resp ) => {
    let novofuncionario = req.body;

    let id = await insirfuncionarios(novofuncionario);
    resp.send({
        novoId: id
        })
})

api.get('/produto' , async (req , resp) => {
    let resultadinho = await ListarProduto()
    resp.send(resultadinho)
})

api.post('/produto' , async (req , resp) => { 
    let novoproduto = req.body;

    let id = await inserirproduto(novoproduto);
    resp.send({
        novoId: id
})
 })

 api.get('/jogador' , async (req , resp) => {
    let resultado = await listarjogador()

    resp.send(resultado)
 })

 api.post('/jogador' , async (req , resp) => { 
    let novojogador = req.body;
    let id = await inserirjogador(novojogador);
    resp.send({
        novoId: id
        })
  })

 api.get('/praias' , async (req , resp) => {
    let resultado = await listarpraias()
    resp.send(resultado)
  })
    
 api.post('/praias' , async (req , resp) => {
    let novapraia = req.body;
    let id = await inserirnovapraia(novapraia);
    resp.send({
    novoId: id
})
  })

  api.get('/estado' , async (req , resp ) => {
    let resultado = await listarEstado();

    resp.send(resultado)
  })

api.post('/estado' , async (req , resp) => {
  let novoEstado = req.body;

  let id = await Adicionarestado(novoEstado)
  resp.send({
    novoId: id
  })

})

api.get('/material' , async (req , resp) => {
  let resultado = await listarmaterial()
  resp.send(resultado)
})

api.post('/material' , async (req , resp) => {
  let novomaterial = req.body;
  let id = await Adicionamaterial(novomaterial); 

  resp.send({
    novoId: id
  })
})

api.get('/filme' , async (req , resp) => {
  let resultado = await listarfilme()
  resp.send(resultado)
})

api.post('/filme' , async (req , resp) => {
  let novofilme = req.body;
  let id = await adicionarfilme(novofilme);
  resp.send({
  novoId: id
})
})

api.get('/alunos' , async (req , resp) => {
  let resultado = await listaraluno()
  resp.send(resultado)
})

api.post('/alunos' , async (req , resp) => {
  let novoaluno = req.body;
  let id = await adicionaralunos(novoaluno)

  resp.send({
    novoId: id
  })
})

api.listen(5010, () => console.log('..: API subiu com sucesso!'));