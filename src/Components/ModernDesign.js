import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem 0rem;
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 20);
    display: flex;
    
    @media screen and (max-width : 768px) {
        flex-direction : column;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    line-height: 1.4;
    padding: 1rem 4rem 1rem 0rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    @media screen and (max-width : 768px) {
        padding: 5rem 2rem 5rem 3rem;

    }

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem , 6vw , 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left : 0.5rem;
    margin-top : 2px;
`;

const ColumnRight = styled.div`
    padding: 1rem 0rem 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};
    display: flex;
    justify-content: center;
    align-items: center;

    
    @media screen and (max-width : 768px) {
        order: ${({reverse}) => (reverse ? '1' : '2')};
    }

    img { 
        width: 80%;
        height: 90%;
        object-fit: cover;

        @media screen and (max-width : 768px) {
            width: 85%;
            height: 100%;
            display: flex;
            margin: 0px 2rem 0 0;
        }
    }
`;

const ModernDesign = ({heading , ParagraphOne , ParagraphTwo
, buttonLabel , image }) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{ParagraphOne}</p>
                    <p>{ParagraphTwo}</p>
                    <Button to='/homes' primary='true'>{buttonLabel}<Arrow /></Button>
                </ColumnLeft>
                <ColumnRight>
                    <img src={image} alt='home' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default ModernDesign
