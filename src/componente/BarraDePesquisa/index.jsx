import { useState } from 'react'
import './styles.css'

export default function BarraDePesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    return (
        <input 
        className='barra-pesquisa'  
        type='search' 
        placeholder="Digite o que você procura" 
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)}/>
    )
}