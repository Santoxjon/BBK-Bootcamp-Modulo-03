import logo from './logo.svg';
import './App.css';
import FordFocus from './FordFocus';

function App() {
  let ffArray = ["Rojo", "Verde", "Azul", "Blanco"];
  let ffList = ffArray.map((color) =>
    <FordFocus wheels="4" height="1.6m" length="4.1m" color={color} />
  );

  return (
    <>
      {ffList}
    </>
  );
}

export default App;
