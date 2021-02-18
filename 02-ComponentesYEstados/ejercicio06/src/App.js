import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Book from './Book';

const libreria = {
  usuario: {
    nombre: "Javier",
    vip: false,
    imagen:
      "https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg",
  },
  libros: [
    {
      id: "1",
      titulo: "El Juego de Ender",
      autor: "Orson Scott Card",
      editorial: "Ediciones B / Zeta",
      descripcion:
        "La Tierra está amenazada por una especie extraterrestre de insectos quepretende destruir la humanidad. Para vencerlos se precisa la intervención de un genio militar,por lo cual se permite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limitaa dos el número de descendientes. Ender se entrenará en una estación espacial, superará asus rivales y se convertirá en la persona capaz de dirigir las flotas terrestres contra los insectosde otros mundos.",
      img: "​/images/image1.jpg",
      stock: 25,
    },
    {
      id: "2",
      titulo: "Juego de tronos",
      autor: "George R. R. Martin",
      editorial: "Gigamesh",
      descripcion:
        "Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord EddardStark, señor de Invernalia, deja sus dominios para unirse a la corte de su amigo el rey RobertBaratheon, llamado el Usurpador, hombre díscolo y otrora guerrero audaz cuyas mayoresaficiones son comer, beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano delRey e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todoslos suyos. En un mundo cuyas estaciones pueden durar decenios y en el que retazos de unamagia inmemorial y olvidada surgen en los rincones más sombrios y maravillosos, la traición yla lealtad, la compasión y la sed de venganza, el amor y el poder hacen del juego de tronos unapoderosa trampa que atrapará en sus fauces a los personajes... y al lector.",
      img:
        "​/images/image2.jpg",
      stock: 2,
    },
    {
      id: "3",
      titulo: "I robot",
      autor: "Isaac Asimov",
      editorial: "Edhasa",
      descripcion:
        "Los robots de Isaac Asimov son máquinas capaces de llevar a cabo muydiversas tareas, y que a menudo se plantean a sí mismos problemas de 'conducta humana'.Pero estas cuestiones se resuelven en Yo, robot en el ámbito de las tres leyes fundamentalesde la robótica, concebidas por Asimov, y que no dejan de proponer extraordinarias paradojasque a veces se explican por errores de funcionamiento y otras por la creciente complejidad delos 'programas'. Las paradojas que se plantean en estos relatos futuristas no son sóloingeniosos ejercicios intelectuales sino sobre todo una indagación sobre la situación delhombre actual en relación con los avances tecnológicos y con la experiencia del tiempo.",
      img: "/images/image3.jpg",
      stock: 10,
    },
  ],
};

function App() {
  let [vip, setVip] = useState(libreria.usuario.vip);
  let [greetings, setGreetings] = useState("");

  let books = libreria.libros;
  let bookList = books.map((book) =>
    <Book title={book.titulo} author={book.autor} description={book.descripcion} image={book.img} stock={book.stock} />
  );

  function toVip() {
    if (vip) {
      setVip(false);
      setGreetings("")
    }
    else {
      setVip(true);
      setGreetings("Bienvenido, ")
    }
  }
  return (
    <div className="App">

      <header>
        <h1>{greetings}{libreria.usuario.nombre}</h1>
        <img src={libreria.usuario.imagen} />
        <button onClick={toVip}>Cambiar rango!</button>
      </header>
      <main>
        {bookList}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
