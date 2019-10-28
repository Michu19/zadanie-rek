import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

const Container = styled.div`
height: 600px;
display: flex;
justify-content: center;
align-items: center;
h1 {
    text-align: center;
    color: white;
}

`
const LandingPage = () => {
  return (
    <div>
    <NavBar/>
    <Container>
        <h1>Witamy na stronie poświęconej postaciom Gwiezdnych Wojen :) <br/>
        Zapraszam do galerii!</h1>
    </Container>
    </div>
  );
}

export default LandingPage;
