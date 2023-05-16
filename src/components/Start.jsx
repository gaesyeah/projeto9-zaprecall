import logo from '../assets/logo.png'

function Start({setChangeScreen}) {
    return(
        <div className='start'>
            <img src={logo} alt='logo' ></img>
            <h1>ZapRecall</h1>
            <button onClick={() => setChangeScreen(true)}>Iniciar Recall!</button>
        </div>
    );
}

export default Start