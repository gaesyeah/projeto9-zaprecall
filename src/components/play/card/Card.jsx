import { useState } from 'react'
import setaPlay from '../../../assets/seta_play.png'
import setaVirar from '../../../assets/seta_virar.png'
import erro from '../../../assets/icone_erro.png'
import quase from '../../../assets/icone_quase.png'
import certo from '../../../assets/icone_certo.png'
import SCcard from './Styled'

function Card({card, index, arrAnswer, setArrAnswer}) {

    const [playStage, setPlayStage] = useState(0); //variavel para verificar se o usuario começou a jogar/respondeu/não respondeu

    const [cardText, setCardText] = useState(`Pergunta ${index+1}`); //variavel para alterar o conteudo do texto dos cards, com base no "estagio" do mesmo
    const [textColor, setTextColor] = useState('#333333') //variavel para alterar o css do "pergunta x" após o usuario responder, baseado na resposta
    const [questionIcon, setQuestionIcon] = useState(setaPlay); //variavel para alterar o icone dos cards, com base no "estagio" do mesmo
    const [answerIcon, setAnswerIcon] = useState(undefined); //variavel para alterar o icone da resposta após o usuario responder

    function changePlayStage(){
        const count = playStage + 1;
        setPlayStage(count);

        if (count === 1){
            setCardText(card.question);
            setQuestionIcon(setaVirar);
        } else if (count === 2){
            setCardText(card.answer);
            setQuestionIcon(undefined);
        }
    }

    function userAnswer(answer) {
        setPlayStage(playStage + 1);
        setCardText(`Pergunta ${index+1}`);
        setAnswerIcon(answer);
        
        setArrAnswer([...arrAnswer,answer]);

        if (answer === erro){
            setTextColor('#FF3030');
        }else if (answer === quase){
            setTextColor('#FF922E');
        } else {
            setTextColor('#2FBE34');
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
                return 'partial-icon';
            } else if (answerIcon === certo){
                return 'zap-icon';
            }
        }
    }

    return(
        <SCcard 
            data-test="flashcard" 
            stage={playStage} 
            color={textColor}
        >
            <p data-test="flashcard-text">
                {cardText}
            </p>
            {playStage !== 2
                &&
                <img
                    data-test={stageDataTest()}
                    onClick={playStage === 3 ? undefined : changePlayStage}
                    src={playStage === 3 ? answerIcon : questionIcon}
                    alt='icon'
                />
            }
            {playStage === 2 
                && 
                <div>
                    <button
                        onClick={() => userAnswer(erro)} 
                        data-test="no-btn"
                    >Não lembrei</button>
                    <button
                        onClick={() => userAnswer(quase)}
                        data-test="partial-btn"
                    >Quase não lembrei</button>
                    <button
                        onClick={() => userAnswer(certo)}
                        data-test="zap-btn"
                    >Zap!</button>
                </div>
            }
        </SCcard>
    );
}

export default Card