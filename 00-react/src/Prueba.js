import Header from "./Header";
import Main from './Main';
import Footer from './Footer';

function Prueba() {
    return (
        <>
            <Header saludo="Hola Jon!" />
            {/* <Header saludo={15}/> */} {/* Usar {} cuando el parámetro no sea String */}
            <Main />
            <Footer />
        </>
    );
}

export default Prueba;