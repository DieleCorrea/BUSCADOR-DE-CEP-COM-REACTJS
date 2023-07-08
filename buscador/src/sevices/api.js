/*importamos a biblioca */
import axios from "axios";

/*criamos uma variável que irá receber a biblioteca e dentro dela usamos o " baseURL" que é nossa url fixa, ou seja, nãao muda */
const api = axios.create({
 baseURL: "https://viacep.com.br/ws/"
});

/*exportamos o arquivo para conseguir usar a api */
export default api;
