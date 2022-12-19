import { IJogador } from '../../compartilhado/interfaces/IJogador'
import Jogador from '../Jogador'
import './Time.css'

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    jogadores: IJogador[]
}

const Time = (props: TimeProps) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.jogadores.length > 0) ? <section className='selecao' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador => 
                    <Jogador
                        corDeFundo={props.corPrimaria}
                        key={jogador.nome} 
                        nome={jogador.nome} 
                        posicao={jogador.posicao} 
                        imagem={jogador.imagem}
                    />
                )}
            </div>
        </section> 
        : ''
    )
}

export default Time
