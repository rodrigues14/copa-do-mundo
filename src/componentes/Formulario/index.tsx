import { useState } from 'react'
import { IJogador } from '../../compartilhado/interfaces/IJogador'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

interface FormularioProps {
    aoJogadorCadastrado: (jogador: IJogador) => void
    times: string[]
}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [posicao, setPosicao] = useState('')
    const [imagem, setImagem] = useState('')
    const [selecao, setSelecao] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            posicao,
            imagem,
            selecao
        })
        setNome('')
        setPosicao('')
        setImagem('')
        setSelecao('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de um jogador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do jogador"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Posição" 
                    placeholder="Digite a posição"
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Seleção" 
                    itens={props.times}
                    valor={selecao}
                    aoAlterado={valor => setSelecao(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario