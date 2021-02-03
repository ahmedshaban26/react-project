import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';


const Section = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 0rem;
    font-family: 'Montserrat' ,sans-serif;

`
const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 20);
    display: flex;

    @media screen and (max-width : 768px) {
        flex-direction: column;
    }
`
const Head = styled.h1 `
    display: flex;
    padding-left : 3rem;
    justify-content: left;
    align-items: left;

    @media screen and (max-width : 768px) {
        font-size : 20px;
    }
`
const ColumnLeft = styled.div`
    padding: 1rem ;
    padding-left : 3rem;
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;

    @media screen and (max-width : 768px) {
        padding:0rem 3rem;
    }

    img { 
        width: 100%;
        height: 60%;
        object-fit: cover;

     
    }    
    h1 {
        padding-top: 20px;
        font-size: 20px;
    }
    
    
    }`

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left : 0.5rem;
    margin-top : 2px;
`;

const ColumnRight = styled.div`
    padding: 1rem;
    padding-right : 3rem;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;


    img { 
        width: 100%;
        height: 60%;
        object-fit: cover;
       
        
    }

    h1 {
        padding-top: 20px;
        font-size: 18px;
    }
    @media screen and (max-width : 768px) {
        padding:2rem 3rem;
    }
   
`

const NewHomes = ({heading, buttonLabel , image ,headingTwo , imageTwo,buttonLabelTwo }) => {
    return (
        <Section>
                <Head>View Our Newest Homes</Head>
            <Container>
                <ColumnLeft>
                    <img src={image} alt='home' />
                    <h1>{heading}</h1>
                    <Button to='/homes'  style={{ 'marginLeft': '-45px'}} >
                    {buttonLabel} <Arrow /> </Button>
                </ColumnLeft>
                <ColumnRight>
                    <img src={imageTwo} alt='home' />
                    <h1>{headingTwo}</h1>
                    <Button to='/homes'  style={{ 'marginLeft': '-45px'}} >
                    {buttonLabel} <Arrow /> </Button>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default NewHomes
