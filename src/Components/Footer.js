import React from 'react';
import {Link} from 'react-router-dom';
import {IoMdArrowRoundForward} from 'react-icons/io';
import styled , {css} from 'styled-components/macro';
import {TiSocialYoutube , TiSocialTwitter ,TiSocialLinkedin , TiSocialFacebook, TiSocialInstagram} from 'react-icons/ti';

const ListOne = [
    { title : 'Contact Us' , link : '/' },
    { title : 'FAQ' , link : '/' },
    { title : 'Support', link : '/'  },
    { title : 'Questions' , link : '/'  }
];
const ListTwo = [
    { title : 'Offices' , link : '/' },
    { title : 'United State' ,link : '/'  },
    { title : 'Europe' , link : '/'  },
    { title : 'Clifornia' ,link : '/'  }
];

const Section = styled.div `
    width: 100%;
    height: 100%;
    padding: 3rem 0rem;
    color : #fff;
    background: #000d1a;
    `
const Container = styled.div `
    display: Flex;



    @media screen and (max-width : 768px) {
        grid-template-columns : 1fr;
        flex-direction: column
`
const LeftColumn = styled.div `
        display: flex;
        flex-direction: column;
        padding: 5rem 6rem 2rem 4rem;
        width: 60%;

        h1 {
            font-size : 40px;
            padding-bottom : 8rem;

            @media screen and (max-width : 768px) {
                padding-bottom : 4rem;
        
            }
    

        }
        @media screen and (max-width : 768px) {
            width: 100%;
        }

`
const Icon = styled(Link) ``
const YouTube = styled(TiSocialYoutube) `
    width: 40px;
    height: 40px;
    padding-right: 5px;
    color: #c87938;
`
const Twitter = styled(TiSocialTwitter) `
    width: 40px;
    height: 40px;
    color: #c87938;
    padding-right: 5px;

`
const Linkedin = styled(TiSocialLinkedin) `
    width: 40px;
    height: 40px;
    color: #c87938;
    padding-right: 5px;

`
const Facebook = styled(TiSocialFacebook) `
    width: 40px;
    height: 40px;
    color: #c87938;
    padding-right: 5px;

`
const Instagram = styled(TiSocialInstagram) `
    width: 40px;
    height: 40px;
    color: #c87938;
    padding-right: 5px;

`

const RightColumn =styled.div `
        display: flex; 
        padding: 5rem 0rem ;
        font-size: 25px;

        @media screen and (max-width : 768px) {
            font-size: 18px;
            padding-top: 2rem;
        }


`
const Left = styled.div `
        display: flex;
        flex-direction: column;

        @media screen and (max-width : 768px) {
            padding-left : 4rem
        }
`
const Right = styled.div `
    display: flex;
    flex-direction: column;

    
`
const NavLink = css `
    color : #fff;
    display : flex;
    align-items : center;
    cursor : pointer;
    text-decoration : none;
`

const ListLink = styled(Link) `
        ${NavLink}
        padding : 0 4rem 0.7rem 0;
        font-weight: 400;
        font-size : 20px
        text-decoration: none;

        

`
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
    margin-top: 6rem;
    padding : ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color : ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size : ${({big}) => (big ? '20px' : '14px')};
    &:hover {
        transform : translateY(-2px);
    }

    @media screen and (max-width : 768px) {
        position: absolute;
        margin: 11rem 2rem 2rem -6.5rem;
`
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left : 0.5rem;
    margin-top : 2px;
`;


const Footer = () => {
    return (
        <Section>
            <Container>
                <LeftColumn>
                    <h1> Let's Find <br></br> Your Dream Home </h1>
                    <Icon to='/' >
                        <YouTube  />
                        <Twitter />
                        <Linkedin  />
                        <Facebook  />
                        <Instagram  />
                    </Icon>
                </LeftColumn>
                <RightColumn>
                    <Left>
                        {ListOne.map((item , index) => (
                            <ListLink to={item.link} key = {index}> 
                                {item.title}
                            </ListLink>
                        ))}
                    </Left>
                    <Right>
                        {ListTwo.map((item , index) => (
                            <ListLink to={item.link} key = {index}>
                                {item.title}
                            </ListLink>
                        ))}
                        <Button to='/chat'>Let's Chat <Arrow /></Button>

                    </Right>
                </RightColumn>
            </Container>
        </Section>
    )
}

export default Footer
