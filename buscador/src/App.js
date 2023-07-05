
import { useState } from 'react'; 
import { FiSearch} from 'react-icons/fi'
import './styles.css';

function App() {

  const[ input, setImput] = useState('')
  /* Input é o nome do estado e o setImput é o nome da função que temos  para trocar  valor o estado.
  Quando eu chamar o Input apenas, eu to querendo apenas saber  nome do estado. Quandoo chamo o setImput é para eu PASSAR UM VALOR NOVO PARA ESSE ESTADO */
  return (
    <div className="container">
      <h1 className="title">Buscador de cep</h1>

      <div className="containerImput">   
      
        <input
          type="text"
          placeholder="Digite seu cep " //esse placeholder é pra quando a pessoa não tiver feito nada ainda e aparecer isso
          value={input}/*o valor do input estara sempre atrelado ao nosso usaeState input */
          onChange={(e) => setImput(e.target.value)}
          /*recebbemos uma função anonima que chamei de "e" e passamos para  set input onde recebemos o evento e temos acesso ao valor dgitado através do "e.target.value" */

          />
        <button className="buttonSearch">
        <FiSearch 
          size={25}
          color="#FFF" />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 93145593</h2>

        <span>Rua teste</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande-MS</span>
      </main>

    </div>
  );
}

export default App;
