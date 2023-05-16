import setaPlay from '../../assets/seta_play.png'

function Card({card,index}) {
    return(
        <li>
            <p>{`Pergunta ${index+1}`}</p>
            <img
                onClick={() => console.log('teste')}
                src={setaPlay} 
                alt='setaPlay' 
            />
        </li>
    );
}

export default Card