/**
 * App.js
 */

// importação de recursos
import logo from './logo.svg';
import './App.css';


/**
 * Criação de um componente. Neste caso, chamar-se-á App.
 * Os componente começam SEMPRE por uma Maiúscula.
 * 
 * Os componentes podem ser de dois tipos:
 *    - classes
 *    - funções
 * 
 * Em todos os componentes haverá sempre um RETURN
 * 
*/
function App() {
  return (
    <div className="App">
      {/* Este é um comentário...
          Eles mudam conforme o contexto.
          Neste sítio estamos a escrever JSX, não html */}
      <header className="App-header">
        {/* o termo 'className' existe para não entrar
            em conflito com o termo 'class'.
            Em 'run time', será convertido em 'class' no browser */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* o acesso aos dados de um recurso, iremos colocá-lo entre {} */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} // fim do componente App

// um 'componente' só será acessível a outros componentes, 
// se for exportado
export default App;

