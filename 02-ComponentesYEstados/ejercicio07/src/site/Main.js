import Boat from './Boat';

function Main(props) {
    let boats = props.dock.barcos;
    let boatList = boats.map((boat, index) => <Boat key={index} boat={boat} />);
    return (
        <main>
            <div id="boats">
                {boatList}
            </div>
        </main>
    );
}
export default Main;