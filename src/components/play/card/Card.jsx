import { useState } from 'react'
import setaPlay from '../../../assets/seta_play.png'
import setaVirar from '../../../assets/seta_virar.png'
import certo from '../../../assets/icone_certo.png'
import quase from '../../../assets/icone_quase.png'
import erro from '../../../assets/icone_erro.png'
import SCcard from './Styled'

function Card({card, index, arrAnswer, setArrAnswer}) {

    const [playStage, setPlayStage] = useState(0); //variavel para verificar se o usuario começou a jogar/respondeu/não respondeu
    const [answerIcon, setAnswerIcon] = useState(undefined); //variavel para alterar o icone da resposta após o usuario responder
    const [answerText, setAnswerText] = useState('#333333') //variavel para alterar o css do "pergunta x" após o usuario responder, baseado na resposta

    const [questionIcon, setQuestionIcon] = useState(setaPlay); //variavel para alterar o icone dos cards, com base no "estagio" do mesmo
    const [questionP, setQuestionP] = useState(`Pergunta ${index+1}`); //variavel para alterar o conteudo do texto dos cards, com base no "estagio" do mesmo

    function changePlayStage(){
        const count = playStage + 1;
        setPlayStage(count);

        if (count === 1){
            setQuestionP(card.question);
            setQuestionIcon(setaVirar);
        } else if (count === 2){
            setQuestionP(card.answer);
            setQuestionIcon(undefined);
        }
    }

    function userAnswer(event) {
        //altera a variavel para que todos os switch case entrem no default, voltando para o estado inicial da <li>, que antes era 0
        setPlayStage(playStage + 1);
        setQuestionP(`Pergunta ${index+1}`);

        //altera o icone baseado na resposta
        const text = event.target.textContent;
        if (text === 'Não lembrei'){
            setAnswerIcon(erro);
            setAnswerText('#FF3030');
            setArrAnswer([...arrAnswer,erro]);
        }else if (text === 'Quase não lembrei'){
            setAnswerIcon(quase);
            setAnswerText('#FF922E');
            setArrAnswer([...arrAnswer,quase]);
        } else {
            setAnswerIcon(certo);
            setAnswerText('#2FBE34');
            setArrAnswer([...arrAnswer,certo]);
        }
    }

    function stageDataTest(){
        if (playStage === 0){
            return 'play-btn';
        } else if (playStage === 1){
            return 'turn-btn';
        } else if (playStage === 3){
            if (answerIcon === erro){
                return 'no-icon';
            } else if (answerIcon === quase){
                return 'zap-icon';
            } else if (answerIcon === certo){
                return 'partial-icon';
            }
        }
    }

    return(
        <SCcard stage={playStage} answer={answerText}>
            <p>{questionP}</p>
            <img
                data-test={stageDataTest()}
                onClick={playStage === 3 ? undefined : changePlayStage}
                src={playStage === 3 ? answerIcon : questionIcon}
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