import { useEffect, useState } from 'react'
import './App.css'
import BarraDePesquisa from './componente/BarraDePesquisa'
import Card from './componente/Card'
import Filtro from './componente/Filtro'
import Ordenacao from './componente/Ordenacao'
import Sidebar from './componente/Sidebar'

function App() {
  const [dados, setDados] = useState ([]);
  useEffect (() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(resposta => resposta.json())
    .then(dados => setDados(dados) )
  },[])

  return (
    <div className='container'>
      <Sidebar/>
      <div>
        <BarraDePesquisa/>
        <Filtro/>
        <Ordenacao/>
        <ul className='lista-cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card
              id={item.id}
              imagemUrl={item.imagem_capa}
              titulo={item.titulo}
              resumo={item.resumo}
              linhasDeCódigo={item.linhas_de_codigo}
              compartilhamentos={item.compartilhamentos}
              comentarios={item.comentarios}
              usuario={item.usuario}
              />
            </li>
          )):null}
        </ul>
      </div>
    </div>
  )
}

export default App
