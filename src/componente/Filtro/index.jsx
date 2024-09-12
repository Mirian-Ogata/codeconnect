import './styles.css'
import Fechar from './assets/close.svg'

export default function Filtro () {
    return(
        <section className="container-filtro">
            <ul>
                <li className="item__filtro item__filtro-ativo">
                    Front-end
                    <img src={Fechar} alt="" />
                    </li>
                <li className="item__filtro">React</li>
                <li className="item__filtro" >Acessibilidade</li>
            </ul>
            <button>Limpar tudo</button>
        </section>
    )
}