import { useState } from 'react';
import setaPlay from '../../../assets/seta_play.png'
import setaVirar from '../../../assets/seta_virar.png'
import certo from '../../../assets/icone_certo.png'
import quase from '../../../assets/icone_quase.png'
import erro from '../../../assets/icone_erro.png'

import SCcard from './styled';

function Card({card, index, arrAnswer, setArrAnswer}) {

    const [playStage, setPlayStage] = useState(0); //variavel para verificar se o usuario começou a jogar/respondeu/não respondeu
    const [answerIcon, setAnswerIcon] = useState(undefined); //variavel para alterar o icone após o usuario responder, baseado na resposta
    const [answerText, setAnswerText] = useState(undefined) //variavel para alterar o css do "pergunta x" após o usuario responder, baseado na resposta

    //altera o conteudo da tag <p> com base na variavel playStage
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
    //altera o conteudo da imagem, da tag <img> com base na variavel playStage
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

    function userAnswer(event) {
        //altera a variavel para que todos os switch case entrem no default, voltando para o estado inicial da <li>, que antes era 0
        setPlayStage('answer');

        //altera o icone baseado na resposta
        const text = event.target.textContent;
        if (text === 'Não lembrei'){
            setAnswerIcon(erro);
            setAnswerText('erro');
            setArrAnswer([...arrAnswer,erro]);
        }else if (text === 'Quase não lembrei'){
            setAnswerIcon(quase);
            setAnswerText('quase');
            setArrAnswer([...arrAnswer,quase]);
        } else {
            setAnswerIcon(certo);
            setAnswerText('certo');
            setArrAnswer([...arrAnswer,certo]);
        }
    }

    return(
        <SCcard stage={playStage} answer={answerText}>
            <p>
                {pStage()}
            </p>
            <img
                onClick={playStage === 'answer' ? undefined : (() => setPlayStage(playStage+1))}
                src={playStage === 'answer' ? answerIcon : srcStage()}
                alt={playStage === 2 ? undefined : 'icon'}
            />
            {playStage === 2 && (
                <div>
                    <button onClick={userAnswer}>Não lembrei</button>
                    <button onClick={userAnswer}>Quase não lembrei</button>
                    <button onClick={userAnswer}>Zap!</button>
                </div>
            )}
        </SCcard>
    );
}

export default Card