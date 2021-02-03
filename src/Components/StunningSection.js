import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';



const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem 0rem;
    background: #000d1a;
`;

const Container = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin: 10rem 0rem;

    h1 {
        
        margin-bottom: 1rem;
        font-size: clamp(1.5rem , 6vw , 2rem);
        
    }

    p {
        margin-bottom: 2rem;
        
    }
    img {  
    width: 45%;
    height: 80%;
    object-fit: cover;
    position: absolute;
    right: 0;

    @media screen and (max-width : 768px) {
        width: 80%;
        height: 50%;
        object-fit: cover;
        order: 1;
        padding: -8rem;
        position: absolute;
        margin-top: -20rem;
        margin-right: 2rem;
        
    }
    
    }

    @media screen and (max-width : 768px) {
        flex-direction: column;
    }
`;



const Left = styled.div`
    flex-firection :column;
    padding: 5rem 4.5rem;
    justify-content: left;
    align-items: left;

    
    h1 {
        margin-bottom: 30px;
        @media screen and (max-width : 768px) {
            margin-bottom: 30px;
            margin-top: 15rem;
            
        }
    }
    p {
        width : 50%;
        @media screen and (max-width : 768px) {
            width: 100%;
            line-height: 20px;
            
        }
    }

    @media screen and (max-width : 768px) {
        flex-direction: column;
        width: 115%;
    }
    
`;

const Button = styled(Link)`
background : #c87938;
white-space : nowrap;
outline : none;
border : none;
min-width : 100px;
max-width : 200px;
cursor : pointer ;
text-decoration : none;
transition : 0.3s;
display : flex;
justify-content : center;
align-item : center;
padding : ${({big}) => (big ? '16px 40px' : '14px 24px')};
color : ${({primary}) => (primary ? '#fff' : '#000d1a')};
font-size : ${({big}) => (big ? '20px' : '14px')};
&:hover {
    transform : translateY(-2px);
}
`

const StunningSection = ({heading , ParagraphOne , ParagraphTwo, image}) => {
    return (
        <Section>
            <Container>
                    <Left>
                    <h1>{heading}</h1>
                    <p>{ParagraphOne}</p>
                    <p>{ParagraphTwo}</p>
                    <Button to='/'> Learn More </Button>
                    </Left>
                    <img src={image} alt='home' />
            </Container>
        </Section>
    )
}

export default StunningSection
