import { styled } from "styled-components"

const SCcard = styled.li`
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    width: 300px;
    height: ${({stage}) => (stage === 1) ? '131px' : ((stage === 2) ? 'auto' : '65px')};
    flex-direction: ${({stage}) => (stage === 2) ? 'column' : 'unset'};
    background-color: ${({stage}) => (stage === 1 || stage === 2) ? '#FFFFD5' : '#FFFFFF'};
    p{
        font-family: 'Recursive', sans-serif;
        font-weight: ${({stage}) => (stage === 1 || stage === 2) ? '400' : '700'};
        font-size: ${({stage}) => (stage === 1 || stage === 2) ? '18px' : '16px'};
        line-height: ${({stage}) => (stage === 1 || stage === 2) ? '22px' : '19px'};
        text-decoration-line: ${({answer}) => (answer ===  '#333333') ? 'none' : 'line-through'};
        color: ${({answer}) => answer};
        margin-left: 15px;
        margin-top: ${({stage}) => (stage === 1 || stage === 2) ? '18px' : '23px'};
        margin-bottom: ${({stage}) => (stage === 2) ? '22px' : '0px'};
        width: ${({stage}) => (stage === 1 || stage === 2) ? '270px' : 'auto'};
    }
    img{
        cursor: ${({stage}) => (stage === 3) ? 'default' : 'pointer'};
        position: ${({stage}) => (stage === 1) ? 'absolute' : 'static'};
        margin-top: ${({stage}) => (stage === 2) ? undefined : ((stage === 1) ? '105px' : '20px')};
        margin-left: ${({stage}) => (stage === 2) ? undefined : ((stage === 1) ? '254px' : '163px')};
        width: ${({stage}) => (stage === 2) ? undefined : 'auto'};
        height: ${({stage}) => (stage === 2) ? undefined : ((stage === 1) ? 'auto' : '23px')};
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