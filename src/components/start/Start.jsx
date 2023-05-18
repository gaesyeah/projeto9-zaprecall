import logo from '../../assets/logo.png'
import SCstart from './Styled'

function Start({setChangeScreen}) {
    return(
        <SCstart>
            <img src={logo} alt='logo' ></img>
            <h1>ZapRecall</h1>
            <button onClick={() => setChangeScreen(true)}>Iniciar Recall!</button>
        </SCstart>
    );
}

export default Start