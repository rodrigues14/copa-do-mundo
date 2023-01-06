import { IJogador } from '../../compartilhado/interfaces/IJogador'
import Jogador from '../Jogador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

interface TimeProps {
    cor: string
    corSecundaria: string
    nome: string
    jogadores: IJogador[]
    aoDeletar: (nome: string) => void
    mudarCor: (cor: string, nome: string) => void
    aoFavoritar: (nome: string) => void
}

const Time = (props: TimeProps) => {
    const css = { backgroundColor: hexToRgba(props.cor, '0.6') }

    return (
        (props.jogadores.length > 0) ? <section className='selecao' style={css}>
            <input 
                value={props.cor} 
                type="color" 
                className='input-cor'
                onChange={evento => props.mudarCor(evento.target.value, props.nome)} 
            />
            <h3 style={{ borderColor: hexToRgba(props.cor,'0.6') }}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map((jogador) => {
                    return (
                        <Jogador
                            corDeFundo={props.cor}
                            key={jogador.nome} 
                            nome={jogador.nome} 
                            posicao={jogador.posicao} 
                            imagem={jogador.imagem}
                            data={jogador.data}
                            aoDeletar={props.aoDeletar}
                            favorito={jogador.favorito}
                            aoFavoritar={props.aoFavoritar}
                        />
                    )
                })}
            </div>
        </section> 
        : <></>
    )
}

export default Time
