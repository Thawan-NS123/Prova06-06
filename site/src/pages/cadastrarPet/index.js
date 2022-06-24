import axios from 'axios'
import { useState } from "react"
import { Link } from 'react-router-dom';


export default function Index(){

    const[nome, setNome] = useState('');

    async function salvarClick (){
        const resposta = await axios.post('http://localhost:5000/pet',{    
        nome:nome
        })
        if(resposta.status === 401){
            alert(resposta.data.erro);
        }
    }


    return(
        <main>
            <Link>Voltar</Link>
            <h3>Cadastrar o seu PET</h3>
            <input value={nome} onChange={e => setNome(e.target.value)}/>
            <button >Cadastrar</button>
        </main>
    )
}