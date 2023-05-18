import erro from '../../../assets/icone_erro.png'
import quase from '../../../assets/icone_quase.png'

function ScoreList({image}) {

    function scoreDataTest(){
        if (image === erro){
            return 'no-icon';
        } else if (image === quase){
            return 'partial-icon';
        } else {
            return 'zap-icon';
        }
    }

    return (
            <img 
                data-test={scoreDataTest()}
                src={image} 
                alt='score'
            />
        );
}

export default ScoreList