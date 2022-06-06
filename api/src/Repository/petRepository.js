import { conexao } from './connection.js';


export async function cadastarPet(pet){
    const comando =
    `INSERT INTO tb_pet(nm_pet)
            VALUE(?)`
    
    const [resposta] = await conexao.query(pet.nome);
    pet.id = resposta.insertId;
    return pet;
}


ex