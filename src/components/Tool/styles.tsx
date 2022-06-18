import styled from 'styled-components';

type CalculatorButtonProps = {
    isLarge?: boolean;
    isOperation?: boolean;
}

export const Calculator = styled.div `
    width: 100%;
    height: 200px;
`;

export const Display = styled.div `
    height: 70px;
    width: 200px;
    background-color: gray;
    padding: 30px 15px;
    box-sizing: border-box;
    font-family: 'Arial';
    color: white;
    text-align: right;
`;

export const CalculatorRow = styled.div ``;

export const CalculatorButton = styled.button<CalculatorButtonProps> `
    height: 50px;
    width: ${ props => props.isLarge ? '100px' : '50px' };
    border: 1px solid #bbb;
    cursor: pointer;
    background-color: ${ props => props.isOperation ? '#e67e22' : '#ccc' };
    color: ${ props => props.isOperation ? 'white' : 'black' };
`;