import { conexao } from './connection.js';


export async function cadastarPet(pet){
    const comando =
    `INSERT INTO tb_pet(nm_pet)
                  VALUE(?)`
    
    const [resposta] = await conexao.query(comando, [pet.nome]);
    return resposta[0];
}


export async function consultarTodosPet(){
    const comando = 
    `select id_pet			id,
            nm_pet			nome
       from tb_pet`

    const [linhas] = await conexao.query(comando);
    return linhas;
}