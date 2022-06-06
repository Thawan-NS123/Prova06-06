import 'dotenv/config'

import petController from './Controller/petcontroller.js'
 
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.use(petController)



server.listen(process.env.PORT, () => console.log(`API conectada com sucesso na porta ${process.env.PORT}`))