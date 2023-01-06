import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Jogador.css'

interface JogadorProps {
    nome: string
    imagem: string
    posicao: string
    corDeFundo: string
    data: string
    aoDeletar: (nome: string) => void
    favorito: boolean
    aoFavoritar: (nome: string) => void
}

const Jogador = ({ nome, imagem, posicao, corDeFundo, data, aoDeletar, favorito, aoFavoritar }: JogadorProps) => {
    function favoritar() {
        aoFavoritar(nome)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='jogador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(nome)} 
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{posicao}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
                <div className='favoritar'> 
                    {favorito 
                        ? <AiFillHeart {...propsFavorito} color='#ff0000' /> 
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Jogador