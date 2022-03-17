import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'

function App() {
  let accesos = ['Home', 'Contact us', 'About us'];
  let alumnos = [
    {
      nombre: 'Cande',
      apellido: 'Sapoznik',
    },
    {
      nombre: 'Javo',
      apellido: 'Elizalde'
    }
  ]

  return (
    <>
      <Header accesos={accesos}/>
      <Main alumnos={alumnos}/>
    </>
  );
}

export default App;
