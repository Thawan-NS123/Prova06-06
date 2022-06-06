import { cadastarPet, consultarTodosPet } from "../Repository/petRepository.js";

import { Router } from 'express'

const server = Router();

server.post('/pet', async(req, resp) =>{
    try {

        const petParaCadastrar = req.body;

        if(!petParaCadastrar){
            throw new Error('Nome do pet Obrigatorio')
        }

        const resposta = await cadastarPet(petParaCadastrar);

        resp.send(resposta)
        
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
});

server.get('/pet', async(req, resp) =>{
    try {

        const resposta = await consultarTodosPet()

        resp.send(resposta)
        
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server