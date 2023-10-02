// Importaciones necesarias para que la aplicación funcione.
import logo from './logo.svg';
import './styles/App.css';

// Define un componente funcional llamado 'App'.
function App() {

  // Devuelve el siguiente JSX, que representa la interfaz de usuario.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

// Define una variable 'url' para almacenar la dirección de una API.
let url = 'https://jsonplaceholder.typicode.com/users/';

// Realiza una solicitud 'fetch' a la API, convierte la respuesta en JSON y llama a la función 'mostrarData' con los datos.
fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error));

// Define una función llamada 'mostrarData' que toma los datos como argumento.
const mostrarData = (data) => {
  console.log(data);
  let body = "";

  // Itera a través de los datos y construye filas de tabla con los datos de la API.
  for (var i = 0; i < data.length; i++) {
    body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].username}</td><td>${data[i].email}</td></tr>`;
  }

  // Actualiza el contenido de un elemento HTML con el 'body' construido.
  document.getElementById('data').innerHTML = body;


}
  // Exporta el componente 'App' para que pueda ser utilizado en otros archivos.
export default App;
