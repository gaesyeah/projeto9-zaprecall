import { styled } from "styled-components"

export const SCplay = styled.div`
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    div:nth-child(1){
        cursor: pointer;
        display: flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 54px;
        img{
            height: 60px;
            width: 52px;
            margin-right: 17px;
        }
        h2{
            font-family: 'Righteous', cursive;
            font-weight: 400;
            font-size: 36px;
            line-height: 45px;
            letter-spacing: -0.012em;
            color: #FFFFFF;
            display: flex;
            align-items: center;
        }
    }
    ul{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        margin-bottom: 192px;
    }
`;

export const SCscore = styled.div`
    transition: height 200ms;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: ${({all}) => all ? '171px' : '70px'};
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    div:nth-child(1){
        margin: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            font-family: 'Recursive', sans-serif;
            color: #333333;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 14px;
            font-weight: 700;
            span{
                font-size: 23px;
                margin-right: 5px;
            }
        }
        p:last-child{
            width: 222px;
            text-align: center;
            font-weight: 400;
        }
    }
    p{
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    div:last-child{
        display: flex;
        margin-top: 6px;
        column-gap: 5px; 
    }
`;