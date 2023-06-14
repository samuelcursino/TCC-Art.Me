//Express sendo importado e atribuído à uma constante
const express = require('express');

//Importação da tabela Serviço
const modelPost = require('../model/modelPost');
const modelUsuario = require('../model/modelUsuario');

//Importação do Router
const router = express.Router();

// -------------------------------------- ROTA DE CADASTRAR POSTAGEM ------------------------------------
router.post('/cadastrarPostagem', (req, res)=>{

    console.log(req.body);    

    let {
        id_postagem,
        desc_postagem,
        tblUsuarioIdUsuario
        } = req.body;

    modelPost.create(
        //DADOS DA INSERÇÂO DE POSTAGEM
        {
        id_postagem,
        desc_postagem,
        tblUsuarioIdUsuario
        }

    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"POSTAGEM INSERIDA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR A POSTAGEM.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

// ------------------------------ ROTA DE LISTAGEM DE POSTAGEM -----------------------------
router.get('/listarPostagem', (req, res)=>{

    modelPost.findAll({
        // attributes:
        // [
        // 'id_usuario',
        // 'nome', 
        // 'sobrenome', 
        // 'catServicoNomeCategoria',
        // 'titulo', 
        // 'desc_postagem'
        // ], 
        include: modelUsuario
    })
        .then(
            (response)=>{
                // console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"POSTAGEM LISTADA COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"POSTAGEM NÃO CONSTA NO BANCO DE DADOS.",
                    errorObject:error
                });
            }
        );

});
// -----------------------------------------------------------------------------------------------------

// ------------------------- ROTA DE LISTAGEM DE POSTAGEM POR ID_USUARIO --------------------------------
router.get('/listarPostagem/:tblUsuarioIdUsuario', (req, res)=>{

    let {tblUsuarioIdUsuario} = req.params;

    modelPost.findAll({
        // attributes:
        // [
        // 'id_usuario',
        // 'nome',
        // 'sobrenome',
        // 'tblUsuarioIdUsuario'
        // ],
        include: modelUsuario,

        where:{tblUsuarioIdUsuario}})

    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"POSTAGEM LISTADA COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"POSTAGEM NÃO CONSTA NO BANCO DE DADOS.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ------------------------- ROTA DE LISTAGEM DE SERVICO POR DESCRIÇÃO --------------------------
// router.get('/listarServicoDESC/:desc_servico', (req, res)=>{

//     let {desc_servico} = req.params;

//     modelPost.findOne({attributes:['id_servico','desc_servico'],where:{desc_servico}})
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
// router.put('/alterarServico', (req, res)=>{

//     const {id_servico, desc_servico} = req.body;

//     modelPost.update(
//         {desc_servico},
//         {where:{id_servico}}
//     ).then(
//         ()=>{
//             return res.status(200).json({
//                 erroStatus:false,
//                 mensagemStatus:"SERVICO ALTERADO COM SUCESSO."
//             })
//         }
//     ).catch(
//         (error)=>{
//             return res.status(400).json({
//                 erroStatus:true,
//                 mensagemStatus:"ERRO AO ALTERAR O SERVICO.",
//                 errorObject:error
//             });
//         }
//     );    
// });
// -----------------------------------------------------------------------------------------------------

// ----------------------------------- ROTA DE EXCLUSÃO DE SERVICO-----------------------------------
// router.delete('/excluirServico/:id_servico', (req, res)=>{
//     console.log(req.params);
//     let {id_servico} = req.params

//     modelPost.destroy(
//         {where:{id_servico}}
//     ).then(
//         ()=>{
//             return res.status(200).json({
//                 erroStatus:false,
//                 mensagemStatus:"SERVICO EXCLUIDO COM SUCESSO."
//             })
//         }
//     ).catch(
//         (error)=>{
//             return res.status(400).json({
//                 erroStatus:true,
//                 mensagemStatus:"ERRO AO EXCLUIR O SERVICO.",
//                 errorObject:error
//             });
//         }
//     );
// });
// -----------------------------------------------------------------------------------------------------

module.exports = router;