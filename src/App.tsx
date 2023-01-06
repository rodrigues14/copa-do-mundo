import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import Banner from './componentes/Banner'
import { IJogador } from './compartilhado/interfaces/IJogador';

function App() {

  const [selecoes, setSelecoes] = useState([
    {
      nome: 'Brasil',
      cor: '#ffdf00',
    },
    {
      nome: 'Argentina',
      cor: '#75AADB',
    },
    {
      nome: 'Inglaterra',
      cor: '#c8102e',
    },
    {
      nome: 'Portugal',
      cor: '#ff0000',
    },
    {
      nome: 'Espanha',
      cor: '#F1BF00',
    },
    {
      nome: 'Uruguai',
      cor: '#0038a8',
    },
    {
      nome: 'França',
      cor: '#005c8a',
    },
  ])

  const [jogadores, setJogadores] = useState<IJogador[]>([])

  const aoNovoJogadorAdicionado = (jogador: IJogador) => {
    setJogadores([...jogadores, jogador])
  }

  function deletarJogador(nome: string) {
    setJogadores(jogadores.filter(jogador => jogador.nome !== nome))
  }

  function mudarCorDoTime(cor: string, nome: string) {
    setSelecoes(selecoes.map(selecao => {
      if (selecao.nome === nome) {
        selecao.cor = cor
      }
      return selecao
    }))
  }

  function resolverFavorito(nome: string) {
    setJogadores(jogadores.map(jogador => {
      if (jogador.nome === nome) jogador.favorito = !jogador.favorito
      return jogador
    }))
  }

  return (
    <div className="App">
      <Banner 
        enderecoImagem='/imagens/banner-copa.webp'
        textoAlternativo='Banner da Copa do Mundo 2022'
      />
      <Formulario 
        times={selecoes.map(selecao => selecao.nome)} 
        aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}
      />

      {selecoes.map(selecao => 
        <Time 
          mudarCor={mudarCorDoTime}
          key={selecao.nome} 
          nome={selecao.nome} 
          cor={selecao.cor} 
          corSecundaria={selecao.cor} 
          jogadores={jogadores.filter(jogador => jogador.selecao === selecao.nome)}
          aoDeletar={deletarJogador}
          aoFavoritar={resolverFavorito}
        />)}
      <Rodape />
      

    </div>
  );
}

export default App;
