import randomizedCards from './card/cards';
import Card from './card/Card';

import logo from '../../assets/logo.png'

import { useState } from 'react';

function Play() {

    const [arrAnswer, setArrAnswer] =  useState([]); //variavel que guarda a quantidade de vezes que o usuario jogou, e se acertou, errou ou quase acertou

    return (
        <div className='play'>
            <div className='logo'>
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
            <div className='result'>
                <p>{arrAnswer.length}/{randomizedCards.length} CONCLUÍDOS</p>
                <div>
                    {arrAnswer.map((icon, i) => <img src={icon} key={i+icon}/>)}
                </div>
            </div>
        </div>
    );
}

export default Play