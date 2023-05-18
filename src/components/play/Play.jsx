import { useState } from 'react'
import randomizedCards from '../play/card/cards'
import logo from '../../assets/logo.png'
import erro from '../../assets/icone_erro.png'
import { SCplay, SCscore } from './Styled'
import Card from '../play/card/Card'
import ScoreList from './score/ScoreList'

function Play() {

    //retorna uma comparação, para verificar se todos os cards já foram respondidos
    function allAnswered() {
        return arrAnswer.length === randomizedCards.length;
    }
    //conta a quantidade de erros
    function wrongAnswers(){
        return arrAnswer.filter(icon => (icon === erro) && icon).length;
    }

    const [arrAnswer, setArrAnswer] = useState([]); //variavel que guarda a quantidade de vezes que o usuario jogou, e se acertou, errou ou quase acertou

    return (
        <SCplay>
            <div>
                <img src={logo} alt='logo' />
                <h2>ZapRecall</h2>
            </div>
            <ul>
                {randomizedCards.map((card, index) =>
                    <Card
                        card={card}
                        index={index}
                        arrAnswer={arrAnswer}
                        setArrAnswer={setArrAnswer}
                        key={card.id}
                    />
                )}
            </ul>
            <SCscore all={allAnswered()} data-test="footer">
                {allAnswered()
                    &&
                    <div data-test="finish-text">
                        {!arrAnswer.includes(erro)
                            ?
                            <>
                                <p><span>🥳</span> Parabéns!</p>
                                <p>Você não esqueceu de nenhum flashcard!</p>
                            </>
                            :
                            <>
                                <p><span>😥</span> Putz...</p>
                                <p>
                                {wrongAnswers() !== randomizedCards.length 
                                    ?
                                    `Você não lembrou de ${wrongAnswers()}... Mas não desanime!` 
                                    : 
                                    'Você não lembrou de nenhum, estude mais!'
                                }
                                </p>
                            </>
                        }
                    </div>
                }
                <p>{arrAnswer.length}/{randomizedCards.length} CONCLUÍDOS</p>
                <div>
                    {arrAnswer.map((icon, i) => 
                        <ScoreList image={icon} key={i + icon} />
                    )}
                </div>
            </SCscore>
        </SCplay>
    );
}

export default Play