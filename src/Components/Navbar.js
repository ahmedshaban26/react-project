import React , {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled , {css} from 'styled-components/macro';
import {Button} from './Button';
import {FaBars} from 'react-icons/fa';

const MenuData = [
    { title : 'About' , link : '/about' },
    { title : 'Homes' , link : '/homes' },
    { title : 'Rentals' , link : '/rentals' }
];



const Nav = styled.nav `
    background : ${({scrollNav}) => (scrollNav ? '#000' : '#000')};
    height : 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index : 100;
    position : fixed;
    width : 100%;
`
const NavLink = css `
    color : #fff;
    display : flex;
    align-items : center;
    padding : 0 1rem;
    height : 100%;
    cursor : pointer;
    text-decoration : none;
`


const Logo = styled(Link) `
    ${NavLink}
    font-size : 25px;
    font-weight : bold;
`
const MenuBars =styled(FaBars) `
    display : none;

    @media screen and (max-width : 768px) {
        display : block;
        height : 28px;
        width : 28px;
        cursor : pointer;
        position : absolute;
        top : 0;
        right : 0;
        transform : translate(-70% , 50%);
        color: #fff;
    }

`
const NavMenu =styled.div `
    display : flex;
    align-items : center;
    margin-right : -48px;
    font-size : 18px;

    @media screen and (max-width : 768px) {
        display : none;
    }
`

const NavMenuLinks = styled(Link) `
    ${NavLink}
`

const NavBtn = styled.div `
    display : flex;
    align-items : center;
    margin-right : 24px;

    @media screen and (max-width : 768px) {
        display : none;
    }
`

const Navbar = ({ toggle }) => {
    const [scrollNav , setScrollNav] = useState(false);

    const ChangeNav = () => {
        if ( window.screenY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll' , ChangeNav);
    }, []);
    return (
        <>
        <Nav scrollNav={scrollNav}>
            <Logo to='/'>ELIXP</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {MenuData.map((item , index) => (
                    <NavMenuLinks to={item.link} key = {index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
                
            <NavBtn>
                <Button to="/contact" primary='true' >
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar
