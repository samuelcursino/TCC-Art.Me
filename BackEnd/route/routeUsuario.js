//Express sendo importado e atribuído à uma constante
const express = require('express');

//Importação da tabela Usuario
const modelUsuario = require('../model/modelUsuario');

//Importação do Router
const router = express.Router();

// -------------------------------------- ROTA DE CADASTRAR USUARIO ------------------------------------
router.post('/cadastrarUsuario', (req, res)=>{

    console.log(req.body);    

    let {
        nome,
        sobrenome,
        email,
        password,
        telefone,
        uf,
        catServicoNomeCategoria
        } = req.body;

    modelUsuario.create(
        //DADOS DA INSERÇÂO DE USUARIO/
        {
        nome,
        sobrenome,
        email,
        password,
        telefone,
        uf,
        catServicoNomeCategoria
        }

    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"USUARIO INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O USUARIO.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

// ------------------------------ ROTA DE LISTAGEM DE USUARIO ------------------------------------------
router.get('/listarUsuario', (req, res)=>{

    modelUsuario.findAll({
        attributes:
        [
        'id_usuario',
        'nome',
        'sobrenome', 
        'catServicoNomeCategoria'
        ]})

        .then(
            (response)=>{
                // console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"USUARIO LISTADO COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"USUARIO NÃO CONSTA NO BANCO DE DADOS.",
                    errorObject:error
                });
            }
        );

});
// -----------------------------------------------------------------------------------------------------------------------------------------

// ------------------------- ROTA DE LISTAGEM DE USUARIO POR CATEGORIA (exemplo: 1-Pintor, 2-Fotografo, 3- Musico) -------------------------
router.get('/listarUsuarioCATEGORIA/:catServicoNomeCategoria', (req, res)=>{

    let {catServicoNomeCategoria} = req.params;

    modelUsuario.findAll({
        attributes:
        [
        'id_usuario',
        'nome',
        'sobrenome',
        'catServicoNomeCategoria'
        ],
        where:{catServicoNomeCategoria}})

    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"USUARIO RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O USUARIO.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ------------------------- ROTA DE LISTAGEM DE USUARIO POR EMAIL E SENHA -----------------------------
router.get('/listarUsuarioEMAIL/:email/:password', (req, res)=>{

    let {email, password} = req.params;

    modelUsuario.findOne({
        attributes:
        [
        'id_usuario',
        'nome',
        'sobrenome',
        'uf',
        'telefone',
        'email',
        'password', 
        'catServicoNomeCategoria'
        ],

            where:
            {
            email,
            password
            }})

    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"USUARIO RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O USUARIO.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------


// ----------------------------- ROTA DE ALTERAÇÃO DE USUARIO ----------------------------------------
router.put('/alterarUsuario', (req, res)=>{

      const {
            id_usuario,
            nome,
            uf,
            telefone,
            email,
            senha
            } = req.body;

    modelUsuario.update(
        {
        nome,
        sobrenome,
        uf,
        telefone,
        email,
        senha
        },

        {where:{id_usuario}}

    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"USUARIO ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O USUARIO.",
                errorObject:error
            });
        }
    );    
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------------- ROTA DE EXCLUSÃO DE USUARIO-----------------------------------
router.delete('/excluirUsuario/:nome', (req, res)=>{

    console.log(req.params);

    let {nome} = req.params

    modelUsuario.destroy(
        {where:{nome}}
        
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"USUARIO EXCLUIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O USUARIO.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------



module.exports = router;