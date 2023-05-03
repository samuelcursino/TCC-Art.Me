//Express sendo importado e atribuído à uma constante
const express = require('express');

//Importação da tabela Chat
const modelChat = require('../model/modelChat');

//Importação do Router
const router = express.Router();

// -------------------------------------- ROTA DE ENVIAR MENSAGENS ------------------------------------
router.post('/cadastrarMensagem', (req, res)=>{
    console.log(req.body);    
    let {Mensagem, imagem} = req.body;
    modelChat.create(
        //DADOS DA INSERÇÂO DE MENSAGEM
        {Mensagem, imagem}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"MENSAGEM ENVIADA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ENVIAR MENSAGEM.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

// ------------------------------ ROTA DE LISTAR MENSAGEM -----------------------------
router.get('/listarMensagem', (req, res)=>{

    modelChat.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"MENSAGEM LISTADO COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"MENSAGEM NÃO CONSTA NO BANCO DE DADOS.",
                    errorObject:error
                });
            }
        );

});
// -----------------------------------------------------------------------------------------------------

// ----------------------------------- ROTA DE EXCLUSÃO DE MENSAGEM -----------------------------------
router.delete('/excluirMensagem/:mensagem', (req, res)=>{
    console.log(req.params);
    let {mensagem} = req.params

    modelChat.destroy(
        {where:{mensagem}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"MENSAGEM EXCLUIDA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR A MENSAGEM.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------



module.exports = router;