import { styled } from "styled-components";

const SCstart = styled.div`
    background-color: #FB6B6B;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 136px;
        height: 161px;
    }
    h1{
        margin-bottom: 30px;
        margin-top: 13px;
    
        font-family: 'Righteous', cursive;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.012em;
        color: #FFFFFF;
    }
    button{
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    
        cursor: pointer;
        width: 246px;
        height: 54px;
        color: #D70900;
        background-color: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
    }
`;

export default SCstart;