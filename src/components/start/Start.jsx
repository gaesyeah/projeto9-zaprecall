import logo from '../../assets/logo.png'
import SCstart from './Styled'
import CARDS from '../../data'

function Start({setChangeScreen, setRandomizedCards}) {

    function triggerStart(){
        setChangeScreen(true);
        setRandomizedCards([...CARDS.sort(() => Math.random() - 0.5)]);
    }

    return(
        <SCstart>
            <img src={logo} alt='logo' ></img>
            <h1>ZapRecall</h1>
            <button
                data-test="start-btn"
                onClick={triggerStart}
                >Iniciar Recall!</button>
        </SCstart>
    );
}

export default Start