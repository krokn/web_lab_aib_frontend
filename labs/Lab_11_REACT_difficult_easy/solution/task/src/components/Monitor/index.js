import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: #dddcdd;
    background-color: #1e1f21;
    padding: 16px;
`;

const TextWrapper = styled.span`
    font-size: 32px;
    color: black;
    font-weight: bold;
`;

const TitleWrapper = styled(TextWrapper)`
    font-weight: bold;
    margin: 8px;
    color: white;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonWrapper = styled.button`
    border: unset;
    background-color:#565759;
    height: 20px;
    margin-right: 2px;
    border-radius: 4px;
    color: #e6e6e6;
`;

const TodayButton = styled(ButtonWrapper)`
    padding-right: 16px;
    padding-left: 16px;
    font-weight: bold;
`;

const Krujok = styled(TextWrapper)`
    background-color: #ff9900;
    border-radius: 10px;
    padding-bottom: 3px;
    padding-left: 3px;
    padding-right: 3px;
`;

const Monitor = ({today,prevHandler, curHandler, nextHandler})=>{
    return(
        <DivWrapper>
            <div>
                <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
                <Krujok>
                    <TextWrapper>{today.format('YYYY')}</TextWrapper>
                </Krujok>
            </div>
            <ButtonsWrapper>
                <ButtonWrapper onClick={prevHandler}>&lt;</ButtonWrapper>
                <TodayButton onClick={curHandler}>today</TodayButton>
                <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
            </ButtonsWrapper>
        </DivWrapper>
    );
}

export { Monitor }