import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Book from './Book';

const libreria = {
  usuario: {
    nombre: "Javier",
    vip: false,
    imagen:
      "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg"
  },
  libros: [
    {
      id: "1",
      titulo: "El Juego de Ender",
      autor: "Orson Scott Card",
      editorial: "Ediciones B / Zeta",
      descripcion:
        "La Tierra está amenazada por una especie extraterrestre de insectos quepretende destruir la humanidad. Para vencerlos se precisa la intervención de un genio militar,por lo cual se permite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limitaa dos el número de descendientes. Ender se entrenará en una estación espacial, superará asus rivales y se convertirá en la persona capaz de dirigir las flotas terrestres contra los insectosde otros mundos.",
      img: "https://i.pinimg.com/474x/1e/6c/50/1e6c50e97899bbfed4fa294dc6f64223.jpg",
      stock: 25
    },
    {
      id: "2",
      titulo: "Juego de tronos",
      autor: "George R. R. Martin",
      editorial: "Gigamesh",
      descripcion:
        "Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord EddardStark, señor de Invernalia, deja sus dominios para unirse a la corte de su amigo el rey RobertBaratheon, llamado el Usurpador, hombre díscolo y otrora guerrero audaz cuyas mayoresaficiones son comer, beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano delRey e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todoslos suyos. En un mundo cuyas estaciones pueden durar decenios y en el que retazos de unamagia inmemorial y olvidada surgen en los rincones más sombrios y maravillosos, la traición yla lealtad, la compasión y la sed de venganza, el amor y el poder hacen del juego de tronos unapoderosa trampa que atrapará en sus fauces a los personajes... y al lector.",
      img: "https://www.laluilolo.com/wp-content/uploads/2019/09/sport-water-eng-garnet-350x350.jpg",
      stock: 2
    },
    {
      id: "3",
      titulo: "I robot",
      autor: "Isaac Asimov",
      editorial: "Edhasa",
      descripcion:
        "Los robots de Isaac Asimov son máquinas capaces de llevar a cabo muydiversas tareas, y que a menudo se plantean a sí mismos problemas de 'conducta humana'.Pero estas cuestiones se resuelven en Yo, robot en el ámbito de las tres leyes fundamentalesde la robótica, concebidas por Asimov, y que no dejan de proponer extraordinarias paradojasque a veces se explican por errores de funcionamiento y otras por la creciente complejidad delos 'programas'. Las paradojas que se plantean en estos relatos futuristas no son sóloingeniosos ejercicios intelectuales sino sobre todo una indagación sobre la situación delhombre actual en relación con los avances tecnológicos y con la experiencia del tiempo.",
      img: "http://frutasfercas.com/wp-content/uploads/2018/03/limon-1-350x350.jpg",
      stock: 10
    }
  ],
};


let randomNumber = Math.floor(Math.random() * libreria.libros.length);

function App() {
  let [vip, setVip] = useState(libreria.usuario.vip);
  let [greetings, setGreetings] = useState("");

  let books = libreria.libros;
  let bookList = books.map((book, index) =>
    <Book key={book.id} id={book.id} title={book.titulo} author={book.autor} description={book.descripcion} image={book.img} stock={book.stock} index={index} libreria={libreria} />
  );

  function toVip() {
    libreria.usuario.vip = !vip;
    setVip(libreria.usuario.vip);
    setGreetings(libreria.usuario.vip ? "Bienvenido de nuevo, " : "");
  }
  return (
    <div className="App">

      <header>
        <div className="left-header">
          <img src={libreria.usuario.imagen} />
          <h1>{greetings}{libreria.usuario.nombre}</h1>
        </div>
        <button onClick={toVip}>Cambiar rango!</button>
      </header>
      <main>
        {bookList}
      </main>
      <footer>
        <h3>⬐ ¡ Libro de OFERTA ! ⬎</h3>
        <p>{libreria.libros[randomNumber].titulo} - {libreria.libros[randomNumber].autor}</p>
      </footer>
    </div>
  );
}

export default App;
