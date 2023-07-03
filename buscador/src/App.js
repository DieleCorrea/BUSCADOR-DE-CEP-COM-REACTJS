
import { FiSearch} from 'react-icons/fi'
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de cep</h1>

      <div className="containerImput">   
      
        <input
          type="text"
          placeholder="Digite seu cep " //esse placeholder é pra quando a pessoa não tiver feito nada ainda e aparecer isso
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
