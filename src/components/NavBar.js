import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Nav = styled.nav`
    a {
    text-decoration: none;
    color: black;
    }
li {
    list-style-type:none;
    margin: 20px;

}
ul {
    display: flex;
    margin-right: 100px;
    @media (max-width: 643px) {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
}

}
`
const Header = styled.header`
h1 {
    margin-left: 100px;
        @media (max-width: 643px) {
        margin-left: auto;
        margin-right: auto;
        justify-content: center;

    }
}
@media (max-width: 643px) {
    height: 200px;
}
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
max-width: 100%;
height: 100px;
margin: 0;
background: white;
`

const NavBar = () => {
  return (
    <Header>
        <h1>STAR WARS</h1>
        <Nav>
            <ul>
                <li>
                    <Link to="/">Strona główna</Link>
                </li>
                <li>
                    <Link to="/galery">Galeria</Link>
                </li>
            </ul>
        </Nav>
    </Header>
  );
}

export default NavBar;
