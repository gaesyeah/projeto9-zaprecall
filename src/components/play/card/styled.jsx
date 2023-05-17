import { styled } from "styled-components";

const SCcard = styled.li`
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    width: 300px;
    height: ${({playStage}) => (playStage === 1) ? '131px' : ((playStage === 2) ? 'auto' : '65px')};
    flex-direction: ${({playStage}) => (playStage === 2) ? 'column' : 'unset'};
    background-color: ${({playStage}) => (playStage === 1 || playStage === 2) ? '#FFFFD5' : '#FFFFFF'};
    p{
        font-family: 'Recursive', sans-serif;
        color: ${({answerText}) => (answerText ===  'erro') ? '#FF3030' : ((answerText ===  'quase') ? '#FF922E' : ((answerText ===  'certo') ? '#2FBE34' : '#333333'))};
        text-decoration-line: ${({answerText}) => (answerText ===  undefined) ? 'none' : 'line-through'};
        font-weight: ${({playStage}) => (playStage === 1 || playStage === 2) ? '400' : '700'};
        font-size: ${({playStage}) => (playStage === 1 || playStage === 2) ? '18px' : '16px'};
        line-height: ${({playStage}) => (playStage === 1 || playStage === 2) ? '22px' : '19px'};
        margin-left: 15px;
        margin-top: ${({playStage}) => (playStage === 1 || playStage === 2) ? '18px' : '23px'};
        margin-bottom: ${({playStage}) => (playStage === 2) ? '22px' : '0px'};
        width: ${({playStage}) => (playStage === 1 || playStage === 2) ? '270px' : 'auto'};
    }
    img{
        cursor: ${({playStage}) === 'answer' ? 'pointer' : 'default'} ;
        position: ${({playStage}) => (playStage === 1) ? 'absolute' : 'static'};
        margin-top: ${({playStage}) => (playStage === 0) ? '20px' : ((playStage === 1) ? '105px' : undefined)};
        margin-left: ${({playStage}) => (playStage === 0) ? '163px' : ((playStage === 1) ? '254px;' : undefined)};
        height: ${({playStage}) => (playStage === 0) ? '23px' : ((playStage === 1) ? 'auto' : undefined)};
        width: ${({playStage}) => (playStage === 0 || playStage === 1) ? 'auto' : undefined};

    }
    div{
        display: flex;
        bottom: 0;
        margin-left: 13px;
        margin-bottom: 10px;
        column-gap: 8px;
        button{
            font-family: 'Recursive', sans-serif;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #FFFFFF;

            cursor: pointer;
            width: 85.17px;
            height: 37.17px;
            border-radius: 5px;
            border: none;
            &:nth-child(1){
                background-color: #FF3030;
            }
            &:nth-child(2){
                background-color: #FF922E;
            }
            &:nth-child(3){
                background-color: #2FBE34;
            }
        }
    }
`;

export default SCcard