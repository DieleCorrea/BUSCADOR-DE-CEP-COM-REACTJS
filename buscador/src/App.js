
import { FiSearch} from 'react-icons/fi'
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


    </div>
  );
}

export default App;
