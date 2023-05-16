import cards from './card/cards';
import Card from './card/Card';

import logo from '../../assets/logo.png'

function Play() {
    return (
        <div className='play'>
            <div className='logo'>
                <img src={logo} alt='logo' />
                <h2>ZapRecall</h2>
            </div>
            <ul>
                {cards.sort(() => Math.random() - 0.5).
                    map((card, index) => <Card card={card} index={index} key={card.id}/>)
                }
            </ul>
            <div className='result'>
                <p>0/4 CONCLUÍDOS</p>
            </div>
        </div>
    );
}

export default Play