//Express sendo importado e atribuído à uma constante
const express = require('express');

//Importação da tabela CategoriaServiço
const modelCategoriaServico = require('../model/modelCategoriaServico');

//Importação do Router
const router = express.Router();

// -------------------------------------- ROTA DE CADASTRAR CATEGORIA DO SERVICO ------------------------------------
router.post('/cadastrarCategoriaServico', (req, res)=>{

    console.log(req.body);    

    let {nome_categoria} = req.body;
    
    modelCategoriaServico.create(
        //DADOS DA INSERÇÂO DE CATEGORIA
        {nome_categoria}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIA DO SERVICO CADASTRADA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR A CATEGORIA DO  SERVICO.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

// ------------------------------ ROTA DE LISTAGEM DE CATEGORIA DO SERVICO -----------------------------
router.get('/listarCategoriaServico', (req, res)=>{

    modelCategoriaServico.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"CATEGORIA DO SERVICO LISTADA COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"CATEGORIA DO SERVICO NÃO CONSTA NO BANCO DE DADOS.",
                    errorObject:error
                });
            }
        );

});
// -----------------------------------------------------------------------------------------------------

//------------------------------ ROTA DE LISTAGEM DE SERVICO POR ID ---------------------------
router.get('/listarCategoriaServicoPK/:id_categoria', (req, res)=>{

    //DECLARAR E RECEBER O ID
    let {id_categoria} = req.params;

    //AÇÃO DE SELEÇÃO DE DADOS DO SEQUELIZE
    modelCategoriaServico.findByPk(id_categoria)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIA DO SERVICO RECUPERADA COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"CATEGORIA DO SERVICO NÃO CONSTA NO BANCO DE DADOS.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------


module.exports = router;