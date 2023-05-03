//Express sendo importado e atribuído à uma constante
const express = require('express');

//Importação da tabela Serviço
const modelServico = require('../model/modelServico');

//Importação do Router
const router = express.Router();

// -------------------------------------- ROTA DE CADASTRAR SERVICO ------------------------------------
router.post('/cadastrarServico', (req, res)=>{
    console.log(req.body);    
    let {desc_servico} = req.body;
    modelServico.create(
        //DADOS DA INSERÇÂO DE USUARIO
        {desc_servico}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"SERVICO INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O SERVICO.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

// ------------------------------ ROTA DE LISTAGEM DE SERVICO -----------------------------
router.get('/listarServico', (req, res)=>{

    modelServico.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"SERVICO LISTADO COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"SERVICO NÃO CONSTA NO BANCO DE DADOS.",
                    errorObject:error
                });
            }
        );

});
// -----------------------------------------------------------------------------------------------------

//------------------------------ ROTA DE LISTAGEM DE SERVICO POR ID ---------------------------
router.get('/listarServicoPK/:id_Produto', (req, res)=>{

    //DECLARAR E RECEBER O ID
    let {id_Produto} = req.params;

    //AÇÃO DE SELEÇÃO DE DADOS DO SEQUELIZE
    modelServico.findByPk(id_Produto)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"SERVICO RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"SERVICO NÃO CONSTA NO BANCO DE DADOS.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ------------------------- ROTA DE LISTAGEM DE SERVICO POR DESCRIÇÃO --------------------------
// router.get('/listarServicoDESC/:desc_servico', (req, res)=>{

//     let {desc_servico} = req.params;

//     modelServico.findOne({attributes:['id_servico','desc_servico'],where:{desc_servico}})
//     .then(
//         (response)=>{
//             return res.status(200).json({
//                 erroStatus:false,
//                 mensagemStatus:"SERVICO RECUPERADO COM SUCESSO.",
//                 data:response
//             })
//         }
//     )
//     .catch(
//         (error)=>{
//             return res.status(400).json({
//                 erroStatus:true,
//                 mensagemStatus:"ERRO AO RECUPERAR O SERVICO.",
//                 errorObject:error
//             });
//         }
//     )
// });
// -----------------------------------------------------------------------------------------------------

// ----------------------------- ROTA DE ALTERAÇÃO DE SERVICO ----------------------------------------
router.put('/alterarServico', (req, res)=>{

    const {id_servico, desc_servico} = req.body;

    modelServico.update(
        {desc_servico},
        {where:{id_servico}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"SERVICO ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O SERVICO.",
                errorObject:error
            });
        }
    );    
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------------- ROTA DE EXCLUSÃO DE SERVICO-----------------------------------
router.delete('/excluirServico/:id_servico', (req, res)=>{
    console.log(req.params);
    let {id_servico} = req.params

    modelServico.destroy(
        {where:{id_servico}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"SERVICO EXCLUIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O SERVICO.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

module.exports = router;