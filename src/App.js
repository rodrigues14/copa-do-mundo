import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import Banner from './componentes/Banner'

function App() {

  const selecoes = [
    {
      nome: 'Brasil',
      corPrimaria: '#ffdf00',
      corSecundaria: '#d8ffd4',
    },
    {
      nome: 'Argentina',
      corPrimaria: '#75AADB',
      corSecundaria: '#ffffcc',
    },
    {
      nome: 'Inglaterra',
      corPrimaria: '#c8102e',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Portugal',
      corPrimaria: '#ff0000',
      corSecundaria: '#cdffc8',
    },
    {
      nome: 'Espanha',
      corPrimaria: '#F1BF00',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Uruguai',
      corPrimaria: '#0038a8ff',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'França',
      corPrimaria: '#005c8a',
      corSecundaria: '#e2e5ff',
    },
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner 
        enderecoImagem='/imagens/banner-copa.webp'
        textoAlternativo='Banner da Copa do Mundo 2022'
      />
      <Formulario times={selecoes.map(selecao => selecao.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {selecoes.map(selecao => <Time 
        key={selecao.nome} 
        nome={selecao.nome} 
        corPrimaria={selecao.corPrimaria} 
        corSecundaria={selecao.corSecundaria} 
        jogadores={jogadores.filter(jogador => jogador.selecao === selecao.nome)}
      />)}
      <Rodape />
      

    </div>
  );
}

export default App;
