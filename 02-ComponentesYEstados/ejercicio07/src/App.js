import logo from './logo.svg';
import './App.css';
import Header from './site/Header';
import Main from './site/Main';
import Footer from './site/Footer';

let muelle = {
  nombre: '⚓️ Puerto deportivo ⚓️',
  barcos: [
    {
      nombre: 'bar quito',
      eslora: '5m',
      tripulantes: 2
    },
    {
      nombre: 'imperioso',
      eslora: '12m',
      tripulantes: 3
    }],
  contacto: {
    telefono: '94463827'
  }
};

function App() {
  return (
    <div className="App">
      <Header key="header" dock={muelle} />
      <Main key="main" dock={muelle} />
      <Footer key="footer" dock={muelle} />
    </div>
  );
}

export default App;
