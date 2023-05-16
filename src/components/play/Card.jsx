import { useState } from 'react';
import setaPlay from '../../assets/seta_play.png'
import setaVirar from '../../assets/seta_virar.png'

function Card({card,index}) {

    const [playStage, setPlayStage] = useState(0);

    
    function classStage() {
        switch(playStage) {
            case 1:
                return 'stage1';
                break;
            case 2: 
                return 'stage2';
                break;
            default:
                return 'stage0';
        } 
    }

    function pStage() {
        switch(playStage) {
            case 1:
                return card.question;
                break;
            case 2: 
                return card.answer;
                break;
            default:
                return `Pergunta ${index+1}`;
        }
    }

    function srcStage() {
        switch(playStage) {
            case 1:
                return setaVirar;
                break;
            case 2: 
                return undefined;
                break;
            default:
                return setaPlay;
        } 
    }

    return(
        <li className={classStage()}>
            <span><p>{pStage()}</p></span>
            <img
                onClick={() => setPlayStage(playStage+1)}
                src={srcStage()} 
            />
        </li>
    );
}

export default Card