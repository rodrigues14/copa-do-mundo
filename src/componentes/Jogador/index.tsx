import './Jogador.css'

interface JogadorProps {
    nome: string
    imagem: string
    posicao: string
    corDeFundo: string
    data: string
}

const Jogador = ({ nome, imagem, posicao, corDeFundo, data }: JogadorProps) => {
    return (
        <div className='jogador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{posicao}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
            </div>
        </div>
    )
}

export default Jogador